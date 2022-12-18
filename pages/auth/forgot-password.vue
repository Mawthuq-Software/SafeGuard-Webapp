<template>
  <div class="flex flex-1 h-full justify-center items-center">
    <div class="block w-1/2">
      <div>
        <h4>Brand.</h4>
      </div>
      <div class="flex flex-0 flex-col justify-center items-center pt-10 gap-6 w-full">
        <div class="flex flex-0 flex-col justify-center items-center pt-10 gap-4 w-full">
          <h3>Reset Password</h3>
          <p class="text-label lg:px-5 px-0 text-center">Enter your email address and we’ll send you an email with instructions to reset your password</p>
          <FormTextInput label="Email" name="email" />
        </div>
        <Button label="Sign In" @click="handleSignIn"/>
      </div>
      <div class="text-center pt-6">
        <span><TextLink link="sign-in">Back to Sign In</TextLink></span>
      </div>
    </div>
  </div>
</template>


<script>
definePageMeta({
  layout: "auth",
});

function handleSignIn () {
  console.log('handleSignIn')
}
</script>
