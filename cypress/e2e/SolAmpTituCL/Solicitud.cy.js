describe('Llenado de Solicitud', () => {
    it('Cuando el usuario entra a la Solicitud', () => {
     cy.visit('http://148.244.173.87/_layouts/15/APCVWPLogin/Default.aspx');
        cy.get('#ctl00_PlaceHolderMain_signInControl_UserName').type('usuariocl')
        cy.get('#ctl00_PlaceHolderMain_signInControl_password').type('P@ssw0rd')
        cy.get('#ctl00_PlaceHolderMain_signInControl_login').click()
        cy.visit('http://148.244.173.87/sites/cl/SitePages/SolAmpTituCL.aspx')
        cy.get('#txtNCertificado').type('NYC-2202C0E00943')
        // cy.get('#txtNCertificado').type('NYC-2202C0E01007')
        // cy.get('#txtNCertificado').type('NYC-2202C0E01008')
        cy.get('#btnBuscar').click()
        // cy.get('#ddlOficina').click()
        cy.get('#ddlOficina').select('1', { force: true })
        // cy.get('#ddlOficina').select('1')
        cy.get(`#ddlOficina`).invoke('removeClass', 'is-invalid')
        // cy.get('#sltRazonAmp').click()
        // cy.get('#sltRazonAmp').select('4921')
        cy.get('#sltRazonAmp').select('4921', { force: true })
        cy.get(`#sltRazonAmp`).invoke('removeClass', 'is-invalid')
        cy.get(`#divEmprAmpliar`).invoke('removeAttr', 'style')
        //Modelos
        cy.get(`#divModelosModificados`).invoke('removeAttr', 'style')
        cy.get('#chkModificarModelos').check()
        cy.get('#txtModelosModificados-tokenfield').type('DQD1;')
        //especificaciones
        cy.get(`#divEspecifModificadas`).invoke('removeAttr', 'style')
        cy.get('#chkModificarEspecif').check()
        cy.get('#txtEspecifModificadas').type('120 V 220 V')
        //FRACCIONES
        cy.get(`#divModificarFracciones`).invoke('removeAttr', 'style')
        cy.get('#chkModificarFracciones').check()
        cy.get('#txtFraccionesModificadas-tokenfield').type('12345678;')
        //BOTON EXAMINAR
        // cy.get('#adjNuevoCertificado').click()
        // cy.get('#adjNuevoCertificado[]').selectFile('cypress/fixtures/imagenes/Documento.pdf')
        // cy.get('[data-cy="file-input"]').attachFile(['cypress/fixtures/imagenes/Documento.pdf']);
    });
   });