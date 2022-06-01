import Auth from '../utils/auth';

try {
    const { data } = await addUser({
      variables: { ...formState }
    });
  
    Auth.login(data.addUser.token);
  } catch (e) {
    console.error(e);
  }
  