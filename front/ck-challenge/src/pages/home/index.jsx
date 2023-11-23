import { Container, Content } from "./styles";
import ImgCk from "../../assets/logo-ck.svg";
import { Input } from "../../components/Input";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiUser, FiLock } from 'react-icons/fi';
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from 'react';

export const Home = () => {

const [user, setUser] = useState({})

const schema = yup.object().shape({
    name: yup.string().required('Campo obrigatório!'),
    email: yup.string().email('Por favor, insira um email válido!').required('Campo obrigatório!'),
    password: yup.string().required('Por favor, insira sua senha!')
 })

const { 
    register, 
    handleSubmit, 
    formState: { errors },
   } = useForm({
         resolver: yupResolver(schema),
   })

   useEffect(() => {
    if(user.name != undefined || user.email != undefined || user.password != undefined){
        alert(`
        Nome: ${user.name}, 
        Email: ${user.email}, 
        Senha: ${user.password}`);
    }
  }, [user]);

const onSubmitFunction = (data) => {
    setUser(data);
  };

 
return(
    <Container>
        <Content>
        <div className="header">
            <img src={ImgCk} alt="logo-ck" />
            <h1>Seja bem vindo à Contraktor!</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
            <span>Por favor, informe seus dados:</span>
                <Input register={register} name='name' value={user.name}  error={errors.name?.message} icon={FiUser} label='Nome' placeholder= 'Seu nome de usuário aqui'/>
                <Input register={register} name='email' value={user.email}  error={errors.email?.message} icon={MdEmail} label='Email' placeholder= 'Seu melhor email aqui'/>
                <Input register={register} name='password' value={user.password} error={errors.password?.message} icon={FiLock} label='Senha' placeholder= 'Uma senha bem segura' type='password'/>
                <button type="submit">Enviar</button>
        </form>
        </Content>
    </Container>
)
}