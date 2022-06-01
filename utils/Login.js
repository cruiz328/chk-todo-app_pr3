import Auth from '../utils/auth';

try {
    const { data } = await login({
      variables: { ...formState }
    });
  
    Auth.login(data.login.token);
  } catch (e) {
    console.error(e);
  }