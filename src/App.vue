<script setup>
	import { getCurrentInstance, ref, readonly } from "vue";
	import StudentForm from "./components/StudentForm.vue";
	import StudentList from "./components/StudentList.vue";

	let studentList = readonly([]);
	let componentListKey = ref(0);
	const instance = getCurrentInstance();

	function retrieveData(data) {
		studentList = data;
		forceRerenderList();
		instance.proxy.$forceUpdate();
	}

	function forceRerenderList() {
		componentListKey += 1;
	}
</script>

<template>
<body>
		
	
	<StudentForm @send-data="retrieveData" />
	<StudentList :key="componentListKey" :students="studentList"/>
</body>
</template>

<style >
*{
	margin:0;
	padding: 0;
	box-sizing: border-box;
}

	body{
	display: flex;
    flex-direction: column;
    align-items: center;
	background-image: url("./assets/images/memphis-abstract-hs-electives-education-sociology-subject-for-high-school-9th-grade-concepts-in-probability-and-statistics-geometric-powerpoint-background_44dc6cddd9__960_540.avif");
	background-size: cover;
	width: 100vw;
	height: 100vh;
}
</style>