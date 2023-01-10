<template>
  <div class="flex flex-1 h-full justify-center items-center">
    <div class="block w-1/2">
      <UnauthLogo/>
      <div class="flex flex-0 flex-col justify-center items-center pt-10 gap-4 w-full">
        <h3>Sign In</h3>
        <FormTextInput label="Username" name="username" />
        <FormTextInput label="Password" name="password" />
        <div class="flex flex-row justify-between w-full">
          <Checkbox labelString="Remember me"/>
          <TextLink link="forgot-password">Forgot password</TextLink>
        </div>
        <Button label="Sign In" @click="handleSignIn" />
      </div>
      <div class="pt-8 text-center">
        <span>Don't have an account? &nbsp;&nbsp;<TextLink link="register">Create an account</TextLink></span>
      </div>
    </div>
  </div>
</template>


<script setup>
definePageMeta({
  layout: "auth",
});

async function handleSignIn () {
  await navigateTo("/")
}
</script>
