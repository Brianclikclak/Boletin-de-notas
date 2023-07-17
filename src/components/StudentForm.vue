<script setup>
	import { reactive, computed, ref } from "vue";
	import StudentTemplate from "@/ClassObject/studentObject";
	import { useVuelidate } from "@vuelidate/core";

	import {
		required,
		minLength,
		maxLength,
		helpers,
		minValue,
		maxValue,
	} from "@vuelidate/validators";
		
	

    const student = reactive ({
        name: "",
        subject: "Select the subject",
        score: "",
    })

    const chooseSubject = value => {
            return !value.includes("Select the subject")
    };

    const rules = computed(() =>{
        return {
            name: {
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(18),
                    $lazy: true,
            },
            subject: {
                    chooseSubject: helpers.withMessage(
                        "Please, choose a subject",
                        chooseSubject
                    ),
            },
            score: {
                    required,
                    minValue: minValue(1),
                    maxValue: maxValue(10),
            },
        };
    });

    const v$ = useVuelidate(rules, student);

    let studenList = [];

    const emit = defineEmits(["sendData"]);

    const clearValueInputs = () => {
        student.name = "",
        student.subject = "Select your option",
        student.score = "",
        v$.value.$reset();
    };

    const sendData = async () => {
        const result = await v$.value.$validate();
        if (!result){
                return;
        }

        const studentUpdated = new StudentTemplate(
                student.name,
                student.subject,
                student.score,
        );

        studenList.push(studentUpdated);
        emit("sendData", studenList);

        clearValueInputs();


    };
</script>

<template>
	<form
		class="form"
		@submit.prevent="sendData"
	>
		<input
			type="text"
			name="student"
			id="student"
			placeholder="Enter a student's name to check their grade"
			class="form__input form__input-name"
			v-model="student.name"
		/>
		<span
			v-for="error in v$.name.$errors"
			:key="error.$uid"
			class="error-red"
		>
			{{ error.$message }}
		</span>

		<select
			v-model="student.subject"
			class="form__select form__select-title"
			name="subject"
			id="subject"


		>
			<option
				selected
				disabled
			>
				Select your option
			</option>
			<option class="option">History</option>
			<option class="option">Math</option>
			<option class="option">Chemistry</option>
			<option class="option">Music</option>
			<option class="option">Physical Education</option>
		</select>
		<span
			v-for="error in v$.subject.$errors"
			:key="error.$uid"
			class="error-red"
		>
			{{ error.$message }}
		</span>
		<input
			type="number"
			name="score"
			id="score"
			class="form__input form__input-score"
			placeholder="Enter a student's score (1-10)"
			min="1"
			max="10"
			v-model="student.score"
		/>
		<span
			v-for="error in v$.score.$errors"
			:key="error.$uid"
			class="error-red"
		>
			{{ error.$message }}
		</span>
		<button
			class="form__button"
			type="submit"
		>
			See score
		</button>
	</form>
</template>

<style lang="scss">


</style>