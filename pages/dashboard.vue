<template>
  <div class="flex flex-col items-start gap-4">
    <div class="flex flex-row justify-center items-center w-full bg-white card cardgroup"
      style="height: 120px; max-width: 1024px;">
      <DashboardCardGroupItem>
        <aside>Used Bandwidth</aside>
        <h3>2TB</h3>
      </DashboardCardGroupItem>
      <DashboardCardGroupItem>
        <aside>Total Bandwidth</aside>
        <h3>30TB</h3>
      </DashboardCardGroupItem>
      <DashboardCardGroupItem>
        <aside>Used Keys</aside>
        <h3>200</h3>
      </DashboardCardGroupItem>
      <DashboardCardGroupItem>
        <aside>Total Keys</aside>
        <h3>3000</h3>
      </DashboardCardGroupItem>
      <DashboardCardGroupItem>
        <aside class="text-success">Connected Servers</aside>
        <h3>300</h3>
      </DashboardCardGroupItem>
      <DashboardCardGroupItem>
        <aside class="text-error">Failed Servers</aside>
        <h3>60</h3>
      </DashboardCardGroupItem>
      <DashboardCardGroupItem>
        <aside>Total Servers</aside>
        <h3>390</h3>
      </DashboardCardGroupItem>
    </div>
    <div class="flex flex-row justify-center items-center w-full gap-4">
      <DashboardTutorialCard
        title="How to set up your keys"
        description="This tutorial helps you set up your wireguard keys and link them to your server"
        iconBgColor='var(--color-primary-200)'
      >
        <template #icon>
          <nuxt-icon class="text-primary-500" name="key" filled/>
        </template>
      </DashboardTutorialCard>
      <DashboardTutorialCard
        title="How to set up your servers"
        description="This tutorial helps you set up your servers according to your configurations"
        iconBgColor='#E0E4FA'
      >
        <template #icon>
          <nuxt-icon class="text-secondary-600" name="server" filled/>
        </template>
      </DashboardTutorialCard>
    </div>

  </div>
  <div class="flex flex-col justify-center items-center p-10 gap-6 card bg-white max-w-xl" style="min-width: 24rem;">
    <aside class="uppercase">Last Updated On: </aside>
    <SpinnerProgress value="45" />
    <p class="text-aside text-center">
      This score is calculated based on the used bandwidth provided on the servers
    </p>
  </div>
</template>


<style>
aside {
  /* white-space: nowrap;
    overflow: hidden; */
  text-overflow: ellipsis;
}
</style>
