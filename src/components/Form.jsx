import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const watchSenha = watch("senha");

  const [isShowSenha, setIsShowSenha] = useState(false);
  const [isShowConfirmSenha, setIsShowConfirmSenha] = useState(false);

  const handleTypeSenha = () => {
    setIsShowSenha(!isShowSenha);
  };

  const handleTypeConfirmSenha = () => {
    setIsShowConfirmSenha(!isShowConfirmSenha);
  };

  const onSubmit = () => {
    alert("Conta criada com sucesso!");
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-[10px] bg-[#202020]">
      <div className="w-[350px] md:w-[550px] flex flex-col items-start rounded-md py-3 px-3">
        <div className="w-full flex flex-col gap-3">
          <div>
            <p className="text-6xl font-semibold text-[#fff]">Cadastro </p>
          </div>
          <div className="pt-4">
            <label>
              <p className=" text-xl font-semibold text-[#D6D6D6]">
                Nome completo:
              </p>
              <div className="pt-2">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className={`w-full h-[38px] pl-2 mt-1 text-[#ABABAB] border rounded-md outline-none bg-transparent ${
                    errors?.name ? " border-red-500" : "border-[#ABABAB]"
                  }`}
                  {...register("name", { required: true })}
                />
                {errors?.name?.type === "required" && (
                  <p className="text-red-500 text-sm">O campo é obrigatório</p>
                )}
              </div>
            </label>
          </div>

          <div>
            <label>
              <p className=" text-xl font-semibold text-[#D6D6D6]">Email: </p>
              <input
                type="email"
                placeholder="Digite seu email"
                className={`w-full h-[38px] pl-2 mt-1 text-[#ABABAB] border rounded-md outline-none bg-transparent ${
                  errors?.email ? " border-red-500" : "border-[#ABABAB]"
                }`}
                {...register("email", {
                  required: true,
                  validate: (value) => {
                    return validator.isEmail(value);
                  },
                })}
              />
              {errors?.email?.type === "required" && (
                <p className="text-red-500 text-sm"> campo é obrigatório</p>
              )}
              {errors?.email?.type === "validate" && (
                <p className="text-red-500 text-sm">Escreva um email válido!</p>
              )}
            </label>
          </div>

          <div>
            <label>
              <p className=" text-xl font-semibold text-[#D6D6D6]">
                Nome de usuário:
              </p>
              <input
                type="text"
                placeholder="Nome de usuário"
                className={`w-full h-[38px] pl-2 mt-1 text-[#ABABAB] rounded-md border outline-none bg-transparent ${
                  errors?.nomeUsuario ? "border-red-500" : "border-[#ABABAB]"
                }`}
                {...register("nomeUsuario", {
                  required: true,
                })}
              />
              {errors?.nomeUsuario?.type === "required" && (
                <p className="text-red-500 text-sm"> campo é obrigatório</p>
              )}
            </label>
          </div>

          <div>
            <label>
              <p
                className={`text-xl font-semibold ${
                  errors?.profession ? "text-red-500" : "text-[#D6D6D6]"
                }`}
              >
                Selecione sua profissao
              </p>
              <select
                className="bg-[#202020] outline-none text-[#ABABAB]"
                {...register("profession", {
                  validate: (value) => {
                    return value !== "0";
                  },
                })}
              >
                <option value="0">Selecione uma opção</option>
                <option value="programadorF">Programador Front-end</option>
                <option value="programadorB">Progamador Back-end</option>
                <option value="analista">Analista de dados</option>
                <option value="outra">Outra</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              <p className=" text-xl font-semibold text-[#D6D6D6]">Senha:</p>
              <div
                className={`flex border rounded-md mt-2 ${
                  errors?.senha ? "border-red-500" : "border-[#ABABAB]"
                }`}
              >
                <input
                  type={isShowSenha ? "text" : "password"}
                  placeholder="Digite sua senha"
                  className="w-full h-[38px] pl-2  text-[#ABABAB] outline-none bg-transparent"
                  {...register("senha", {
                    required: true,
                    minLength: 10,
                  })}
                />
                <button
                  className="flex justify-center items-center pr-3"
                  onClick={handleTypeSenha}
                >
                  {isShowSenha && (
                    <Eye size={20} className="text-[#ABABAB] cursor-pointer" />
                  )}
                  {!isShowSenha && (
                    <EyeOff
                      size={20}
                      className="text-[#ABABAB] cursor-pointer"
                    />
                  )}
                </button>
              </div>
              {errors?.senha?.type === "required" && (
                <p className="text-red-500 text-sm"> campo é obrigatório</p>
              )}
              {errors?.senha?.type === "minLength" && (
                <p className="text-red-500 text-sm">
                  A senha deve ter mais de 10 caracteres
                </p>
              )}
            </label>
          </div>

          <div>
            <label>
              <p className=" text-xl font-semibold text-[#D6D6D6]">
                Confirmação de Senha:
              </p>
              <div
                className={`flex rounded-md border mt-1 ${
                  errors?.confirmSenha ? "border-red-500" : "border-[#ABABAB]"
                }`}
              >
                <input
                  type={isShowConfirmSenha ? "text" : "password"}
                  placeholder="Confirme sua senha"
                  className="w-full h-[38px] pl-2 text-[#ABABAB] outline-none bg-transparent"
                  {...register("confirmSenha", {
                    required: true,
                    validate: (value) => value === watchSenha,
                  })}
                />
                <button
                  className="flex justify-center items-center pr-3"
                  onClick={handleTypeConfirmSenha}
                >
                  {isShowConfirmSenha && (
                    <Eye size={20} className="text-[#ABABAB] cursor-pointer" />
                  )}
                  {!isShowConfirmSenha && (
                    <EyeOff
                      size={20}
                      className="text-[#ABABAB] cursor-pointer"
                    />
                  )}
                </button>
              </div>
              {errors?.confirmSenha?.type === "required" && (
                <p className="text-red-500 text-sm"> campo é obrigatório</p>
              )}
              {errors?.confirmSenha?.type === "validate" && (
                <p className="text-red-500 text-sm">
                  As senhas precisam ser iguais
                </p>
              )}
            </label>
          </div>

          <div>
            <label className="flex gap-3">
              <input
                type="checkbox"
                className="w-[20px] h-[20px]"
                {...register("termos", { required: true })}
              />
              <p className="text-[#fff] font-semibold cursor-pointer">
                Concordo com os termos do formulário
              </p>
            </label>

            {errors?.termos?.type === "required" && (
              <p className="text-red-500 text-sm">
                Você precisa aceitar os termos
              </p>
            )}
          </div>

          <div className="w-full flex justify-center mt-6">
            <button
              className="w-full py-4  font-semibold bg-[#007BE5] rounded-md"
              onClick={() => handleSubmit(onSubmit)()}
            >
              <p className="text-[#fff] text-2xl">Criar conta</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
