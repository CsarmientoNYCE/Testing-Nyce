context("Tests of extention request", ()=>{
    describe('fill the application',()=>{
        it('create new request',()=>{
            cy.visit('http://148.244.173.87/_layouts/15/APCVWPLogin/Default.aspx');
            cy.get('#ctl00_PlaceHolderMain_signInControl_UserName').type(Cypress.env('user').external.username);
            cy.get('#ctl00_PlaceHolderMain_signInControl_password').type(Cypress.env('user').external.password);
            cy.get('#ctl00_PlaceHolderMain_signInControl_login').click().then(function(){
                cy.wait(3000);
            });
            cy.visit(Cypress.env('url').extRequest);
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_cblTipoSolicitud_0').check();
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtNCertificado').type(Cypress.env('certificate').num);
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_BuscaCertificado').click();
            cy.wait(3000);
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_MensajeGeneral2_lblTitulo').should('be.visible');
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_MensajeGeneral2_btnSi').click();
            
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtClaveNombreYORazonSocial').invoke('val').should('not.be.empty');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtNombreYORazonSocial').invoke('val').should('not.be.empty');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_btnBuscarRazonSocial').should('be.disabled');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtClaveTramitador').invoke('val').should('not.be.empty');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtTramitador').invoke('val').should('not.be.empty');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_ddlGestorAutorizado').should('have.value','9803');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_ddlNorma').should('have.value','367');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtNombreProducto').invoke('val').should('not.be.empty');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_ddlOficinaNYCE').should('have.value','1');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_lblClasificaciondice').should('have.text', 'Exportación');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_rblClasificacionRegimen_0').should('be.checked');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_rblClasificacionRegimen_1').should('not.be.checked');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_rblClasificacionRegimen_2').should('not.be.checked');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_rblClasificacionRegimen_3').should('not.be.checked');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_rblClasificacionRegimen_4').should('not.be.checked');
            //check aduanas 
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_lblAduanadice').should('have.text','ENSENADA;');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtAduanas').invoke('val').should('contain','ENSENADA;');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_btnAgregarAduanas').click()
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_SeleccionarDatos1_lblDato').should('be.visible');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_SeleccionarDatos1_lbSeleccionar')
             .select(['ACAPULCO, GRO.','AGUA PRIETA','SUBTENIENTE LOPEZ, Q. ROO.'])
             .invoke('val').should('deep.equal',['1','2','3']);
            cy.wait(2000);
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_SeleccionarDatos1_btnAgregar').click();
            cy.wait(3000);
           
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_SeleccionarDatos1_btnAceptar').click();
            cy.wait(3000);
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtAduanas').invoke('val').should('contain','ENSENADA; ACAPULCO, GRO.; AGUA PRIETA; SUBTENIENTE LOPEZ, Q. ROO.;');
            //enable checkbox 
            cy.get('#cblSubtipoSolicitud_0').check();
            cy.wait(2000);
            cy.get('#cblSubtipoSolicitud_1').check();
            cy.wait(2000);
            cy.get('#cblSubtipoSolicitud_2').check();
            cy.wait(2000);
            cy.get('#cblSubtipoSolicitud_3').check();
            cy.wait(2000);
            //check marca
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_lblMarcaDice').should('be.visible').and('have.text', 'Marca Producto');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtMarca').invoke('val').should('contain','Marca Producto');
            //check modelos 
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_lblModelo').should('be.visible').and('have.text','mod;');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtModelos').should('be.visible');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtModelos').invoke('val').should('contain','mod;');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_btnAgregarModelos').click();
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_AgregarDato1_lblDato').should('be.visible');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_AgregarDato1_txtDatoAgregar').type('Modelo2');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_AgregarDato1_btnAgregar').click();
            cy.wait(2000);
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_AgregarDato1_btnAceptar').click();
            //check pais(es) origen 
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_lblPaisorigendice').should('be.visible').and('have.text','AFGANISTAN (EMIRATO ISLAMICO DE);');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtPaisesOrigen').invoke('val').should('contain','AFGANISTAN (EMIRATO ISLAMICO DE);')
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_Button1').click();
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_SeleccionarDatos1_lbSeleccionar')
            .select(['ALBANIA (REPUBLICA DE)'])
            .invoke('val').should('deep.equal',['56']);
            cy.wait(3000);
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_SeleccionarDatos1_btnAgregar').click();
            cy.wait(3000);
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_SeleccionarDatos1_btnAceptar').click();
            cy.wait(3000);
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtPaisesOrigen').invoke('val').should('contain','AFGANISTAN (EMIRATO ISLAMICO DE); ALBANIA (REPUBLICA DE);');

            // check pais(es) procedencia

            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_lblPaisprocedenciadice').should('be.visible').and('have.text','ANGUILA;');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtPaisesProcedencia').invoke('val').should('contain','ANGUILA;')
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_btnAgregarPaisesProcedencia').click();

            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_SeleccionarDatos1_lbSeleccionar')
            .select(['ANTIGUA Y BARBUDA (COMUNIDAD BRITANICA DE NACIONES)','ARMENIA (REPUBLICA DE)'])
            .invoke('val').should('deep.equal',['60','229']);
            cy.wait(3000);
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_SeleccionarDatos1_btnAgregar').click();
            cy.wait(3000); 
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_SeleccionarDatos1_btnAceptar').click();
            cy.wait(3000); 
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtPaisesProcedencia').invoke('val').should('contain','ANGUILA; ANTIGUA Y BARBUDA (COMUNIDAD BRITANICA DE NACIONES); ARMENIA (REPUBLICA DE);');

            //check Fraccion(es) arancelarias
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_lblfraccionarancelariadice').should('be.visible').and('have.text','12345678');
            cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_lblClavesidentificacion').should('be.visible').and('have.text','test');
            cy.get('#LstFraccionesArancelariasClavesDice').should('be.disabled');
            cy.get('#LstFraccionesArancelariasClavesDice').contains('12345678; test').should('be.visible');
            cy.get('#LstFraccionesArancelariasClaves').contains('12345678; test').should('be.visible');
            cy.get('#BtnAgregarFreaccionesArancelarias').click();
            cy.get('#LstFraccionesClaves').should('be.visible');
            cy.get('#TxbFraccionarAncelaria').type('87654321');
            cy.wait(2000);
            cy.get('#TxtClavesFraccionesArancelarias').type('prueba');
            cy.get(':nth-child(2) > [style="text-align:right;"] > input').click();
            cy.wait(3000);
            cy.get('[onclick="AceptarFraccionesarancelarias()"]').click();
            cy.wait(3000);
            //cy.get('#LstFraccionesArancelariasClaves').contains(['12345678; test','87654321; prueba']);
            
            //en conjunto
            cy.get('#LstFraccionesArancelariasClaves')
            .select(['12345678; test','87654321; prueba'])
            .invoke('val')
            .should('deep.equal',['12345678; test','87654321; prueba']);
            
            //cada uno 
            // cy.get('#LstFraccionesArancelariasClaves')
            // .select('12345678; test')
            // .should('have.value','12345678; test');
            // cy.get('#LstFraccionesArancelariasClaves')
            // .select('87654321; prueba')
            // .should('have.value','87654321; prueba');
           
        })
    })
})

