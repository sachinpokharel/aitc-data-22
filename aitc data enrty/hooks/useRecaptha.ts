import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useCallback, useState } from 'react';

const useReCaptchaLogin = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formName, setFormName] = useState('');

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available or form name is missing');
      return null;
    }

    return await executeRecaptcha(formName);
  }, [executeRecaptcha, formName]);

  const verifyAndLogin = async (name: string) => {
    try {
      setFormName(name);
      const token = await handleReCaptchaVerify();

      return token;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return { verifyAndLogin };
};

export default useReCaptchaLogin;
