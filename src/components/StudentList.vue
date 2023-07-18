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
				<tr class="table_row" v-for="{ name, subject, qualification } in students" :key="name">
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

<style scoped>

.container {
		margin-top: 1em;
		border: 3px solid rgb(244, 109, 72);
		border-radius: 5px;
		background-color: aliceblue;
		width: 50em;

		
}
.container__titles{
	color: yellowgreen;
}
.container__table{
	width: 100%;
	border-collapse: collapse;
}
.container__keys{
	padding: 1em;
	font-weight: bolder;
	text-transform: uppercase;
}
.container__value{
	text-align: center;
	text-transform: uppercase;
	line-height: 2;
	border-top: 1px solid;
}

.table_row{
border-bottom: 1px solid;
}





</style>



