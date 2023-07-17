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
	<StudentForm @send-data="retrieveData" />
	<StudentList
		:key="componentListKey"
		:students="studentList"
		
	/>
</template>

<style scoped>
	body {
		width: 100vh;
		height: 100vh;
	}
</style>