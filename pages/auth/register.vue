<template>
  <div class="flex flex-1 h-full justify-center items-center">
    <div class="block w-1/2">
      <div>
        <UnauthLogo/>
      </div>
      <div class="flex flex-0 flex-col justify-center items-center gap-6 w-full">
        <div class="flex flex-0 flex-col justify-center items-center pt-10 gap-4 w-full">
          <h3>Sign Up</h3>
          <FormTextInput label="Username" name="username" />
          <FormTextInput label="Password" name="password" />
          <FormTextInput label="Confirm password" name="confirm_password" />

        </div>
        <div class="flex flex-row justify-center w-full">
          <Checkbox labelString="I agree with the terms of use"/>
        </div>
        <Button label="Sign Up" @click="handleSignUp" />
      </div>
      <div class="pt-8 text-center">
        <span>Already have an account? &nbsp;&nbsp;<TextLink link="sign-in">Sign in</TextLink></span>
      </div>
    </div>
  </div>
</template>


<script setup>
definePageMeta({
  layout: "auth",
});

async function handleSignUp() {
  console.log('handleSignUp pressed')
  await navigateTo("registered")
}
</script>
