<script lang="ts" setup>
    const subscriberId = '132'
    const applicationIdentifier = import.meta.env.VITE_NOVU_APP_IDENTIFIER

    const sessionLoaded = () => {
        console.log("Notification Center session loaded successfully!")
    }
</script>

<template>
    <NotificationCenterComponent
    :subscriberId="subscriberId"
    :applicationIdentifier="applicationIdentifier"
    :sessionLoaded="sessionLoaded"
    v-slot="slot"
  >
  </NotificationCenterComponent>
</template>

