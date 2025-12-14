// tambien se puede llamar app.config.ts

export const EnvConfiguration = () => ({
    enviroment : process.env.NODE_ENV || "dev",
    mongodb : process.env.MONGO_DB,
    port : process.env.PORT || 3000, 
    default_limit : process.env.DEFAULT_LIMIT || 7,
})

// Las variables de entorno son dadas como string, que esto puede dar errores al intentar usarlas como number