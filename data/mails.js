const { config } = require("./config.js");

const translation = {
  mailText: {
    ES: {
      intro: "Estimado Cliente",
      greetz: "Atentamente,",
      paymentRecieved: "Su Pago Esta Confirmado!",
      bookingRecieved:
        "hemos recibido tu reserva y el carro está reservado para 48h.",
      asSoonAs: "Tan pronto como recibamos el pago le enviaremos el VOUCHER.",
      voucherInstructions:
        "A continuación encuentra el botón de pago para finalizar la reserva antes del ",
      whatasppNumberRent2Cuba:
        "Mientras tanto agrega nuestro numero de whataspp " + config.whatsapp,
      confirmationFollows:
        "Por favor, imprima este correo, que contiene todos los detalles de su reserva. Usted va a tener que presentar este documento a los empleados de la agencia donde Usted va a retirar su auto.",
      signature: "El Equipo de EasyKuba",
      signatureRent2Cuba: "El Equipo de Rent2Cuba",
      paidSubjectCar: "Pago Confirmado",
      paidSubject: "Compra Confirmada",
      bookingSubjectCar: "Reserva Carro en Cuba",
      cancellationSubject: "Reserva Cancelada",
      willShip: "Sus compras ya estan en camino!",
      datiDelTitolare: "Datos del Conductor",
      ciao: "Hola",
      nome: "Nombre",
      cognome: "Apellido",
      telefono: "Telefono",
      email: "Correo electronico",
      birthdate: "Fecha de cumpleaños",
      nazionalita: "Nacionalidad",
      datiPrenotazione: "Datos de reserva",
      ritiro: "Recogida",
      luogo: "Place",
      consegna: "Devolución",
      veicolo: "Vehiculo",
      nomeAuto: "Nombre del Carro",
      categoria: "Categoria",
      compagnia: "Empresa",
      assicurazioneInclusa: "Seguros incluidos",
      totalePagato: "Total pagado",
      totaleDaPagare: "Costo Total",
      ufficio: "Oficina",
      data: "Fecha",
      ora: "Horas",
      modelloAuto: "Modelo de Carro",
      passaporto: "Pasaporte",
      warning: "CUIDADO:",
      warningOne:
        "para poder retirar el carro Usted debe presentar este voucher dereserva y tambien su permiso de conducción y el pasaporte (no se aceptan fotocopias. Solo documentos originales)",
      payInCuba: "A Pagar en Cuba",
      payInCubaIntro:
        "A continuación encuentra el listado de todo lo que va a pagar en Cuba por tarjeta:",
      payInCubaFuel: function (currency) {
        return "60 " + currency + " para el primer tanque de compustible";
      },
      payInCubaPremiumDropOff: function (currency) {
        return (
          "Tarifa plana de 35 " +
          currency +
          " si Usted desea rentregar el auto en una oficina que no es la misma donde lo recibió"
        );
      },
      payInCubaSecondDriver: function (currency) {
        return (
          "Tarifa de 30 " +
          currency +
          " si Usted desea agregar un segundo conductór"
        );
      },
      noMoreTime: "Su reserva se vencio. No hay mas tiempo para reservar su ",
      reactivate:
        "La buena noticia es que Usted puede renovar su reserva haciendo click en el botón a continuación:",
      paidAlready: "El Precio Incluye:",
      rentalOnlyPrice: "- Renta del Carro:",
      paidInsurance: "- Seguro del Vehiculo con cobertura total.",
      paidFuel: function (currency) {
        return (
          "- Primer Tanque de Combustible: 60 " +
          currency +
          " (Se puede devolver el carro con el tanque vacio)"
        );
      },
      paidAirport: function (currency) {
        return "- Recogida del carro en un aeropuerto Cubano: 25 " + currency;
      },
      paidSecondDriver: function (currency) {
        return "- Segundo Conductor: 35 " + currency;
      },
      paidVipAssistant: function (currency) {
        return "- Asistente VIP: 80 " + currency;
      },
      paidDropOff: function (currency) {
        return "- Devolucion del carro en otra ciudad: 35 " + currency;
      },
      ccPremium: "- Pago por Tarjeta (Comisión +10%)",
      bonoDiscount: "- Coupon de Descuento ",
      extraDayPenalty: "- Dia Extra",
      sorry:
        "Lamentamos informarle que nuestra agencia partner en Cuba ha cancelado su reservación producto a",
      fuerzamayor: "causas de fuerza mayor.",
      combustible: "la falta de combustible que en este momento afecta la Isla",
      huracan:
        "la dificil situacion meteorologica que afecta la Isla en este momento.",
      overbooking: "un inesperado overbooking.",
      refundAction:
        "Por favor, haga click en el link a continuación para visitar el portal del cliente y proporcionarnos los datos de la cuenta bancaria donde desea que se le haga el reembolso.",
      bankDataSent:
        "Acabamos de recibir los datos de su cuenta bancaria. Vamos a enviarle el reembolso a la cuenta a continuación:",
      checkPortalRefund:
        "El proceso de reembolso puede demorar hasta 30 dias. Usted puede monitorizar el estado de su reembolso por medio del Portal del Cliente, haciendo click en el link a continuación:",
      refundExecuted:
        "Tenemos el placer de comunicarle que acabamos de ejecutar el reembolso a su cuenta bancaria. El dinero deberia ser visible en su saldo dentro de 2 dias laborales.",
      bankDataTitle: "DATOS BANCARIOS",
      bankBeneficiary: "Beneficiario de la Cuenta",
      important: "IMPORTANTE",
      cubaWarning: "En el concepto no mencione la palabra 'Cuba'. Solo ponga ",
      bank: "Banco",
      address: "Dirección",
      bankAmount: "Monto",
      bankObject: "Concepto de la Transacción",
      bankBooking: "Reserva",
      payNow: "Pagar Ahora con",
      whatsapp:
        "Por cualquier duda, puede contactarnos por correo o por Whatsapp: " +
        config.whatsapp,
      aboutToExire:
        "El plazo para finalizar su reserva al precio mas competitivo del mercado esta a punto de vencerse.",
      stillOnTime: "Estas todavia a tiempo para finalizar la reserva del carro",
      noDepo: "ATENCION: el deposito de garantia ya no se paga",
      paymentSuccessfull:
        "Su pago ha sido recibito con exito. Por lo tanto, su reserva esta confirmada.",
      voucherAvailable: "Ya el Voucher de su Reserva esta disponible.",
      checkBooking:
        "Haga click en el botón a continuación para ver los detalles de la reserva en nuestra Area Clientes.",
      downloadVoucher:
        "No se le olvide de descargar y imprimir el Voucher: va a tener que presentarlo a la oficina de la renta cuando vaya a recoger el carro.",
      downloadInvoice:
        "Ya va a podor descargar la factura de su reserva. El Voucher va a estar disponible en breve.",
      howMonitor:
        "A lo largo de todo el proceso, usted va a poder monitorear su reserva haciendo click en el link a continuación",
      send: "Enviar",
      howMonitor:
        "A lo largo de todo el proceso, usted va a poder monitorear su reserva haciendo click en el link a continuación",
      toAccount: "a la cuenta",
      payWith: "Para pagar con",
      clickHere: "Haga click AQUI",
      clickBelow: "haga click en el link a continuación:",
      bankTransfer: "Transferencia Bancaria",
      creditCard: "Tarjeta de Credito o Debito",
      paymentOptions: "Modalidades de Pago",
      selectedMethod: "Metodo de Pago Seleccionado",
      alternativeMethods: "Metodos de Pago Alternativos",
      whyAlternatives:
        "Si Usted no logra pagar por medio del metodo de pago seleccionado, puede optar para una la alternativa que encuentra a continuación:",
      cardRejected:
        "Su pago ha sido rechazado por la entidad bancaria. Por lo tanto, su reserva todavia no esta confirmada.",
      saveFive:
        "La buena noticia es que pagando por transferencia bancaria, Usted va a ahorrar el 10%.",
      methods: {
        btcPay: "Bitcoin",
        zellePay: "Zelle",
        bankPay: "Transferencia Bancaria",
        creditCardPay: "Tarjeta de Credito",
      },
      refundRejected:
        "Lamentamos informarle que el banco intermediario ha revertido su transferencia de reembolso. Por favor, revise los detalles bancarios. Luego, haga click en el link a continuación para visitar el portal del cliente y proporcionarnos los datos de una nueva cuenta bancaria donde podemos reenviar el reembolso.",
    },

    ENG: {
      intro: "Dear Customer",
      greetz: "Best Regards,",
      paymentRecieved: "Your Payment Was Successful!",
      bookingRecieved:
        "we have received your reservation and our team is working on it.",
      asSoonAs:
        "As soon as we getyour payment, we shall send you your reservation VOUCHER",
      voucherInstructions:
        "Please find below the payment button to finalize your booking before ",
      whatasppNumberRent2Cuba:
        "Meanwhile add our whataspp number " + config.whatsapp,
      confirmationFollows:
        "Please print this email, which contains all the details of your booking. You will need to show it to the agency staff when you pick up your car.",
      signature: "EasyKuba Team",
      signatureRent2Cuba: "Rent2Cuba Team",
      paidSubjectCar: "Payment Confirmed",
      paidSubject: "Purchase Confirmed",
      cancellationSubject: "Booking Cancelled",
      bookingSubjectCar: "Car Rental Booking",
      willShip: "Your Purchase is coming!",
      datiDelTitolare: "Driver's Data",
      ciao: "Hello",
      nome: "Name",
      cognome: "Last name",
      telefono: "Phone",
      email: "E-mail",
      birthdate: "Date of birth",
      nazionalita: "Nationality",
      datiPrenotazione: "Booking data",
      ritiro: "Pick up",
      luogo: "Place",
      consegna: "Drop off",
      veicolo: "Vehicle",
      nomeAuto: "Car name",
      categoria: "Category",
      compagnia: "Company",
      assicurazioneInclusa: "Insurance included",
      totalePagato: "Total paid",
      totaleDaPagare: "Total Cost",
      ufficio: "Office",
      data: "Date",
      ora: "Hours",
      modelloAuto: "Car model",
      passaporto: "Passport",
      warning: "WARNING:",
      warningOne:
        "in order to be able to pick up your car, you will need to show this voucher and also your passwport and driving license (no copies. Only original documents)",
      payInCuba: "To Be Paid in Cuba",
      payInCubaIntro: "All the following must be paid in Cuba by credit card",
      payInCubaFuel: function (currency) {
        return "60 " + currency + " for the first tank of fuel";
      },
      payInCubaPremiumDropOff: function (currency) {
        return (
          "A flat 35 " +
          currency +
          " if you drop-off the car in a rental agency which is not the one where you picked up the vehicle"
        );
      },
      payInCubaSecondDriver: function (currency) {
        return "A 30 " + currency + " fee if you add a second driver";
      },
      noMoreTime:
        "Your reservation has expired. There is no more time to book your ",
      reactivate:
        "Good news is that you can renew your booking by clicking on the button below:",
      paidAlready: "The Price Includes:",
      rentalOnlyPrice: "- Car Rental:",
      paidInsurance: "- Full Coverage Car Insurance.",
      paidFuel: function (currency) {
        return (
          "- First tank of fuel: 60 " +
          currency +
          " (no need to refill the tank as you return the car)"
        );
      },
      paidAirport: function (currency) {
        return "- Car pick-up in a Cuban airport: 25 " + currency;
      },
      paidSecondDriver: function (currency) {
        return "- Second Driver: 35 " + currency;
      },
      paidVipAssistant: function (currency) {
        return "- VIP Assistant: 80 " + currency;
      },
      paidDropOff: function (currency) {
        return "- Dropoff in a Different City: 35 " + currency;
      },
      ccPremium: "- 10% Commission for Credit Card Payment",
      bonoDiscount: "- Discount Coupon",
      extraDayPenalty: "- Extra Day",
      sorry:
        "We regret to inform you that, our partner agency in Cuba had to concel your booking due to",
      fuerzamayor: "unexpected events that go beyond our control.",
      combustible: "the scarcity of fuel affecting the Island right now.",
      huracan:
        "the critical meteorological conditions that affect the Island as we speak.",
      overbooking: "unexpected overbooking.",
      refundAction:
        "Please click on the link below to visit the Customer Portal and provide us with the banking details of the account where you want to receive your refund.",
      bankDataSent:
        "We have received your banking details. We will send your refund to the bank account shown below:",
      checkPortalRefund:
        "The process will take up to 30 working days. You can check the status of your refund on the Customer's portal, by clicking on the link below:",
      refundExecuted:
        "We are delighted to inform you that we've just made the refund to your bank account. It may take up to 2 working days for the money to become visible in your account balance.",
      important: "IMPORTANT",
      cubaWarning:
        "in the reason for transfer field, do NOT mention 'Cuba'. Just insert ",
      bankDataTitle: "BANK DETAILS",
      bankBeneficiary: "Account Beneficiary",
      bank: "Bank",
      address: "Address",
      bankAmount: "Amount",
      bankObject: "Reason for the Transaction",
      bankBooking: "Booking",
      whatsapp:
        "For any questions, just reply to this email of contact us on Whatsapp: " +
        config.whatsapp,
      aboutToExire:
        "However, the time to finalize your reservation at the most competitve rates on the market is about to run out.",
      stillOnTime: "You are still on time to secure your booking for the car ",
      noDepo:
        "IMPORTANT: you no longer need to pay any security deposit as you pick up your car.",
      voucherAvailable: "Your Booking Voucher is now available.",
      paymentSuccessfull:
        "Your payment was successfull. Therefore, your booking is now confirmed.",
      checkBooking:
        "Please click on the button below to access our Customer Portal, where you can find all the details of your reservation.",
      downloadVoucher:
        "Don't forget to download and print your Booking Voucher: you will have to show it at the rental agency as you pick-up your car.",
      downloadInvoice:
        "You will be able to download the Invoice of your booking as well.  The Booking Voucher will be available shortly.",
      howMonitor:
        "During the whole process, you will be able to monitor your booking at the link below:",
      send: "Send",
      toAccount: "to the account",
      payNow: "Pay Now with",
      payWith: "to Pay with",
      clickHere: "Click HERE",
      clickBelow: "click on the link below:",
      bankTransfer: "Bank Transfer",
      creditCard: "Credit or Debit Card",
      paymentOptions: "Modalidades de Pago",
      selectedMethod: "Selected Payment Methods",
      alternativeMethods: "Alternative Payment Methods",
      whyAlternatives:
        "Should you not be able to complete the payment with your preferred method, you may want to evaluate the following alternative:",
      cardRejected:
        "Your payment didn't go through. Therefore, your booking is not confirmed yet.",
      saveFive:
        "The good news is that by paying through bank transfer you will save 10%.",
      methods: {
        btcPay: "Bitcoin",
        zellePay: "Zelle",
        bankPay: "Bank Transfer",
        creditCardPay: "Credit Card",
      },
      refundRejected:
        "We regret to inform you that the intermediary bank rejectd the refund transfer we emitted in your favour. Please, make sure that the the bank details you provided are correct. Then, click on the link below to visit the customer portal so that you can provide us with a correct bank account to which we can send you back your money.",
    },
  },
};

module.exports = { translation };
