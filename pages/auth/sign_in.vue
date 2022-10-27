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
        <span>
          <input type="checkbox" />
          <label>Remember me</label>
          <label>Forgot password</label>
        </span>
        <Button label="Sign In" />
        <p>Don't have an account? Create an account</p>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>


<script>
definePageMeta({
  layout: "auth",
});
</script>
