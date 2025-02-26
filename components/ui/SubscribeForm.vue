<script setup lang="ts">
import { LoaderCircle } from 'lucide-vue-next';

const email = ref('');
const successMessage = ref('');
const errorMessage = ref('');
const subscriptionVisible = ref(true);
const status = ref('idle');

const subscribe = async () => {
  status.value = 'loading';
  try {
    const response: any = await $fetch('/api/subscriberApi', {
      method: 'POST',
      body: { email: email.value },
    });
    if (response.success) {
      subscriptionVisible.value = false;
      successMessage.value = `Die E-Mail <span class="text-primary">${response.data.email}</span> wurde erfolgreich registriert!`;
      errorMessage.value = '';
      status.value = 'success';
    } else {
      throw new Error(response.message);
    }
  } catch (error: any) {
    errorMessage.value = error.message;
    successMessage.value = '';
    status.value = 'error';
  }
};
</script>

<template>
  <div
    class="subscription-form z-20 mx-auto mb-20 mt-10 flex max-w-screen-sm flex-col p-4"
  >
    <UiMainTitle
      v-if="subscriptionVisible"
      title="Abonnieren Sie den Lettebadi Newsletter"
    />

    <UiMainTitle v-else title="Danke!" />

    <div
      v-if="subscriptionVisible"
      class="flex flex-col justify-between gap-5 2xl:flex-row"
    >
      <Input
        v-model="email"
        type="email"
        placeholder="Ihre E-Mail Adresse"
        class="h-14 grow basis-2 text-2xl transition-all duration-300 ease-out"
      />
      <div
        class="flex w-full min-w-52 shrink basis-1 flex-col items-center transition-all duration-300 ease-out"
      >
        <Button
          :class="{
            '!w-14 rounded-full p-0 text-2xl disabled:opacity-100':
              status === 'loading',
          }"
          :disabled="status === 'loading'"
          @click="subscribe"
          class="h-14 w-full text-2xl"
        >
          <span v-if="status !== 'loading'">Abonnieren</span>
          <LoaderCircle v-else class="!h-8 !w-8 animate-spin" />
        </Button>
      </div>
    </div>

    <p v-if="successMessage" v-html="successMessage" class="mt-2 text-2xl"></p>
    <p
      v-if="errorMessage"
      v-html="errorMessage"
      class="mt-2 text-2xl text-red-500"
    ></p>
  </div>
</template>
