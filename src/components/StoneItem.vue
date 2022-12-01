<template>
	<div>
		<v-row class="ma-0">
			<v-col class="pa-0" v-for="(item, i) in attempt" :key="i">👼</v-col>
			<VCol class="pa-0">
				<VBtn text @click="handlerAttemptButtonClick">도전!!!</VBtn>
			</VCol>
		</v-row>
	</div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

const props = defineProps<{ attempt: Number; successRate: Number }>();
const emit = defineEmits<{ (e: 'submit', result: boolean): void }>();

const handlerAttemptButtonClick = (): void => {
	console.log('attempt successRate', props.successRate);
	const result = getResult();
	emit('submit', result);
};

// 성공 여부
const getResult = (): boolean => {
	const array = new Uint8Array(1);
	window.crypto.getRandomValues(array);
	const range = 100;
	const max_range = 256;
	// 값이 넘어갔으면 다시 뽑기
	if (array[0] >= Math.floor(max_range / range) * range) {
		return getResult();
	}

	const value = array[0] % 100;
	// 값이 성공확률보다 크면 실패
	if (value > props.successRate) {
		return false;
	} else {
		return true;
	}
};
</script>

<style scoped></style>
