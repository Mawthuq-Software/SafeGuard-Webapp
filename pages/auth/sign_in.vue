<template>
  <div class="flex flex-1 h-full justify-center items-center">
    <div class="block w-1/2">
      <div>
        <h4>Brand.</h4>
      </div>
      <div class="flex flex-0 flex-col justify-center items-center pt-10 gap-4 w-full">
        <h3>Sign In</h3>
        <FormTextInput label="Username" name="username" />
        <FormTextInput label="Password" name="password" />
        <div class="flex flex-row justify-between w-full">
          <Checkbox label="Remember me"/>
          <TextLink>Forgot password</TextLink>
        </div>
        <Button label="Sign In" />
      </div>
      <div class="pt-8 text-center">
        <span>Don't have an account? &nbsp;&nbsp;<TextLink>Create an account</TextLink></span>
      </div>
    </div>
  </div>
</template>


<script>
definePageMeta({
  layout: "auth",
});
</script>
