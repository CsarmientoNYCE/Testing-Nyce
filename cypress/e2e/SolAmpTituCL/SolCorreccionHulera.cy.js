describe('Test 0004 - Correction Request', () => {
    it('Fill Correction Request', () => {
     cy.visit('http://148.244.173.87/_layouts/15/APCVWPLogin/Default.aspx');
        cy.get('#ctl00_PlaceHolderMain_signInControl_UserName').type(Cypress.env('user').external.username)
        cy.get('#ctl00_PlaceHolderMain_signInControl_password').type(Cypress.env('user').external.password)
        cy.get('#ctl00_PlaceHolderMain_signInControl_login').click().then(function(){
            cy.wait(1000);
        });
        cy.visit(Cypress.env('url').CorrectionRequest).then(function(){
        //Request Test 004
            cy.wait(8000);
        });
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_txtNCertificado').type(Cypress.env('NumCert').num)
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_BuscaCertificado').click();
        //it's shows the business name of the base certificate in read only
        //it's shows the intermediarie name of the base certificate in read only
        //it's shows The name of the Authorized Manager associated with the "Name and / or Business Name" of the base certificate in read only
        //it's shows The name of the base standard
        //the select automatic for the system of the base standard is NOM-086-1-SCFI-2020
        //select "Oficina NYCE que atenderá" field
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_ddlOficinaNYCE').select('3');
        //select "tipo de Certificación"
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_rblTipoDeCertificacion_1').first().check();

        //change "Nombre del producto"
        //it's shows the "Nombre de producto" in 'Nombre del producto dice'
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_txtNombreProducto').clear();
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_txtNombreProducto').type('Producto de Prueba Cypress');

        //change "Marca"
        //it's shows the "Marca" in 'Marca dice'
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_txtMarca').clear();
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_txtMarca').type('Marca de Prueba Cypress');

        //select "Diseño y/o dibujo"
        //it's shows the "Diseño y/o dibujo" in "Diseño y/o dibujo dice"
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_ddlDiseñoDibujo').select('Mixto', { force: true });

        //select "Tipo de construcción"
        //it's shows the "Tipo de construcción" in "Tipo de construcción dice"
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_ddlTipoConstruccion').select('Radial', { force: true });

        //change "Modelo(s)"
        //it's shows the "Modelo(s)" in "Modelo dice"
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_btnAgregarModelos').click();
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_AgregarDato1_lbDatosAg').select(['Modelo1']);
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_AgregarDato1_btnQuitar').click().then(function(){
                cy.wait(4000);
            });
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_AgregarDato1_txtDatoAgregar').type('ModeloCypress');
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_AgregarDato1_btnAgregar').click().then(function(){
                cy.wait(4000);
            });
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_AgregarDato1_btnAceptar').click().then(function(){
                cy.wait(4000);
            });

        //change "País(es) de origen"
        //it's shows the "País(es) de origen" in "País(es) de origen dice"
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_btnAgregarPaisesOrigen').click().then(function(){
            cy.wait(4000);
        });
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_SeleccionarDatos1_lbSeleccionados').select(['ANGUILA']);
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_SeleccionarDatos1_btnQuitar').click().then(function(){
            cy.wait(4000);
        });
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_SeleccionarDatos1_lbSeleccionar')
            .select(['BERMUDAS','BELICE']);
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_SeleccionarDatos1_btnAgregar').click().then(function(){
            cy.wait(4000);
        });
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_SeleccionarDatos1_btnAceptar').click().then(function(){
            cy.wait(4000);
        });


        //change "País(es) de procedencia"
        //it's shows the "País(es) de procedencia" in "País(es) de procedencia dice"
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_btnAgregarPaisesProcedencia').click().then(function(){
            cy.wait(4000);
        });
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_SeleccionarDatos1_lbSeleccionados').select(['ALBANIA (REPUBLICA DE)']);
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_SeleccionarDatos1_btnQuitar').click().then(function(){
            cy.wait(4000);
        });
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_SeleccionarDatos1_lbSeleccionar').select(['CANADA','GRANADA']);
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_SeleccionarDatos1_btnAgregar').click().then(function(){
            cy.wait(4000);
        });
        cy.get('#ctl00_ctl39_g_efd03997_8d48_4338_9aef_d3f50ef453fc_ctl00_SeleccionarDatos1_btnAceptar').click().then(function(){
            cy.wait(4000);
        });


        //change "Fracción arancelaria con claves de identificación"
        //it's shows the "Fracción arancelaria con claves de identificación" in "Fracción arancelaria con claves de identificación dice"
        cy.get('#BtnAgregarFreaccionesArancelarias').click();
        cy.get('#LstFraccionesClaves').select(['65879562; prueba']);
        cy.get('#BtnQuitarFraccionesArancelarias').click().then(function(){
            cy.wait(4000);
        });
        cy.get('#TxbFraccionarAncelaria').type('12345678');
        cy.get('#TxtClavesFraccionesArancelarias').type('Prueba Cypress');
        cy.get(':nth-child(2) > [style="text-align:right;"] > input').click().then(function(){
            cy.wait(4000);
        });
        cy.get('[onclick="AceptarFraccionesarancelarias()"]').click().then(function(){
            cy.wait(4000);
        });




        
    });
   });