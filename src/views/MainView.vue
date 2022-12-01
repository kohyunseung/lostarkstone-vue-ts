<template>
	<VContainer>
		<VSelect v-model="stone" :items="stoneItems"></VSelect>
		<p><strong>선택한 돌: </strong> {{ stone }}</p>
		<p><strong>성공 확률: </strong> {{ successRate }}%</p>
		<StoneItem
			:attempt="attempt"
			:success-rate="successRate"
			@submit="handlerAttemptButtonClick"
		/>
		<StoneItem
			:attempt="attempt"
			:success-rate="successRate"
			@submit="handlerAttemptButtonClick"
		/>
	</VContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import StoneItem from '@/components/StoneItem.vue';

const stoneItems = ref(['유물', '전설']);
const stone = ref('유물');
const attemptMap = [10, 9];
const successRate = ref(75);
const handlerAttemptButtonClick = (result: boolean): void => {
	console.log('submit');
	if (result) {
		if (successRate.value > 25) successRate.value -= 10;
	} else {
		if (successRate.value < 75) successRate.value += 10;
	}
	console.log('successRate', successRate);
};
const attempt = computed(
	() => attemptMap[stoneItems.value.indexOf(stone.value)],
);
</script>

<style scoped></style>
