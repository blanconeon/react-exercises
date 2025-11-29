import React, { useState } from "react";

export default function EditProfile() {
  const [profile, setProfile] = useState({});

  const handleChange = ({ target }) => {
    const {name, value} = target;
    setProfile((prev) => ({ ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, '', 2));
  };
////notice this is how the form is submitted not with submitForm in the submit button but in the form tag!
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={profile.firstName || ''}
        name="firstName"
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        value={profile.lastName || ''}
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <input
        value={profile.bday || ''}
        type="date"
        name="bday"
        onChange={handleChange}
      />
      <input
        value={profile.password || ''}
        type="password"
        name="password"
        placeholder="Password"
         onChange={handleChange}
      />
      <button type="submit" >Submit</button>
    </form>
    
  );
}

/* Great observation! The spread operator (`...`) works differently for arrays and objects:

- In `setFormState((prev) => ({ ...prev, [name]: value }))`, `...prev` copies all key-value pairs from the previous object into a new object. Then, `[name]: value` updates or adds a property.

- For arrays, like `[item, ...cart]`, `...cart` copies all items from the previous array, and `item` is added at the start.

So, for objects, the spread copies properties; for arrays, it copies elements. The position of the spread operator depends on where you want to add or update values.The spread operator copies existing values. For objects, `...prev` copies all key-value pairs into a new object, then `[name]: value` updates or adds a property. For arrays, `[item, ...cart]` puts the new item at the start, then copies the rest. The difference is because arrays and objects are structured differently, so the spread operator is used in the way that fits the data type.*/
