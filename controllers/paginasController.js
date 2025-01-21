import { Viajes } from "../models/Viajes.js";
import { Op } from "sequelize";

const paginaInicio = async (req, res)=>{

    const formatearDinero = (valor) => {
        const formatter = new Intl.NumberFormat('es-AR',{
            style:'currency',
            currency:'ARS'
        });
        return formatter.format(valor)
    }
    try {
        const viajes = await Viajes.findAll({limit:3})
        res.render('inicio',{ 
            pagina: 'inicio',
            viajes,
            formatearDinero
        }); 
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req, res)=>{
    res.render('nosotros',{ 
        pagina: 'nosotros'
    }); 
}

const paginaViajes = async (req, res) => {
    const { destino, valoracion_promedio, min_precio, max_precio } = req.query; 

    
    const filtros = {};

    if (destino) {
        filtros.destino = destino; 
    }

    if (valoracion_promedio) {
        filtros.valoracion_promedio = {
            [Op.between]: [valoracion_promedio, Number(valoracion_promedio)+1.9]
        }; 
    }

    if (min_precio || max_precio) {
        if (!min_precio) {
            filtros.precio = {
                [Op.lte]: max_precio
            };
        }
        else if(!max_precio) {
            filtros.precio = {
                [Op.gte]: min_precio
            };
        } 
        else{
            filtros.precio = {
                [Op.between]: [min_precio, max_precio]
            };
        }  
        console.log(filtros.precio);
    }

    const viajes = await Viajes.findAll({
        where: filtros 
    });

    const formatearDinero = (valor) => {
        const formatter = new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS'
        });
        return formatter.format(valor);
    }

    res.render('viajes', {
        pagina: 'viajes',
        viajes,
        formatearDinero
    });
};


const paginaContacto = (req, res)=>{
    res.render('contacto',{ 
        pagina: 'contacto'
    }); 
}

const paginaDetalle = async (req,res) =>{
    const {slug} = req.params;

    try {
        const viaje = await Viajes.findOne({where : {slug}})

        const formatearDinero = (valor) => {
            const formatter = new Intl.NumberFormat('es-AR',{
                style:'currency',
                currency:'ARS'
            });
            return formatter.format(valor)
        }

        res.render('detalle',{
            pagina: 'informacion Viaje',
            viaje,
            formatearDinero
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaContacto,
    paginaDetalle
}