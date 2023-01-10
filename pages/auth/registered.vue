<template>
  <div class="flex flex-1 h-full justify-center items-center">
    <div class="block w-1/2">

      <div>
        <UnauthLogo/>
      </div>
      <div class="flex flex-0 flex-col justify-center items-center pt-10 gap-4 w-full">
        <div>
          <img src="/success-check.svg"/>
        </div>
        <h3 class="text-primary-800">Success !</h3>
        
        <p>
          An email has been sent to {email}. Please check for an email from {company} and click on the included link
          to reset your password.
        </p>
        <Button label="Ok" @click="handleBack" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

async function handleBack() {
  await navigateTo("sign-in")
}

</script>
