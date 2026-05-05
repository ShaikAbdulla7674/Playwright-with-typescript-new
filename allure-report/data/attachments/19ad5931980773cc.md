# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddCourse.spec.ts >> Add Course Test
- Location: tests\AddCourse.spec.ts:7:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('iframe').contentFrame().locator('#list_item_add')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('iframe').contentFrame().locator('#list_item_add')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - text: oxd_prev
    - iframe [ref=e5]:
      - generic [active] [ref=f2e1]:
        - generic [ref=f2e2]:
          - generic [ref=f2e3]:
            - link "oxd_prev" [ref=f2e7] [cursor=pointer]:
              - /url: javascript:void(0)
            - generic [ref=f2e8]:
              - generic [ref=f2e10]:
                - img [ref=f2e11]
                - generic [ref=f2e13] [cursor=pointer]: ohrm_settings
              - link "Aaron Hamilton" [ref=f2e14] [cursor=pointer]:
                - /url: /client/#/pim/my_info
              - generic [ref=f2e15]: Regional HR Manager
            - generic [ref=f2e16]:
              - generic [ref=f2e18] [cursor=pointer]: search
              - combobox [ref=f2e19]:
                - textbox "Search" [ref=f2e20]
            - list [ref=f2e25]:
              - listitem [ref=f2e26]:
                - link "HR Administration" [ref=f2e27] [cursor=pointer]:
                  - /url: /client/#/route/admin.systemUsers
                  - img [ref=f2e28]
                  - generic [ref=f2e30]: HR Administration
              - listitem [ref=f2e31]:
                - link "Employee Management" [ref=f2e32] [cursor=pointer]:
                  - /url: "/client/#/route/pim.employees({\"filterParameters\":null,\"calledFromMyShortcuts\":null})"
                  - img [ref=f2e33]
                  - generic [ref=f2e46]: Employee Management
              - listitem [ref=f2e47]:
                - link "Reports and Analytics" [ref=f2e48] [cursor=pointer]:
                  - /url: /client/#/route/reports_and_analytics.catalogue
                  - img [ref=f2e49]
                  - generic [ref=f2e51]: Reports and Analytics
              - listitem [ref=f2e52]:
                - link "Leave" [ref=f2e53] [cursor=pointer]:
                  - /url: "/client/#/route/leave.view_leave_list({\"filter\":null})"
                  - img [ref=f2e54]
                  - generic [ref=f2e56]: Leave
              - listitem [ref=f2e57]:
                - link "Time Tracking" [ref=f2e58] [cursor=pointer]:
                  - /url: /client/#/route/time.employee_timesheets
                  - img [ref=f2e59]
                  - generic [ref=f2e64]: Time Tracking
              - listitem [ref=f2e65]:
                - link "Attendance" [ref=f2e66] [cursor=pointer]:
                  - /url: "/client/#/route/report_view_oxd_with_persistence({\"id\": \"Attendance_Pay_Hours_Report\", \"filters\": null, \"breadCrumbs\": { \"0\" : {\"name\": \"Attendance\"}}, \"reportNameAsMenuPill\": false})"
                  - img [ref=f2e67]
                  - generic [ref=f2e71]: Attendance
              - listitem [ref=f2e72]:
                - link "Roster" [ref=f2e73] [cursor=pointer]:
                  - /url: /client/#/route/roster.schedule
                  - img [ref=f2e74]
                  - generic [ref=f2e78]: Roster
              - listitem [ref=f2e79]:
                - link "Recruitment (ATS)" [ref=f2e80] [cursor=pointer]:
                  - /url: /client/#/route/recruitment.candidates
                  - img [ref=f2e81]
                  - generic [ref=f2e86]: Recruitment (ATS)
              - listitem [ref=f2e87]:
                - link "Onboarding" [ref=f2e88] [cursor=pointer]:
                  - /url: /client/#/route/preboarding.preboardingEmployees
                  - img [ref=f2e89]
                  - generic [ref=f2e114]: Onboarding
              - listitem [ref=f2e115]:
                - link "Training" [ref=f2e116] [cursor=pointer]:
                  - /url: /training/viewCourseList
                  - img [ref=f2e117]
                  - generic [ref=f2e122]: Training
              - listitem [ref=f2e123]:
                - link "Goals" [ref=f2e124] [cursor=pointer]:
                  - /url: /client/#/route/performance.goals.approved
                  - img [ref=f2e125]
                  - generic [ref=f2e129]: Goals
              - listitem [ref=f2e130]:
                - link "Performance" [ref=f2e131] [cursor=pointer]:
                  - /url: "/client/#/route/performance.view_appraisals_list({\"resetPagination\": true})"
                  - img [ref=f2e132]
                  - generic [ref=f2e139]: Performance
              - listitem [ref=f2e140]:
                - link "Career Development" [ref=f2e141] [cursor=pointer]:
                  - /url: /client/#/route/succession_and_development.list_idp
                  - img [ref=f2e142]
                  - generic [ref=f2e149]: Career Development
              - listitem [ref=f2e150]:
                - link "request desk Request Desk" [ref=f2e151] [cursor=pointer]:
                  - /url: /client/#/route/help_desk.submit_request
                  - img "request desk" [ref=f2e152]
                  - generic [ref=f2e154]: Request Desk
              - listitem [ref=f2e155]:
                - link "Integrations" [ref=f2e156] [cursor=pointer]:
                  - /url: /client/#/route/vueadmin.integration
                  - img [ref=f2e157]
                  - generic [ref=f2e163]: Integrations
              - listitem [ref=f2e164]:
                - link "Surveys" [ref=f2e165] [cursor=pointer]:
                  - /url: "/client/#/route/appbuilder_app.record_list({\"appId\":1,\"applicationFormId\":\"3\",\"listType\":\"list\"})"
                  - img [ref=f2e166]
                  - generic [ref=f2e172]: Surveys
              - listitem [ref=f2e173]:
                - link "Employee Voice" [ref=f2e174] [cursor=pointer]:
                  - /url: "/client/#/route/appbuilder_app.record_list({\"appId\":2,\"applicationFormId\":\"11\",\"listType\":\"myList\"})"
                  - img [ref=f2e175]
                  - generic [ref=f2e181]: Employee Voice
              - listitem [ref=f2e182]:
                - link "Discipline" [ref=f2e183] [cursor=pointer]:
                  - /url: "/client/#/route/appbuilder_app.record_list({\"appId\":3,\"applicationFormId\":\"28\",\"listType\":\"myList\"})"
                  - img [ref=f2e184]
                  - generic [ref=f2e188]: Discipline
            - generic [ref=f2e190]:
              - generic [ref=f2e191]: keyboard_arrow_down
              - generic [ref=f2e192]: More
          - generic [ref=f2e193]:
            - banner [ref=f2e195]:
              - navigation [ref=f2e196]:
                - generic [ref=f2e197]:
                  - list [ref=f2e198]:
                    - listitem [ref=f2e199]:
                      - generic [ref=f2e200]: Training
                    - listitem [ref=f2e201]: /
                    - listitem [ref=f2e202]:
                      - generic [ref=f2e203]: Learning Courses
                  - list [ref=f2e204]:
                    - listitem [ref=f2e205]:
                      - link "oxd_logout_round Log Out" [ref=f2e206] [cursor=pointer]:
                        - /url: /auth/logout
                        - generic [ref=f2e207]: oxd_logout_round
                        - generic [ref=f2e208]: Log Out
                      - link "arrow_drop_down" [ref=f2e209] [cursor=pointer]:
                        - /url: javascript:void(0)
                        - generic [ref=f2e210]: arrow_drop_down
                - generic [ref=f2e211]:
                  - generic [ref=f2e212]:
                    - link "oxd_home_menu" [ref=f2e215] [cursor=pointer]:
                      - /url: /client/#/dashboard
                      - generic [ref=f2e216]: oxd_home_menu
                    - generic [ref=f2e217]:
                      - link "Courses" [ref=f2e220] [cursor=pointer]:
                        - /url: /training/viewCourseList
                      - link "Sessions" [ref=f2e223] [cursor=pointer]:
                        - /url: /training/viewSessionList
                      - link "My Participating Sessions" [ref=f2e226] [cursor=pointer]:
                        - /url: /training/viewMyTrainingSessionList
                      - generic [ref=f2e229] [cursor=pointer]:
                        - text: Online Assessment Courses
                        - generic [ref=f2e230]: oxd_menu_down
                  - generic [ref=f2e231]:
                    - generic [ref=f2e232]:
                      - list:
                        - listitem [ref=f2e233]:
                          - link "oxd_filter" [ref=f2e234] [cursor=pointer]:
                            - /url: "#searchForm"
                            - generic [ref=f2e235]: oxd_filter
                    - list [ref=f2e236]:
                      - listitem [ref=f2e237]:
                        - generic [ref=f2e240] [cursor=pointer]: ohrm_help
                      - listitem [ref=f2e241]:
                        - link "oxd_shortcut" [ref=f2e244] [cursor=pointer]:
                          - /url: javascript:void(0)
                          - generic [ref=f2e245]: oxd_shortcut
            - generic [ref=f2e252]:
              - generic [ref=f2e255] [cursor=pointer]: add
              - table [ref=f2e256]:
                - rowgroup [ref=f2e257]:
                  - row "more_horiz Titlearrow_upward Subunit Coordinator Company Status" [ref=f2e258]:
                    - columnheader "more_horiz" [ref=f2e259]:
                      - generic [ref=f2e260]: more_horiz
                    - columnheader "Titlearrow_upward" [ref=f2e261] [cursor=pointer]:
                      - generic [ref=f2e262]: Titlearrow_upward
                    - columnheader "Subunit" [ref=f2e263]
                    - columnheader "Coordinator" [ref=f2e264]
                    - columnheader "Company" [ref=f2e265] [cursor=pointer]:
                      - generic [ref=f2e266]: Company
                    - columnheader "Status" [ref=f2e267]
                - rowgroup [ref=f2e268]:
                  - row "aaaa Odis Adalwin Active" [ref=f2e269]:
                    - cell [ref=f2e270]:
                      - checkbox [ref=f2e271]
                    - cell "aaaa" [ref=f2e273]:
                      - link "aaaa" [ref=f2e274] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/17
                    - cell [ref=f2e275]
                    - cell "Odis Adalwin" [ref=f2e276]
                    - cell [ref=f2e277]
                    - cell "Active" [ref=f2e278]
                  - row "Active Listening Techniques Sales Léa Bernard IBM Active" [ref=f2e279]:
                    - cell [ref=f2e280]:
                      - checkbox [ref=f2e281]
                    - cell "Active Listening Techniques" [ref=f2e283]:
                      - link "Active Listening Techniques" [ref=f2e284] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/6
                    - cell "Sales" [ref=f2e285]
                    - cell "Léa Bernard" [ref=f2e286]
                    - cell "IBM" [ref=f2e287]
                    - cell "Active" [ref=f2e288]
                  - row "ai Odis Adalwin Active" [ref=f2e289]:
                    - cell [ref=f2e290]:
                      - checkbox [ref=f2e291]
                    - cell "ai" [ref=f2e293]:
                      - link "ai" [ref=f2e294] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/16
                    - cell [ref=f2e295]
                    - cell "Odis Adalwin" [ref=f2e296]
                    - cell [ref=f2e297]
                    - cell "Active" [ref=f2e298]
                  - row "aiii Brody Alan Active" [ref=f2e299]:
                    - cell [ref=f2e300]:
                      - checkbox [ref=f2e301]
                    - cell "aiii" [ref=f2e303]:
                      - link "aiii" [ref=f2e304] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/37
                    - cell [ref=f2e305]
                    - cell "Brody Alan" [ref=f2e306]
                    - cell [ref=f2e307]
                    - cell "Active" [ref=f2e308]
                  - row "Artificial inteligence Odis Adalwin Active" [ref=f2e309]:
                    - cell [ref=f2e310]:
                      - checkbox [ref=f2e311]
                    - cell "Artificial inteligence" [ref=f2e313]:
                      - link "Artificial inteligence" [ref=f2e314] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/18
                    - cell [ref=f2e315]
                    - cell "Odis Adalwin" [ref=f2e316]
                    - cell [ref=f2e317]
                    - cell "Active" [ref=f2e318]
                  - row "Artificial inteligence Odis Adalwin Active" [ref=f2e319]:
                    - cell [ref=f2e320]:
                      - checkbox [ref=f2e321]
                    - cell "Artificial inteligence" [ref=f2e323]:
                      - link "Artificial inteligence" [ref=f2e324] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/19
                    - cell [ref=f2e325]
                    - cell "Odis Adalwin" [ref=f2e326]
                    - cell [ref=f2e327]
                    - cell "Active" [ref=f2e328]
                  - row "Artificial inteligence Odis Adalwin Active" [ref=f2e329]:
                    - cell [ref=f2e330]:
                      - checkbox [ref=f2e331]
                    - cell "Artificial inteligence" [ref=f2e333]:
                      - link "Artificial inteligence" [ref=f2e334] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/20
                    - cell [ref=f2e335]
                    - cell "Odis Adalwin" [ref=f2e336]
                    - cell [ref=f2e337]
                    - cell "Active" [ref=f2e338]
                  - row "Artificial inteligence Odis Adalwin Active" [ref=f2e339]:
                    - cell [ref=f2e340]:
                      - checkbox [ref=f2e341]
                    - cell "Artificial inteligence" [ref=f2e343]:
                      - link "Artificial inteligence" [ref=f2e344] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/21
                    - cell [ref=f2e345]
                    - cell "Odis Adalwin" [ref=f2e346]
                    - cell [ref=f2e347]
                    - cell "Active" [ref=f2e348]
                  - row "Artificial inteligence Odis Adalwin Active" [ref=f2e349]:
                    - cell [ref=f2e350]:
                      - checkbox [ref=f2e351]
                    - cell "Artificial inteligence" [ref=f2e353]:
                      - link "Artificial inteligence" [ref=f2e354] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/22
                    - cell [ref=f2e355]
                    - cell "Odis Adalwin" [ref=f2e356]
                    - cell [ref=f2e357]
                    - cell "Active" [ref=f2e358]
                  - row "Artificial inteligence Odis Adalwin Active" [ref=f2e359]:
                    - cell [ref=f2e360]:
                      - checkbox [ref=f2e361]
                    - cell "Artificial inteligence" [ref=f2e363]:
                      - link "Artificial inteligence" [ref=f2e364] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/23
                    - cell [ref=f2e365]
                    - cell "Odis Adalwin" [ref=f2e366]
                    - cell [ref=f2e367]
                    - cell "Active" [ref=f2e368]
                  - row "Artificial inteligence Odis Adalwin Active" [ref=f2e369]:
                    - cell [ref=f2e370]:
                      - checkbox [ref=f2e371]
                    - cell "Artificial inteligence" [ref=f2e373]:
                      - link "Artificial inteligence" [ref=f2e374] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/24
                    - cell [ref=f2e375]
                    - cell "Odis Adalwin" [ref=f2e376]
                    - cell [ref=f2e377]
                    - cell "Active" [ref=f2e378]
                  - row "Artificial inteligence Odis Adalwin Active" [ref=f2e379]:
                    - cell [ref=f2e380]:
                      - checkbox [ref=f2e381]
                    - cell "Artificial inteligence" [ref=f2e383]:
                      - link "Artificial inteligence" [ref=f2e384] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/25
                    - cell [ref=f2e385]
                    - cell "Odis Adalwin" [ref=f2e386]
                    - cell [ref=f2e387]
                    - cell "Active" [ref=f2e388]
                  - row "Artificial inteligence Odis Adalwin Active" [ref=f2e389]:
                    - cell [ref=f2e390]:
                      - checkbox [ref=f2e391]
                    - cell "Artificial inteligence" [ref=f2e393]:
                      - link "Artificial inteligence" [ref=f2e394] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/26
                    - cell [ref=f2e395]
                    - cell "Odis Adalwin" [ref=f2e396]
                    - cell [ref=f2e397]
                    - cell "Active" [ref=f2e398]
                  - row "Artificial inteligence Odis Adalwin Active" [ref=f2e399]:
                    - cell [ref=f2e400]:
                      - checkbox [ref=f2e401]
                    - cell "Artificial inteligence" [ref=f2e403]:
                      - link "Artificial inteligence" [ref=f2e404] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/27
                    - cell [ref=f2e405]
                    - cell "Odis Adalwin" [ref=f2e406]
                    - cell [ref=f2e407]
                    - cell "Active" [ref=f2e408]
                  - row "Artificial inteligence Odis Adalwin Active" [ref=f2e409]:
                    - cell [ref=f2e410]:
                      - checkbox [ref=f2e411]
                    - cell "Artificial inteligence" [ref=f2e413]:
                      - link "Artificial inteligence" [ref=f2e414] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/28
                    - cell [ref=f2e415]
                    - cell "Odis Adalwin" [ref=f2e416]
                    - cell [ref=f2e417]
                    - cell "Active" [ref=f2e418]
                  - row "Artificial inteligence Odis Adalwin Active" [ref=f2e419]:
                    - cell [ref=f2e420]:
                      - checkbox [ref=f2e421]
                    - cell "Artificial inteligence" [ref=f2e423]:
                      - link "Artificial inteligence" [ref=f2e424] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/29
                    - cell [ref=f2e425]
                    - cell "Odis Adalwin" [ref=f2e426]
                    - cell [ref=f2e427]
                    - cell "Active" [ref=f2e428]
                  - row "Artificial inteligence Odis Adalwin Active" [ref=f2e429]:
                    - cell [ref=f2e430]:
                      - checkbox [ref=f2e431]
                    - cell "Artificial inteligence" [ref=f2e433]:
                      - link "Artificial inteligence" [ref=f2e434] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/30
                    - cell [ref=f2e435]
                    - cell "Odis Adalwin" [ref=f2e436]
                    - cell [ref=f2e437]
                    - cell "Active" [ref=f2e438]
                  - row "Artificial inteligence Odis Adalwin Active" [ref=f2e439]:
                    - cell [ref=f2e440]:
                      - checkbox [ref=f2e441]
                    - cell "Artificial inteligence" [ref=f2e443]:
                      - link "Artificial inteligence" [ref=f2e444] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/31
                    - cell [ref=f2e445]
                    - cell "Odis Adalwin" [ref=f2e446]
                    - cell [ref=f2e447]
                    - cell "Active" [ref=f2e448]
                  - row "Artificial inteligence Odis Adalwin Active" [ref=f2e449]:
                    - cell [ref=f2e450]:
                      - checkbox [ref=f2e451]
                    - cell "Artificial inteligence" [ref=f2e453]:
                      - link "Artificial inteligence" [ref=f2e454] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/32
                    - cell [ref=f2e455]
                    - cell "Odis Adalwin" [ref=f2e456]
                    - cell [ref=f2e457]
                    - cell "Active" [ref=f2e458]
                  - row "Artificial inteligence Odis Adalwin Active" [ref=f2e459]:
                    - cell [ref=f2e460]:
                      - checkbox [ref=f2e461]
                    - cell "Artificial inteligence" [ref=f2e463]:
                      - link "Artificial inteligence" [ref=f2e464] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/33
                    - cell [ref=f2e465]
                    - cell "Odis Adalwin" [ref=f2e466]
                    - cell [ref=f2e467]
                    - cell "Active" [ref=f2e468]
                  - row "Artificial inteligence Odis Adalwin Active" [ref=f2e469]:
                    - cell [ref=f2e470]:
                      - checkbox [ref=f2e471]
                    - cell "Artificial inteligence" [ref=f2e473]:
                      - link "Artificial inteligence" [ref=f2e474] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/34
                    - cell [ref=f2e475]
                    - cell "Odis Adalwin" [ref=f2e476]
                    - cell [ref=f2e477]
                    - cell "Active" [ref=f2e478]
                  - row "Communication Skills for Technical Support Technical Support Brody Alan coursera Active" [ref=f2e479]:
                    - cell [ref=f2e480]:
                      - checkbox [ref=f2e481]
                    - cell "Communication Skills for Technical Support" [ref=f2e483]:
                      - link "Communication Skills for Technical Support" [ref=f2e484] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/14
                    - cell "Technical Support" [ref=f2e485]
                    - cell "Brody Alan" [ref=f2e486]
                    - cell "coursera" [ref=f2e487]
                    - cell "Active" [ref=f2e488]
                  - row "Customer Service Fundamentals Sales Lisa Wagner coursera Active" [ref=f2e489]:
                    - cell [ref=f2e490]:
                      - checkbox [ref=f2e491]
                    - cell "Customer Service Fundamentals" [ref=f2e493]:
                      - link "Customer Service Fundamentals" [ref=f2e494] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/7
                    - cell "Sales" [ref=f2e495]
                    - cell "Lisa Wagner" [ref=f2e496]
                    - cell "coursera" [ref=f2e497]
                    - cell "Active" [ref=f2e498]
                  - row "Effective Communication Skills Sales Lisa Wagner Active" [ref=f2e499]:
                    - cell [ref=f2e500]:
                      - checkbox [ref=f2e501]
                    - cell "Effective Communication Skills" [ref=f2e503]:
                      - link "Effective Communication Skills" [ref=f2e504] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/5
                    - cell "Sales" [ref=f2e505]
                    - cell "Lisa Wagner" [ref=f2e506]
                    - cell [ref=f2e507]
                    - cell "Active" [ref=f2e508]
                  - row "Hardware Support Technical Support Brody Alan udemy Active" [ref=f2e509]:
                    - cell [ref=f2e510]:
                      - checkbox [ref=f2e511]
                    - cell "Hardware Support" [ref=f2e513]:
                      - link "Hardware Support" [ref=f2e514] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/13
                    - cell "Technical Support" [ref=f2e515]
                    - cell "Brody Alan" [ref=f2e516]
                    - cell "udemy" [ref=f2e517]
                    - cell "Active" [ref=f2e518]
                  - 'row "IBM IT Support: IBM. Technical Support Aaliyah Haq IBM Active" [ref=f2e519]':
                    - cell [ref=f2e520]:
                      - checkbox [ref=f2e521]
                    - 'cell "IBM IT Support: IBM." [ref=f2e523]':
                      - 'link "IBM IT Support: IBM." [ref=f2e524] [cursor=pointer]':
                        - /url: /index.php/training/addCourse/courseId/1
                    - cell "Technical Support" [ref=f2e525]
                    - cell "Aaliyah Haq" [ref=f2e526]
                    - cell "IBM" [ref=f2e527]
                    - cell "Active" [ref=f2e528]
                  - row "Introduction to Human Resources Management Human Resources Odis Adalwin IBM Active" [ref=f2e529]:
                    - cell [ref=f2e530]:
                      - checkbox [ref=f2e531]
                    - cell "Introduction to Human Resources Management" [ref=f2e533]:
                      - link "Introduction to Human Resources Management" [ref=f2e534] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/3
                    - cell "Human Resources" [ref=f2e535]
                    - cell "Odis Adalwin" [ref=f2e536]
                    - cell "IBM" [ref=f2e537]
                    - cell "Active" [ref=f2e538]
                  - 'row "Mastering Customer Interactions: Active Listening and Empathy Sales Lisa Wagner coursera Active" [ref=f2e539]':
                    - cell [ref=f2e540]:
                      - checkbox [ref=f2e541]
                    - 'cell "Mastering Customer Interactions: Active Listening and Empathy" [ref=f2e543]':
                      - 'link "Mastering Customer Interactions: Active Listening and Empathy" [ref=f2e544] [cursor=pointer]':
                        - /url: /index.php/training/addCourse/courseId/8
                    - cell "Sales" [ref=f2e545]
                    - cell "Lisa Wagner" [ref=f2e546]
                    - cell "coursera" [ref=f2e547]
                    - cell "Active" [ref=f2e548]
                  - row "Python Odis Adalwin Active" [ref=f2e549]:
                    - cell [ref=f2e550]:
                      - checkbox [ref=f2e551]
                    - cell "Python" [ref=f2e553]:
                      - link "Python" [ref=f2e554] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/15
                    - cell [ref=f2e555]
                    - cell "Odis Adalwin" [ref=f2e556]
                    - cell [ref=f2e557]
                    - cell "Active" [ref=f2e558]
                  - row "Recruitment and Staffing Human Resources Odis Adalwin IBM Active" [ref=f2e559]:
                    - cell [ref=f2e560]:
                      - checkbox [ref=f2e561]
                    - cell "Recruitment and Staffing" [ref=f2e563]:
                      - link "Recruitment and Staffing" [ref=f2e564] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/4
                    - cell "Human Resources" [ref=f2e565]
                    - cell "Odis Adalwin" [ref=f2e566]
                    - cell "IBM" [ref=f2e567]
                    - cell "Active" [ref=f2e568]
                  - row "Software Project Management Quality assurance (QA) Eric Harris Customer Service Institute Active" [ref=f2e569]:
                    - cell [ref=f2e570]:
                      - checkbox [ref=f2e571]
                    - cell "Software Project Management" [ref=f2e573]:
                      - link "Software Project Management" [ref=f2e574] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/12
                    - cell "Quality assurance (QA)" [ref=f2e575]
                    - cell "Eric Harris" [ref=f2e576]
                    - cell "Customer Service Institute" [ref=f2e577]
                    - cell "Active" [ref=f2e578]
                  - row "Software Testing and Quality Assurance Information Technology Eric Harris Active" [ref=f2e579]:
                    - cell [ref=f2e580]:
                      - checkbox [ref=f2e581]
                    - cell "Software Testing and Quality Assurance" [ref=f2e583]:
                      - link "Software Testing and Quality Assurance" [ref=f2e584] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/11
                    - cell "Information Technology" [ref=f2e585]
                    - cell "Eric Harris" [ref=f2e586]
                    - cell [ref=f2e587]
                    - cell "Active" [ref=f2e588]
                  - row "Technical Support Case Studies and Capstone Technical Support Aaliyah Haq IBM Active" [ref=f2e589]:
                    - cell [ref=f2e590]:
                      - checkbox [ref=f2e591]
                    - cell "Technical Support Case Studies and Capstone" [ref=f2e593]:
                      - link "Technical Support Case Studies and Capstone" [ref=f2e594] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/2
                    - cell "Technical Support" [ref=f2e595]
                    - cell "Aaliyah Haq" [ref=f2e596]
                    - cell "IBM" [ref=f2e597]
                    - cell "Active" [ref=f2e598]
                  - row "tesg Troy Odyssey Active" [ref=f2e599]:
                    - cell [ref=f2e600]:
                      - checkbox [ref=f2e601]
                    - cell "tesg" [ref=f2e603]:
                      - link "tesg" [ref=f2e604] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/35
                    - cell [ref=f2e605]
                    - cell "Troy Odyssey" [ref=f2e606]
                    - cell [ref=f2e607]
                    - cell "Active" [ref=f2e608]
                  - row "test Charlie Carter Active" [ref=f2e609]:
                    - cell [ref=f2e610]:
                      - checkbox [ref=f2e611]
                    - cell "test" [ref=f2e613]:
                      - link "test" [ref=f2e614] [cursor=pointer]:
                        - /url: /index.php/training/addCourse/courseId/36
                    - cell [ref=f2e615]
                    - cell "Charlie Carter" [ref=f2e616]
                    - cell [ref=f2e617]
                    - cell "Active" [ref=f2e618]
              - list [ref=f2e619]:
                - listitem [ref=f2e620]: Rows per page
                - listitem [ref=f2e621]:
                  - generic [ref=f2e622]:
                    - generic [ref=f2e623]: ▼
                    - textbox [ref=f2e624] [cursor=pointer]: "50"
                - listitem [ref=f2e625]: 1 - 35 of 35
            - generic [ref=f2e627]:
              - text: OrangeHRM 8.0
              - text: © 2005 - 2026
              - link "OrangeHRM, Inc" [ref=f2e628] [cursor=pointer]:
                - /url: http://www.orangehrm.com
              - text: . All rights reserved.
        - generic: Profile Settings
        - generic: HR Administration
        - generic: HR Administration
        - generic: HR Administration
        - generic: Employee Management
        - generic: Employee Management
        - generic: Employee Management
        - generic: Reports and Analytics
        - generic: Reports and Analytics
        - generic: Reports and Analytics
        - generic: Leave
        - generic: Leave
        - generic: Leave
        - generic: Time Tracking
        - generic: Time Tracking
        - generic: Time Tracking
        - generic: Attendance
        - generic: Attendance
        - generic: Attendance
        - generic: Roster
        - generic: Roster
        - generic: Roster
        - generic: Recruitment (ATS)
        - generic: Recruitment (ATS)
        - generic: Recruitment (ATS)
        - generic: Onboarding
        - generic: Onboarding
        - generic: Onboarding
        - generic: Training
        - generic: Training
        - generic: Training
        - generic: Goals
        - generic: Goals
        - generic: Goals
        - generic: Performance
        - generic: Performance
        - generic: Performance
        - generic: Career Development
        - generic: Career Development
        - generic: Career Development
        - generic: Request Desk
        - generic: Request Desk
        - generic: Request Desk
        - generic: Integrations
        - generic: Integrations
        - generic: Integrations
        - generic: Surveys
        - generic: Surveys
        - generic: Surveys
        - generic: Employee Voice
        - generic: Employee Voice
        - generic: Employee Voice
        - generic: Discipline
        - generic: Discipline
        - generic: Discipline
        - generic: Training
        - generic: Learning Courses
        - generic: External Links
        - generic: Home
        - generic: Filter
        - generic: Help
        - generic: My Shortcuts
        - generic: Add Course
        - generic: Profile Settings
        - generic: HR Administration
        - generic: HR Administration
        - generic: HR Administration
        - generic: Employee Management
        - generic: Employee Management
        - generic: Employee Management
        - generic: Reports and Analytics
        - generic: Reports and Analytics
        - generic: Reports and Analytics
        - generic: Leave
        - generic: Leave
        - generic: Leave
        - generic: Time Tracking
        - generic: Time Tracking
        - generic: Time Tracking
        - generic: Attendance
        - generic: Attendance
        - generic: Attendance
        - generic: Roster
        - generic: Roster
        - generic: Roster
        - generic: Recruitment (ATS)
        - generic: Recruitment (ATS)
        - generic: Recruitment (ATS)
        - generic: Onboarding
        - generic: Onboarding
        - generic: Onboarding
        - generic: Training
        - generic: Training
        - generic: Training
        - generic: Goals
        - generic: Goals
        - generic: Goals
        - generic: Performance
        - generic: Performance
        - generic: Performance
        - generic: Career Development
        - generic: Career Development
        - generic: Career Development
        - generic: Request Desk
        - generic: Request Desk
        - generic: Request Desk
        - generic: Integrations
        - generic: Integrations
        - generic: Integrations
        - generic: Surveys
        - generic: Surveys
        - generic: Surveys
        - generic: Employee Voice
        - generic: Employee Voice
        - generic: Employee Voice
        - generic: Discipline
        - generic: Discipline
        - generic: Discipline
        - generic: Training
        - generic: Learning Courses
        - generic: Home
        - generic: Filter
        - generic: Help
        - generic: My Shortcuts
        - generic: Add Course
        - generic: Profile Settings
        - generic: HR Administration
        - generic: HR Administration
        - generic: HR Administration
        - generic: Employee Management
        - generic: Employee Management
        - generic: Employee Management
        - generic: Reports and Analytics
        - generic: Reports and Analytics
        - generic: Reports and Analytics
        - generic: Leave
        - generic: Leave
        - generic: Leave
        - generic: Time Tracking
        - generic: Time Tracking
        - generic: Time Tracking
        - generic: Attendance
        - generic: Attendance
        - generic: Attendance
        - generic: Roster
        - generic: Roster
        - generic: Roster
        - generic: Recruitment (ATS)
        - generic: Recruitment (ATS)
        - generic: Recruitment (ATS)
        - generic: Onboarding
        - generic: Onboarding
        - generic: Onboarding
        - generic: Training
        - generic: Training
        - generic: Training
        - generic: Goals
        - generic: Goals
        - generic: Goals
        - generic: Performance
        - generic: Performance
        - generic: Performance
        - generic: Career Development
        - generic: Career Development
        - generic: Career Development
        - generic: Request Desk
        - generic: Request Desk
        - generic: Request Desk
        - generic: Integrations
        - generic: Integrations
        - generic: Integrations
        - generic: Surveys
        - generic: Surveys
        - generic: Surveys
        - generic: Employee Voice
        - generic: Employee Voice
        - generic: Employee Voice
        - generic: Discipline
        - generic: Discipline
        - generic: Discipline
        - generic: Training
        - generic: Learning Courses
        - generic: Home
        - generic: Filter
        - generic: Help
        - generic: My Shortcuts
        - generic: Add Course
  - img [ref=e7]
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | 
  3  | export class TrainingPage {
  4  |   private page: Page;
  5  |   private titleName: string = "Artificial tool";
  6  |   private coordinatorName: string = "Odis Adalwin";
  7  | 
  8  |   constructor(page: Page) {
  9  |     this.page = page;
  10 |   }
  11 | 
  12 |   private frame() {
  13 |     return this.page.frameLocator("iframe");
  14 |   }
  15 | 
  16 |   async addCourse() {
  17 |     const frame = this.frame();
  18 | 
  19 |     // Wait for page ready
  20 |     await frame.locator('#preloader').waitFor({ state: 'hidden' });
  21 |    
  22 |     // Click Add Course
  23 |     const addBtn = frame.locator('#list_item_add');
> 24 |     await expect(addBtn).toBeVisible();
     |                          ^ Error: expect(locator).toBeVisible() failed
  25 |     await addBtn.waitFor({ state: 'visible', timeout: 20000 });
  26 |     await addBtn.click();
  27 | 
  28 |     // Fill Title
  29 |     const tittletxtbox=frame.getByLabel('Title *');
  30 |     await tittletxtbox.waitFor({ state: 'visible', timeout: 20000 });
  31 |     await tittletxtbox.fill(this.titleName);
  32 |     // Fill Coordinator (IMPORTANT: select from dropdown)
  33 |     const coordinator = frame.getByPlaceholder('Type for hints...');
  34 |     await coordinator.fill(this.coordinatorName);
  35 |     await frame.getByText(this.coordinatorName, { exact: true }).click();
  36 | 
  37 |     // Click Save
  38 |     const saveBtn = frame.locator('#btnSaveCourse');
  39 |     await expect(saveBtn).toBeEnabled();
  40 | 
  41 |     await saveBtn.click();
  42 | 
  43 |     // Wait for navigation to course list
  44 |     await frame.getByText('Courses').waitFor();
  45 |   }
  46 | 
  47 |   async isCourseAdded(): Promise<boolean> {
  48 |     const frame = this.frame();
  49 | 
  50 |     const titleLocator = frame.getByText(this.titleName, { exact: true });
  51 |     const coordLocator = frame.getByText(this.coordinatorName, { exact: true });
  52 | 
  53 |     await expect(titleLocator).toBeVisible({ timeout: 10000 });
  54 |     await expect(coordLocator).toBeVisible({ timeout: 10000 });
  55 | 
  56 |     return true;
  57 |   }
  58 | }
```