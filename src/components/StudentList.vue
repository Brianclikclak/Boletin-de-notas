<script setup>
	import { qualificationInToGrades } from "../qualification/qualification";
	import { ref } from "vue";
	
	const props = defineProps({
		students: Array,
		datos: {},
	});
	
</script>
<template>
	<div v-show="students.length > 0 " class="container">
		<table class="container__table">
			<thead>
				<tr class="container__titles">
					<th class="container__keys">Name</th>
					<th class="container__keys">subject</th>
					<th class="container__keys">Calification</th>
				</tr>
			</thead>
			<tbody class="container__students">
				<tr v-for="{ name, subject, qualification } in students" :key="name">
					<td class="container__value">{{ name }}</td>
					<td
						class="container__value"
						
					>
						{{ subject }}
					</td>
					<td 
						class="container__value" 
						
					>
						{{ qualificationInToGrades(qualification) }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<style lang="scss">

</style>