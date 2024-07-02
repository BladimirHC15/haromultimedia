import loginModel from "../models/loginModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';


export const login = async (req, res) => {
    const { email, password } = req.body;

    //sequilze necsita un where y la varianble del body que va buscar
    loginModel.findOne({where: {email}}).then((user) => {
        if(!user){
            return res.json({message: "Usuario no encontrado"});
        }

        bcrypt.compare(password, user.password).then((passTrue) => {
            if(passTrue){
                const { id, email } = user;
                const data = {
                    id,
                    email,
                };

                //esto debe de estar en .env cuando este en producción
                const token = jwt.sign(data, "secreto", {
                    expiresIn: 28800 /* 24hs 86400 */,
                  });

                res.json({message: `Bienvenido ${email}`, 
                user: {
                    id, 
                    email,
                    token,
                },
            });
            } else {
                return res.json({ message: "Contraseña incorrecta" });
            }
        });
    });
}