// Js/articlesData.js

// Lista centralizada de todos los artículos y sus datos
const articles = [
  {
    id: 'general_participant_handling',
    title: 'General Participant Request Handling',
    desc: `**This article includes**:

**•** Guidelines on tools and available resources for handling participant's inquiries _*through the phone or tickets*_.
**•** Instructions on how to handle phone calls and tickets, wording, ticket formatting and tool usage for investigation while handling participant's requests.
**•** Procedures regarding how to use our tools for better case resolution and time usage.
**•** Pro Tips that may help to perform as a *FUA* expert ;)`,
    dropdownGroups: [
      {
        topic: 'Flowcharts',
        items: [
          {
            title: '[1] Onboarding Flowchart',
            detail: `
              <div style="width:100%; height:450px; margin:10px 0;">
                <iframe allowfullscreen frameborder="0"
                        style="width:100%; height:100%;"
                        src="https://lucid.app/documents/embedded/d42c6223-d827-485c-ada1-92097eb70455">
                </iframe>
              </div>`
          }
        ]
      },
      {
        topic: 'Tools',
        items: [
          {
            title: 'Devrev',
            detail: 'Our ticketing system for responding to participant inquiries (similar to Zendesk).'
          },
          {
            title: 'Admin Panel',
            detail: 'Look up participant and company data to verify accounts and plan details.'
          },
          {
            title: 'RingCentral',
            detail: 'Handle inbound and outbound calls with participants.'
          },
          {
            title: 'RightSignature',
            detail: 'Send and manage electronic forms and agreements with participants.'
          },
          {
            title: 'Google Calendar',
            detail: 'Schedule your weekly tasks, office hours, and follow-up reminders.'
          },
          {
            title: 'Google Meet',
            detail: 'Host video calls and screen-shares with participants or internal teams.'
          },
          {
            title: '1Password',
            detail: 'Securely store and retrieve all platform credentials (recordkeepers, admin panels, etc.).'
          },
          {
            title: 'Google Drive',
            detail: 'Central repository for shared files, templates, and reference docs.'
          },
          {
            title: 'Lucidchart',
            detail: 'House all project process diagrams and flowcharts for quick reference.'
          },
          {
            title: 'Mode',
            detail: 'Query our database for real-time participant and company information.'
          }
        ]
      },
      {
        topic: 'Detailed Guidelines',
        items: [
          {
            title: 'Using the Right Tone',
            detail: `
              <p>Always greet participants warmly, using their name:</p>
              <blockquote>"Hi Jane, thanks for reaching out! Happy to help."</blockquote>
              <p>Keep explanations clear and concise, avoid jargon, and confirm next steps:</p>
              <blockquote>"I’ve updated your address in our system. You’ll receive a confirmation email within 24 hours."</blockquote>
            `
          },
          {
            title: '401(k)-Specific Wording',
            detail: `
              
              “To request a distribution, please complete the distribution form in Devrev and attach your account details.”
              “Early withdrawal before age 59½ may incur penalties – see our <a href="#">distribution policy</a> for details.”
              “Feel free to reach out if you have any follow-up questions on tax withholding or penalty exceptions.”
              
            `
          }
        ]
      },
      {
        topic: 'Best Practices',
        items: [
          {
            title: 'More about Devrev',
            detail: `
              <p>• Tag every ticket with the appropriate case type (e.g., “Distribution Request”).<br>
              • Use standardized macros for common responses.<br>
              • Escalate urgent issues via RingCentral immediately.</p>
            `
          },
          {
            title: 'Using Admin Panel as a Pro',
            detail: `
              <table>
                <thead><tr><th>Section</th><th>Data</th></tr></thead>
                <tbody>
                  <tr><td>Participant Info</td><td>Email, SSN last 4, Plan ID</td></tr>
                  <tr><td>Company Profile</td><td>Plan Sponsor, Contact</td></tr>
                </tbody>
              </table>
            `
          }
        ]
      }
    ],
    owners: [
      { name: 'Ivan A', img: 'Images/people/Ivan_Alvis.png' },
      { name: 'Camilo B', img: 'Images/people/Camilo_Bello.jpeg' }
    ],
    experts: [
      { name: 'Carla C', img: 'owner2.jpg' }
    ]
  },
  {
    id: 'proc_distributions',
    title: 'Procedural Article: Distributions',
    desc: `**This article includes**:

**•** Guidelines on tools and available resources for handling participant's inquiries _*through the phone or tickets*_.
**•** Instructions on how to handle phone calls and tickets, wording, ticket formatting and tool usage for investigation while handling participant's requests.
**•** Procedures regarding how to use our tools for better case resolution and time usage.
**•** Pro Tips that may help to perform as a *FUA* expert ;)

**Related educational articles:** 

**•** <a href = "article.html?id=edu_distributions">Edu: Distributions</a>`,
    dropdownGroups: [
      {
        topic: 'Flowcharts',
        items: [
          {
            title: '[1] Distributions Summary Flowchart',
            detail: `
              <div style="width:100%; height:450px; margin:10px 0;">
                <iframe allowfullscreen frameborder="0"
                        style="width:100%; height:100%;"
                        src="https://lucid.app/documents/embedded/2c2d569f-dfb9-46ae-ae0a-c031bb9fa2b6"
                ></iframe>
              </div>
            `
          },
          {
            title: '[2] Distributions Detailed Flowchart',
            detail: `
              <div style="width:100%; height:400px; margin:10px 0;">
                <iframe allowfullscreen frameborder="0"
                        style="width:100%; height:100%;"
                        src="https://lucid.app/documents/embedded/2c2d569f-dfb9-46ae-ae0a-c031bb9fa2b6"
                ></iframe>
              </div>
            `
          }
        ]
      },
      {
        topic: 'Phone Calls Summary',
        items: [
          {
            title: '[1] Participant Verification',
            detail: `
              <p>When handling an interaction, once you’ve located the participant’s account, perform a formal account validation to verify that the person contacting us is the authorized account holder.</p>
              <br>
              <p>This is what you <u><i>must</i></u> validate on <Strong>Admin Panel</Strong> before handling a participant's request:</p>
              <br>
              <table>
                <colgroup>
                  <col style="width:20%;">
                  <col style="width:80%;">
                </colgroup>
                <!-- First Row: Headers -->
                <tr style="background:rgb(255, 250, 210);">
                  <th style="font-weight: bold;">Item</th>
                  <th style="font-weight: bold;s">Example</th>
                </tr>
                <!-- Row 2 -->
                <tr>
                  <td>Last 4 digits of their <Strong>SSN</Strong></td>
                  <td>" Can you please confirm the last 4 digits of your <Strong>Social Security Number</Strong>? "</td>
                </tr>
                <!-- Row 3 -->
                <tr>
                  <td>Company/Plan/Division Name</td>
                  <td>" Could you please tell me which is the Name of the <Strong>Company</Strong> linked to your 401(k)? "</td>
                </tr>
                <!-- Row 4 -->
                <tr>
                  <td>Participant's Birth date</td>
                  <td>" Please confirm me your <Strong>Date of Birth</Strong>. "</td>
                </tr>
                <!-- Row 5 -->
                <tr>
                  <td>Email on file</td>
                  <td>" Please confirm me the <Strong>Email</Strong> linked to your account. "</td>
                </tr>
              </table>

              <br>

              <p>If the participant is unable to verify any of the previously listed items (with the exception of their <Strong>SSN</Strong>), you <i><u>must</u></i> attempt to validate other data in the <Strong>Admin Panel</Strong>, such as the following:</p>
              
              <br>

              <table>
                <colgroup>
                  <col style="width:20%;">
                  <col style="width:80%;">
                </colgroup>
                <!-- First Row: Headers -->
                <tr style="background:rgb(255, 250, 210);">
                  <th style="font-weight: bold;">Item</th>
                  <th style="font-weight: bold;s">Example</th>
                </tr>
                <!-- Row 2 -->
                <tr>
                  <td>Hire date</td>
                  <td>" Can you please confirm when you were <Strong>Hired</Strong>? "</td>
                </tr>
                <!-- Row 3 -->
                <tr>
                  <td>Full Adress</td>
                  <td>" Could you please confirm the <Strong>Address</Strong> on file? "</td>
                </tr>
              </table>

            `
          },
          {
            title: 'Distributions Detailed Flowchart',
            detail: `
              <div style="width:100%; height:400px; margin:10px 0;">
                <iframe allowfullscreen frameborder="0"
                        style="width:100%; height:100%;"
                        src="https://lucid.app/documents/embedded/2c2d569f-dfb9-46ae-ae0a-c031bb9fa2b6"
                ></iframe>
              </div>
            `
          }
        ]
      },
      {
        topic: 'HTML Example',
        items: [
          {
            title: '[1] Tabla de ejemplo',
            detail: `
              <p>Este es un párrafo <strong>HTML</strong> dentro del dropdown.</p>
              <table>
                <thead><tr><th>Col A</th><th>Col B</th></tr></thead>
                <tbody>
                  <tr><td>Dato 1</td><td>Dato 2</td></tr>
                  <tr><td>Dato 3</td><td>Dato 4</td></tr>
                </tbody>
              </table>
            `
          }
        ]
      }
    ],
    owners: [
      { name: 'Ivan Alvis', img: 'Images/people/Ivan_Alvis.png' },
      { name: 'Camilo Bello', img: 'Images/people/Camilo_Bello.jpeg' }
    ],
    experts: [
      { name: 'Jeri Hanssman', img: 'owner1.jpg' }
    ]
  },
  {
    id: 'edu_distributions',
    title: 'Educational Article: Distributions',
    desc: `A 401(k) distribution is simply when someone takes money out of their 401(k) retirement account...`,
    dropdownGroups: [
      {
        topic: 'Diagramas de Flujo',
        items: [
          {
            title: 'Flujo Educativo',
            detail: `
              <div style="width:100%; height:450px; margin:10px 0;">
                <iframe allowfullscreen frameborder="0"
                        style="width:100%; height:100%;"
                        src="https://lucid.app/documents/embedded/example2"
                ></iframe>
              </div>
            `
          }
        ]
      },
      {
        topic: 'Educación',
        items: Array.from({ length: 10 }, (_, i) => ({
          title: `Opción ${i + 1}`,
          detail: `Instrucciones opción ${i + 1}.`
        }))
      }
    ],
    owners: [
      { name: 'Ivan Alvis', img: 'Images/people/Ivan_Alvis.png' },
      { name: 'Camilo Bello', img: 'Images/people/Camilo_Bello.jpeg' }
    ],
    experts: [
      { name: 'Jeri Hanssman', img: 'owner1.jpg' }
    ]
  }
];
