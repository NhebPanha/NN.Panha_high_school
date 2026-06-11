// On client startup, hydrate the current user from the token (if any) so the
// navbar and portals know who is signed in.
export default defineNuxtPlugin(async () => {
  const { access, user, fetchMe } = useAuth()
  if (access.value && access.value !== 'demo-token' && !user.value) {
    await fetchMe()
  }
})
