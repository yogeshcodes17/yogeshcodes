---
id: AES-Angular-Springboot-config
title: AES-Angular-Springboot-config
---
AES encryption and decryption in Angular 
```ts

public encrypt(req: any, any: any) {
    const key = CryptoJS.enc.Utf8.parse('SecretHiddenKey9');
    const bytes = CryptoJS.AES.encrypt(req, key, {iv: key});
    req = bytes.toString(CryptoJS.enc.Utf8.parse.arguments);
    return req;
  }
  
  public decrypt(req: any, any: any): any {
    const key = CryptoJS.enc.Utf8.parse('SecretHiddenKey9');
    const bytes = CryptoJS.AES.decrypt(req, key, {iv: key});
    req = bytes.toString(CryptoJS.enc.Utf8);
    return req;
  }

```

AES encryption and decryption in Springboot 

```java

private static final String key = "SecretHiddenKey9";

public String encrypt(String Data) throws Exception {
		  try {
	            IvParameterSpec iv = new IvParameterSpec(key.getBytes("UTF-8"));
	            SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes("UTF-8"), "AES");
	            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
	            cipher.init(Cipher.ENCRYPT_MODE, skeySpec, iv);
	            byte[] encrypted = cipher.doFinal(Data.getBytes());
	            return new String(Base64.getEncoder().encode(encrypted));
	        } catch (Exception e) {
	            e.printStackTrace();
	            return null;
	        }
	}
	


	public String decrypt(String EncryptValue) throws Exception {
		 try {
	            IvParameterSpec iv = new IvParameterSpec(key.getBytes("UTF-8"));
	            SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes("UTF-8"), "AES");
	            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
	            cipher.init(Cipher.DECRYPT_MODE, skeySpec, iv);
	            byte[] cipherText = cipher.doFinal(Base64.getDecoder().decode(EncryptValue));
	            return new String(cipherText);
	        } catch (Exception e) {
	            e.printStackTrace();
	            return null;
	        }
	    }


```