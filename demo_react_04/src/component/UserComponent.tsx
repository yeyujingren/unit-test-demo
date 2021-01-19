import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Props {
  id: string;
  [p: string]: string;
}

export interface User {
  name: string;
  age: number;
  heigh: number;
}

export interface UserRes {
  code: number;
  msg?: string;
  data?: User
}

const UserComponent: React.FC<Props> = (props) => {
  const [user, setUser] = useState<UserRes>();

  async function getUser(id: string) {
    try {
      const {data} = await axios.get<UserRes>(`/${id}`);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser(props.id);
  }, [props.id]);

  if (!user) {
    return <span>loading……</span>
  }

  if (String(user.code) !== '1') {
    return <span>{user.msg}</span>
  }

  return (
    <div>
      <header>
        Hi, my name is {user.data?.name}
      </header>
      <span>
        Im {user.data?.age} years old;
      </span>
      <span>
        and Im {user.data?.heigh} cm;
      </span>
    </div>
  );
}

export default UserComponent;
