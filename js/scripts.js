    $(document).ready(function () {
      console.log('🔧 scripts.js loaded');

      /********************** RSVP **********************/
      $('#rsvp-form').on('submit', function(e) {
        e.preventDefault();
        console.log('RSVP form submitted!');

        // show “saving” notice
        $('#alert-wrapper').html(
          alert_markup('info','<strong>Μισό λεπτό!</strong> Γίνεται αποθήκευση...')
        );

        // invite-code check
        if ($('#invite_code').val() !== '255183') {
          return $('#alert-wrapper').html(
            alert_markup('danger','<strong>Λάθος κωδικός!</strong>')
          );
        }

        // ensure default extras=0
        if (!$('#extras').val()) {
          $('#extras').val('0');
        }

        // ensure default allergies = none
        if (!$('#allergies').val()) {
          $('#allergies').val('none');
        }

        // ensure default diet = none
        if (!$('#diet').val()) {
          $('#diet').val('none');
        }
        // AJAX submit
        $.post(
        'https://script.google.com/macros/s/AKfycbzQwAbQiiCgIrX96YUf8UV8rpea39S_frLO9s7ZCcELzQrdlvOma_opX593EwuOCowJlw/exec',
          $(this).serialize()
        )
        .done(function(resp) {
          if (resp.result === 'error') {
            $('#alert-wrapper').html(
              alert_markup('danger', resp.message)
            );
          } else {
            $('#alert-wrapper')
              .html(alert_markup('success','Ευχαριστούμε! Σε περιμένουμε.'))
              .fadeIn();
        const title       = 'Giannis, Natalia, Nikos';
        const description = 'Περιμένουμε να σε δούμε! Καλέστε στο +30 694222222';
        const location    = 'Ktima Panagiotaki, Spilia 715 00, Greece';

        // 1) Build ICS content
        const dtStart = '20250914T100000';
        const dtEnd   = '20250914T180000';
        const icsLines = [
          'BEGIN:VCALENDAR',
          'VERSION:2.0',
          'BEGIN:VEVENT',
          `UID:${Date.now()}@yourdomain.com`,
          `DTSTAMP:${new Date().toISOString().replace(/[-:]/g,'').split('.')[0]}Z`,
          `DTSTART:${dtStart}`,
          `DTEND:${dtEnd}`,
          `SUMMARY:${title}`,
          `DESCRIPTION:${description}`,
          `LOCATION:${location}`,
          'END:VEVENT',
          'END:VCALENDAR'
        ];
        const blob      = new Blob([icsLines.join('\r\n')], { type: 'text/calendar' });
        const icsUrl    = URL.createObjectURL(blob);

        // 2) Build Google Calendar link
        const gcParams = new URLSearchParams({
          action:      'TEMPLATE',
          text:        title,
          dates:       `${dtStart}/${dtEnd}`,
          details:     description,
          location:    location,
          trp:         'false',
          sprop:       window.location.origin,
        });
        const gcUrl     = `https://calendar.google.com/calendar/render?${gcParams.toString()}`;

    // 3) Inject into your #add-to-cal container
    $('#add-to-cal')
      .html(`
        <div class="text-center my-3">
          <a href="${icsUrl}" download="invite.ics" class="btn btn-outline-secondary me-2">
            <i class="fa fa-download"></i> Κατέβασε .ICS
          </a>
          <a href="${gcUrl}" target="_blank" class="btn btn-outline-secondary">
            <i class="fa fa-calendar-plus"></i> Πρόσθεσε στο Google Calendar
          </a>
        </div>
      `)
      .slideDown();

          }
        })
        .fail(function() {
          $('#alert-wrapper').html(
            alert_markup('danger','<strong>Σφάλμα!</strong> Προσπαθήστε ξανά.')
          );
        });
      });



      /********************** Map Info Toggle **********************/
      $('#map-content').hide();
      $('#btn-show-content').on('click', function() {
        $('#map-content').slideToggle('fast');
      });

      /********************** Alert Markup Helper **********************/
      function alert_markup(type, msg) {
        return (
          '<div class="alert alert-' + type + ' alert-dismissible fade show" role="alert">' +
            msg +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
          '</div>'
        );
      }
     // Highlight the clicked nav-link
      $('.navbar-nav .nav-link').on('click', function() {
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
      });
    });
