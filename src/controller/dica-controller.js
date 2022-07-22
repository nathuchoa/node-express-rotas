import Dicas from "../model/Dicas.js"

const dicaController = (app) => {

    const dicas = new Dicas()

    
    app.get ('/dicas', (req, res) => {
        res.json(
            {"dica" : dicas.recebeDica(),
            "erro" : false}
        )
    })


    app.post('/dicas', (req, res) => {
        const body = req.body
        try {
            dicas.recebeDica(body.txtDicas)

            res.json(
                {"msg" : "Obrigada1 Dica adicionada",
                "dica" : dicas,
                "erro" : false}
            )
            
        } catch (error) {
            res.json(
                {"msg" : error.message,
                "erro" : true}
            )
        }
    })
}

export default dicaController