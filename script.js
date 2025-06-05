document.addEventListener('DOMContentLoaded', () => {
    const langData = {
        'ar': {
            // Header
            'home': 'الرئيسية',
            'about': 'عن المخيم',
            'activities': 'الأنشطة',
            'program': 'البرنامج',
            'location': 'الموقع',
            'book_now': 'احجز الآن!',
            'current_lang_ar': 'العربية',
            'ar': 'العربية',
            'en': 'English',
            'tr': 'Türkçe',

            // Hero Section
            'slogan1': 'أجمل صيف في شيلا! استمتع بالبحر والضحكات.',
            'slogan2': 'مغامرة لا تُنسى تنتظرك في قلب الطبيعة.',
            'slogan3': 'استرخاء، متعة، وذكريات لا تُحصى!',
            'hero_desc': 'مخيم صيفي ترفيهي فريد من نوعه للشباب (18-45 عاماً) على شواطئ شيلا الساحرة في اسطنبول. انضم إلينا لخمس ليالٍ وستة أيام من المرح، المغامرات، والتعارف!',
            'join_us': 'انضم إلينا الآن!',

            // About Section
            'about_title': 'عن مخيمنا الصيفي: حيث تتجدد الروح والضحكات',
            'about_text1': 'في قلب شيلا الساحرة، حيث يلتقي زرقة البحر بجمال الطبيعة الخضراء، تدعوك "إيزي نوفا" لتجربة صيف استثنائي. مخيمنا المصمم خصيصاً للفئة العمرية 18 إلى 45 عاماً يرحب بالجميع - أفراداً، أزواجاً، أصدقاءً، ومجموعات!',
            'about_text2': 'هدفنا هو أن نقدم لك ملاذاً من الروتين اليومي، حيث يمكنك الاستمتاع بأجواء مليئة بالمرح والتجديد. لا تفكر في شيء سوى كيف تستمتع بكل لحظة، وتترك همومك خلفك.',
            'target_audience_title': 'مخيم للجميع',
            'target_audience_desc': 'للشباب (18-45 عاماً) من الجنسين. نرحب بالأزواج والأصدقاء والمجموعات.',
            'duration_title': 'مدة الرحلة',
            'duration_desc': '5 ليالٍ و 6 أيام من المتعة والإثارة.',
            'date_title': 'تاريخ الرحلة',
            'date_desc': 'تبدأ المغامرة في 15 يوليو 2025.',
            'price_title': 'سعر شامل كل شيء',
            'price_desc': '500 دولار للفرد، يشمل كل الأنشطة، الإقامة، الوجبات، والمشروبات اللذيذة (خاصة الشاي التركي!).',
            'transport_title': 'النقل والتنقل',
            'transport_desc': 'نقل من وإلى اسطنبول، وجميع التنقلات الداخلية مشمولة.',
            'facilities_title': 'مرافق متكاملة',
            'facilities_desc': 'إنترنت عالي السرعة وكهرباء متوفرة في جميع أنحاء المخيم.',
            'photography_title': 'توثيق اللحظات',
            'photography_desc': 'تصوير احترافي وتصوير بالدرون لتخليد ذكرياتكم.',
            'forget_worries': 'لا تنسَ أن تحضر ضحكاتك وتترك همومك في المنزل! مخيمنا هو بوابتك لعالم من الفرح المطلق.',
            'packing_list': 'لا تنسَ إحضار نظاراتك الشمسية، قبعة، حذاء رياضي مريح للمغامرات، وملابس سباحة جاهزة للانطلاق في بحر شيلا!',

            // Activities Section
            'activities_title': 'أنشطتنا الترفيهية: كل يوم مغامرة جديدة!',
            'activities_intro': 'في إيزي نوفا، الملل ليس خياراً! لقد صممنا برنامجاً مليئاً بالأنشطة الممتعة والشيقة لضمان أن كل لحظة تقضيها معنا ستكون مليئة بالبهجة والإثارة. استعد لتجربة فريدة من نوعها!',
            'morning_activities': 'أنشطة صباحية مفعمة بالنشاط والطاقة.',
            'volleyball': 'كرة طائرة وكرة قدم على الشاطئ.',
            'rafting': 'مغامرة التجديف (الرافتنج) في النهر.',
            'safari_motors': 'رحلة على دراجات السفاري (ATV).',
            'zipline': 'متعة التحليق على حبال الزبلاين.',
            'evening_activities': 'أنشطة مسائية وحفلات شواء لا تُنسى.',
            'fireworks': 'عروض ألعاب نارية مبهرة واحتفالات.',
            'social_events': 'فعاليات تعارف وأنشطة جماعية لبناء صداقات جديدة.',
            'competitions': 'مسابقات حماسية وألعاب تحفيزية مع جوائز وهدايا قيمة.',

            // Program Section
            'program_title': 'البرنامج اليومي التفصيلي',
            'day1_title': 'اليوم الأول: الوصول والاسترخاء',
            'day1_desc': ['وصول المشاركين من اسطنبول إلى المخيم في شيلا.', 'تسجيل الدخول وتوزيع أماكن الإقامة.', 'وجبة غداء ترحيبية.', 'وقت حر للاسترخاء والتعرف على المكان.', 'أنشطة تعارف ومسابقات خفيفة.', 'حفلة شواء مسائية واحتفال ترحيبي.'],
            'day2_title': 'اليوم الثاني: مغامرات مائية',
            'day2_desc': ['إفطار صباحي.', 'أنشطة صباحية: كرة طائرة وكرة قدم على الشاطئ.', 'الانطلاق لمغامرة التجديف (الرافتنج) في النهر.', 'وجبة غداء على ضفاف النهر.', 'العودة للمخيم، وقت حر.', 'أنشطة مسائية ومسابقات تحفيزية.'],
            'day3_title': 'اليوم الثالث: إثارة وسفاري',
            'day3_desc': ['إفطار صباحي.', 'أنشطة صباحية على الشاطئ.', 'رحلة على دراجات السفاري (ATV) في المناطق المحيطة.', 'وجبة غداء في الهواء الطلق.', 'العودة للمخيم، وقت حر.', 'حفل ليلي وألعاب نارية مبهرة.'],
            'day4_title': 'اليوم الرابع: تحليق وضحكات',
            'day4_desc': ['إفطار صباحي.', 'مغامرة الزبلاين المليئة بالإثارة.', 'وقت حر للسباحة والاستمتاع بالبحر.', 'وجبة غداء.', 'مسابقات ترفيهية وأنشطة جماعية.', 'أمسية ثقافية وتعارف.'],
            'day5_title': 'اليوم الخامس: استرخاء ووداع',
            'day5_desc': ['إفطار صباحي.', 'أنشطة حرة واستجمام على الشاطئ.', 'وجبة غداء.', 'مسابقات ختامية وتوزيع جوائز.', 'حفل وداع وأنشطة ترفيهية.', 'وقت حر للمحادثات وتبادل الذكريات.'],
            'day6_title': 'اليوم السادس: المغادرة',
            'day6_desc': ['إفطار صباحي.', 'تسجيل الخروج.', 'نقل المشاركين إلى اسطنبول.', 'العودة بذكريات لا تُنسى.'],

            // Location Section
            'location_title': 'موقعنا: شيلا، جوهرة اسطنبول الخفية',
            'location_desc1': 'يقع مخيمنا في منطقة شيلا الساحرة، والتي تُعرف بجمالها الطبيعي الخلاب وشواطئها الهادئة على البحر الأسود مباشرة. إنها الوجهة المثالية للهروب من صخب المدينة والاستمتاع بالهدوء والجمال.',
            'location_desc2': '**العنوان الرئيسي لشركتنا:** إيزي نوفا، اسطنبول، الفاتح، مقابل ترام واي يوسف باشا، رقم 42، مكتب رقم 8.',

            // Footer
            'footer_rights': 'جميع الحقوق محفوظة &copy; 2025 Istanova',
            'contact_us': 'للتواصل:',

            // Booking Page
            'booking_title': 'صفحة الحجز والدفع',
            'num_participants_label': 'عدد المشاركين:',
            'relationship_type_label': 'العلاقة:',
            'friends': 'أصدقاء',
            'couple': 'زوجين',
            'mobile_country_code_label': 'رمز الدولة:',
            'phone_number_label': 'رقم الهاتف:',
            'user_email_label': 'البريد الإلكتروني:',
            'total_price_label': 'المبلغ الإجمالي:',
            'discount_applied': 'تم تطبيق الخصم!',
            'payment_methods_title': 'طرق الدفع المتاحة',
            'agree_terms': 'أوافق على',
            'view_terms_link': 'الشروط والأحكام',
            'confirm_booking': 'تأكيد الحجز',
            'participant_name_label': 'اسم المشارك',
            'participant_age_label': 'عمر المشارك',
            'participant_gender_label': 'جنس المشارك',
            'participant_nationality_label': 'جنسية المشارك',
            'male': 'ذكر',
            'female': 'أنثى',
            'participant_title': 'المشارك',
            'couple_male_label': 'الزوج',
            'couple_female_label': 'الزوجة',
            'participant_male_title': 'المشارك', // For 3+ males
            'participant_female_title': 'المشاركة', // For 3+ females

            // Payment Methods
            'bank_transfer_tr': 'تحويل بنكي (تركيا)',
            'cash_office_tr': 'دفع كاش في المكتب (تركيا)',
            'paypal_tr': 'باي بال (تركيا)',
            'paypal_eg': 'باي بال (مصر)',
            'instapay_eg': 'إنستا بي (مصر)',
            'vodafone_cash_eg': 'فودافون كاش (مصر)',
            'paypal_gcc': 'باي بال (دول الخليج)',
            'bank_transfer_gcc': 'تحويل بنكي (دول الخليج)',
            'revolut_eu_us_au': 'ريڤولت (أوروبا، أمريكا، أستراليا)',
            'paypal_eu_us_au': 'باي بال (أوروبا، أمريكا، أستراليا)',
            'bank_transfer_eu_us_au': 'تحويل بنكي (أوروبا، أمريكا، أستراليا)',

            // Terms & Conditions
            'terms_title': 'الشروط والأحكام',
            'terms_booking_policy_title': 'سياسة الحجز والإلغاء:',
            'terms_booking_policy_list': [
                'يجب أن يكون عمر المشارك بين 18 و 45 عاماً. لن يتم قبول أي حجز خارج هذه الفئة العمرية.',
                'يتم تأكيد الحجز بعد استلام الدفعة الكاملة.',
                'في حال الإلغاء قبل 30 يوماً من تاريخ بدء المخيم، يتم استرداد 75% من المبلغ المدفوع.',
                'في حال الإلغاء قبل 15-29 يوماً من تاريخ بدء المخيم، يتم استرداد 50% من المبلغ المدفوع.',
                'لا يتم استرداد أي مبلغ في حال الإلغاء قبل أقل من 15 يوماً من تاريخ بدء المخيم.',
                'يمكن نقل الحجز إلى شخص آخر (يستوفي شروط الفئة العمرية) قبل 7 أيام من تاريخ بدء المخيم برسوم إدارية قدرها 50 دولاراً.'
            ],
            'terms_health_safety_title': 'الصحة والسلامة:',
            'terms_health_safety_list': [
                'يجب على جميع المشاركين الإفصاح عن أي حالات صحية خاصة أو حساسية عند التسجيل.',
                'المخيم غير مسؤول عن الإصابات التي تحدث نتيجة الإهمال الشخصي أو عدم اتباع تعليمات السلامة.',
                'يتم توفير الإسعافات الأولية الأساسية في المخيم. في الحالات الطارئة، سيتم نقل المشارك إلى أقرب مستشفى.'
            ],
            'terms_conduct_title': 'السلوك وقواعد المخيم:',
            'terms_conduct_list': [
                'يجب على جميع المشاركين احترام بعضهم البعض وموظفي المخيم.',
                'يمنع منعاً باتاً جلب أو تعاطي المخدرات والكحول داخل المخيم.',
                'المخيم يحتفظ بالحق في طرد أي مشارك يخالف القواعد السلوكية أو يسبب إزعاجاً للمشاركين الآخرين، دون استرداد أي مبلغ.'
            ],
            'terms_activities_title': 'الأنشطة والمسؤولية:',
            'terms_activities_list': [
                'يتم تنظيم الأنشطة تحت إشراف مدربين مؤهلين.',
                'المشاركة في الأنشطة اختيارية، ولكن يُنصح بالمشاركة للاستفادة القصوى من التجربة.',
                'قد يتم تعديل أو إلغاء بعض الأنشطة بسبب ظروف الطقس أو لأسباب تتعلق بالسلامة.',
                'المخيم غير مسؤول عن فقدان أو تلف الممتلكات الشخصية للمشاركين. يُرجى الاعتناء بممتلكاتكم.'
            ],
            'terms_payment_title': 'الدفع:',
            'terms_payment_list': [
                'السعر يشمل جميع الأنشطة المذكورة، الإقامة، وجبات الطعام، والمشروبات.',
                'الدفع يتم بالدولار الأمريكي، وسيتم تحويله إلى العملة المحلية حسب سعر الصرف اليومي.',
                'تتوفر طرق دفع مختلفة حسب البلد (تحويل بنكي، PayPal، نقد في المكتب، InstaPay، Vodafone Cash، Revolut).'
            ],
            'terms_photo_video_title': 'التصوير الفوتوغرافي والفيديو:',
            'terms_photo_video_list': [
                'يتم التصوير الفوتوغرافي وتصوير الفيديو (بما في ذلك الدرون) خلال المخيم لأغراض الترويج.',
                'بالموافقة على هذه الشروط، يمنح المشارك "إيزي نوفا" الحق في استخدام الصور ومقاطع الفيديو التي يظهر فيها لأغراض التسويق والإعلان.'
            ],
            'agree_and_close': 'موافق وأغلق'
        },
        'en': {
            // Header
            'home': 'Home',
            'about': 'About Camp',
            'activities': 'Activities',
            'program': 'Program',
            'location': 'Location',
            'book_now': 'Book Now!',
            'current_lang_ar': 'Arabic', // Placeholder, will be replaced by actual lang
            'ar': 'Arabic',
            'en': 'English',
            'tr': 'Türkçe',

            // Hero Section
            'slogan1': 'Best Summer in Şile! Enjoy the Sea and Laughter.',
            'slogan2': 'An unforgettable adventure awaits you in the heart of nature.',
            'slogan3': 'Relaxation, fun, and countless memories!',
            'hero_desc': 'A unique recreational summer camp for youth (18-45 years old) on the charming shores of Şile in Istanbul. Join us for five nights and six days of fun, adventure, and making new friends!',
            'join_us': 'Join Us Now!',

            // About Section
            'about_title': 'About Our Summer Camp: Where Spirit and Laughter Renew',
            'about_text1': 'In the heart of charming Şile, where the blue sea meets the beauty of green nature, "Istanova" invites you to an exceptional summer experience. Our camp, specifically designed for the 18 to 45 age group, welcomes everyone – individuals, couples, friends, and groups!',
            'about_text2': 'Our goal is to provide you with a sanctuary from daily routine, where you can enjoy an atmosphere full of fun and rejuvenation. Think of nothing but how to enjoy every moment, leaving your worries behind.',
            'target_audience_title': 'Camp for Everyone',
            'target_audience_desc': 'For youth (18-45 years old) of both genders. We welcome couples, friends, and groups.',
            'duration_title': 'Trip Duration',
            'duration_desc': '5 nights and 6 days of fun and excitement.',
            'date_title': 'Trip Date',
            'date_desc': 'The adventure begins on July 15, 2025.',
            'price_title': 'All-Inclusive Price',
            'price_desc': '$500 per person, includes all activities, accommodation, meals, and delicious drinks (especially Turkish tea!).',
            'transport_title': 'Transportation',
            'transport_desc': 'Transportation to and from Istanbul, and all internal transfers are included.',
            'facilities_title': 'Complete Facilities',
            'facilities_desc': 'High-speed internet and electricity available throughout the camp.',
            'photography_title': 'Documenting Moments',
            'photography_desc': 'Professional photography and drone videography to immortalize your memories.',
            'forget_worries': 'Don\'t forget to bring your laughter and leave your worries at home! Our camp is your gateway to a world of absolute joy.',
            'packing_list': 'Don\'t forget to bring your sunglasses, hat, comfortable sports shoes for adventures, and swimwear ready to hit the Şile beach!',

            // Activities Section
            'activities_title': 'Our Recreational Activities: Every Day a New Adventure!',
            'activities_intro': 'At Istanova, boredom is not an option! We\'ve designed a program full of fun and exciting activities to ensure every moment you spend with us is filled with joy and excitement. Get ready for a unique experience!',
            'morning_activities': 'Energetic and invigorating morning activities.',
            'volleyball': 'Beach volleyball and football.',
            'rafting': 'River rafting adventure.',
            'safari_motors': 'Safari bike (ATV) trip.',
            'zipline': 'The thrill of ziplining.',
            'evening_activities': 'Unforgettable evening activities and BBQ parties.',
            'fireworks': 'Dazzling fireworks displays and celebrations.',
            'social_events': 'Socializing events and group activities to build new friendships.',
            'competitions': 'Exciting competitions and motivational games with valuable prizes and gifts.',

            // Program Section
            'program_title': 'Detailed Daily Program',
            'day1_title': 'Day 1: Arrival & Relaxation',
            'day1_desc': ['Participants arrive from Istanbul to the camp in Şile.', 'Check-in and accommodation distribution.', 'Welcome lunch.', 'Free time for relaxation and getting to know the place.', 'Socializing activities and light competitions.', 'Evening BBQ party and welcome celebration.'],
            'day2_title': 'Day 2: Water Adventures',
            'day2_desc': ['Morning breakfast.', 'Morning activities: beach volleyball and football.', 'Depart for a river rafting adventure.', 'Lunch by the river bank.', 'Return to camp, free time.', 'Evening activities and motivational competitions.'],
            'day3_title': 'Day 3: Thrills & Safari',
            'day3_desc': ['Morning breakfast.', 'Morning activities on the beach.', 'ATV safari trip in the surrounding areas.', 'Outdoor lunch.', 'Return to camp, free time.', 'Evening party and dazzling fireworks.'],
            'day4_title': 'Day 4: Soaring & Laughter',
            'day4_desc': ['Morning breakfast.', 'Exciting zipline adventure.', 'Free time for swimming and enjoying the sea.', 'Lunch.', 'Fun competitions and group activities.', 'Cultural and social evening.'],
            'day5_title': 'Day 5: Relaxation & Farewell',
            'day5_desc': ['Morning breakfast.', 'Free activities and beach relaxation.', 'Lunch.', 'Closing competitions and prize distribution.', 'Farewell party and recreational activities.', 'Free time for conversations and exchanging memories.'],
            'day6_title': 'Day 6: Departure',
            'day6_desc': ['Morning breakfast.', 'Check-out.', 'Participants transfer to Istanbul.', 'Return with unforgettable memories.'],

            // Location Section
            'location_title': 'Our Location: Şile, Istanbul\'s Hidden Gem',
            'location_desc1': 'Our camp is located in the charming Şile region, known for its breathtaking natural beauty and tranquil beaches directly on the Black Sea. It is the perfect destination to escape the hustle and bustle of the city and enjoy peace and beauty.',
            'location_desc2': '**Our Main Office Address:** Istanova, Istanbul, Fatih, Opposite Yusufpaşa Tram Stop, No. 42, Office No. 8.',

            // Footer
            'footer_rights': 'All rights reserved &copy; 2025 Istanova',
            'contact_us': 'Contact Us:',

            // Booking Page
            'booking_title': 'Booking & Payment Page',
            'num_participants_label': 'Number of Participants:',
            'relationship_type_label': 'Relationship:',
            'friends': 'Friends',
            'couple': 'Couple',
            'mobile_country_code_label': 'Country Code:',
            'phone_number_label': 'Phone Number:',
            'user_email_label': 'Email:',
            'total_price_label': 'Total Amount:',
            'discount_applied': 'Discount applied!',
            'payment_methods_title': 'Available Payment Methods',
            'agree_terms': 'I agree to the',
            'view_terms_link': 'Terms & Conditions',
            'confirm_booking': 'Confirm Booking',
            'participant_name_label': 'Participant Name',
            'participant_age_label': 'Participant Age',
            'participant_gender_label': 'Participant Gender',
            'participant_nationality_label': 'Participant Nationality',
            'male': 'Male',
            'female': 'Female',
            'participant_title': 'Participant',
            'couple_male_label': 'Husband',
            'couple_female_label': 'Wife',
            'participant_male_title': 'Participant', // For 3+ males
            'participant_female_title': 'Participant', // For 3+ females

            // Payment Methods
            'bank_transfer_tr': 'Bank Transfer (Turkey)',
            'cash_office_tr': 'Cash Payment at Office (Turkey)',
            'paypal_tr': 'PayPal (Turkey)',
            'paypal_eg': 'PayPal (Egypt)',
            'instapay_eg': 'InstaPay (Egypt)',
            'vodafone_cash_eg': 'Vodafone Cash (Egypt)',
            'paypal_gcc': 'PayPal (GCC Countries)',
            'bank_transfer_gcc': 'Bank Transfer (GCC Countries)',
            'revolut_eu_us_au': 'Revolut (Europe, America, Australia)',
            'paypal_eu_us_au': 'PayPal (Europe, America, Australia)',
            'bank_transfer_eu_us_au': 'Bank Transfer (Europe, America, Australia)',

            // Terms & Conditions
            'terms_title': 'Terms & Conditions',
            'terms_booking_policy_title': 'Booking & Cancellation Policy:',
            'terms_booking_policy_list': [
                'Participant age must be between 18 and 45 years old. No bookings outside this age group will be accepted.',
                'Booking is confirmed upon receipt of full payment.',
                'If cancelled 30 days or more before the camp start date, 75% of the paid amount will be refunded.',
                'If cancelled 15-29 days before the camp start date, 50% of the paid amount will be refunded.',
                'No refund will be issued if cancelled less than 15 days before the camp start date.',
                'Bookings can be transferred to another person (meeting age requirements) 7 days prior to the camp start date for an administrative fee of $50.'
            ],
            'terms_health_safety_title': 'Health & Safety:',
            'terms_health_safety_list': [
                'All participants must disclose any special health conditions or allergies upon registration.',
                'The camp is not responsible for injuries occurring due to personal negligence or failure to follow safety instructions.',
                'Basic first aid is provided at the camp. In emergencies, the participant will be transported to the nearest hospital.'
            ],
            'terms_conduct_title': 'Conduct & Camp Rules:',
            'terms_conduct_list': [
                'All participants must respect each other and camp staff.',
                'Bringing or consuming drugs and alcohol within the camp is strictly prohibited.',
                'The camp reserves the right to expel any participant who violates behavioral rules or causes disturbance to other participants, without any refund.'
            ],
            'terms_activities_title': 'Activities & Responsibility:',
            'terms_activities_list': [
                'Activities are organized under the supervision of qualified instructors.',
                'Participation in activities is optional, but it is recommended to participate to get the most out of the experience.',
                'Some activities may be modified or canceled due to weather conditions or safety reasons.',
                'The camp is not responsible for the loss or damage of participants\' personal belongings. Please take care of your belongings.'
            ],
            'terms_payment_title': 'Payment:',
            'terms_payment_list': [
                'The price includes all mentioned activities, accommodation, meals, and drinks.',
                'Payment is in USD, and will be converted to local currency based on the daily exchange rate.',
                'Various payment methods are available depending on the country (Bank Transfer, PayPal, Cash at Office, InstaPay, Vodafone Cash, Revolut).'
            ],
            'terms_photo_video_title': 'Photography & Videography:',
            'terms_photo_video_list': [
                'Photography and videography (including drone) will be conducted during the camp for promotional purposes.',
                'By agreeing to these terms, the participant grants "Istanova" the right to use their images and videos for marketing and advertising purposes.'
            ],
            'agree_and_close': 'Agree & Close'
        },
        'tr': {
            // Header
            'home': 'Ana Sayfa',
            'about': 'Kamp Hakkında',
            'activities': 'Etkinlikler',
            'program': 'Program',
            'location': 'Konum',
            'book_now': 'Hemen Rezervasyon Yap!',
            'current_lang_ar': 'Arapça', // Placeholder, will be replaced by actual lang
            'ar': 'Arapça',
            'en': 'English',
            'tr': 'Türkçe',

            // Hero Section
            'slogan1': 'Şile\'de En Güzel Yaz! Denizin ve Kahkahaların Tadını Çıkarın.',
            'slogan2': 'Doğanın kalbinde unutulmaz bir macera sizi bekliyor.',
            'slogan3': 'Dinlenme, eğlence ve sayısız anı!',
            'hero_desc': 'İstanbul\'un büyüleyici Şile sahillerinde, 18-45 yaş arası gençlere özel eşsiz bir eğlence yaz kampı. Beş gece altı gün sürecek eğlence, macera ve yeni arkadaşlıklar için bize katılın!',
            'join_us': 'Şimdi Katılın!',

            // About Section
            'about_title': 'Yaz Kampımız Hakkında: Ruhun ve Kahkahaların Yenilendiği Yer',
            'about_text1': 'Mavi denizin yeşil doğanın güzelliğiyle buluştuğu büyüleyici Şile\'nin kalbinde, "Istanova" sizi olağanüstü bir yaz deneyimine davet ediyor. 18 ila 45 yaş arası hedef kitlemiz için özel olarak tasarlanmış kampımız herkese açık – bireyler, çiftler, arkadaşlar ve gruplar!',
            'about_text2': 'Amacımız size günlük rutinden bir sığınak sunmaktır; burada eğlence ve yenilenme dolu bir atmosferin tadını çıkarabilir, endişelerinizi geride bırakarak her anın tadını çıkarmayı düşünebilirsiniz.',
            'target_audience_title': 'Herkes İçin Kamp',
            'target_audience_desc': '18-45 yaş arası her iki cinsiyetten gençlere. Çiftler, arkadaşlar ve gruplar hoş geldiniz.',
            'duration_title': 'Seyahat Süresi',
            'duration_desc': '5 gece 6 gün eğlence ve heyecan.',
            'date_title': 'Seyahat Tarihi',
            'date_desc': 'Macera 15 Temmuz 2025\'te başlıyor.',
            'price_title': 'Her Şey Dahil Fiyat',
            'price_desc': 'Kişi başı 500 dolar, tüm aktiviteler, konaklama, yemekler ve lezzetli içecekler (özellikle Türk çayı!) dahildir.',
            'transport_title': 'Ulaşım',
            'transport_desc': 'İstanbul\'dan kampa ve kamp içi tüm transferler dahildir.',
            'facilities_title': 'Eksiksiz Tesisler',
            'facilities_desc': 'Kamp boyunca yüksek hızlı internet ve elektrik mevcuttur.',
            'photography_title': 'Anları Belgeleme',
            'photography_desc': 'Anılarınızı ölümsüzleştirmek için profesyonel fotoğrafçılık ve drone çekimi.',
            'forget_worries': 'Kahkahalarınızı getirmeyi ve endişelerinizi evde bırakmayı unutmayın! Kampımız, mutlak neşe dolu bir dünyaya açılan kapınızdır.',
            'packing_list': 'Güneş gözlüklerinizi, şapka, maceralar için rahat spor ayakkabılarınızı ve Şile plajına çıkmaya hazır mayolarınızı getirmeyi unutmayın!',

            // Activities Section
            'activities_title': 'Eğlence Aktivitelerimiz: Her Gün Yeni Bir Macera!',
            'activities_intro': 'Istanova\'da can sıkıntısı bir seçenek değildir! Bizimle geçireceğiniz her anın neşe ve heyecan dolu olmasını sağlamak için eğlenceli ve heyecan verici aktivitelerle dolu bir program tasarladık. Eşsiz bir deneyime hazır olun!',
            'morning_activities': 'Enerji dolu ve canlandırıcı sabah aktiviteleri.',
            'volleyball': 'Plaj voleybolu ve futbol.',
            'rafting': 'Nehirde rafting macerası.',
            'safari_motors': 'Safari motoru (ATV) gezisi.',
            'zipline': 'Zipline heyecanı.',
            'evening_activities': 'Unutulmaz akşam aktiviteleri ve barbekü partileri.',
            'fireworks': 'Göz kamaştırıcı havai fişek gösterileri ve kutlamalar.',
            'social_events': 'Yeni arkadaşlıklar kurmak için sosyalleşme etkinlikleri ve grup aktiviteleri.',
            'competitions': 'Değerli ödüller ve hediyelerle heyecan verici yarışmalar ve motivasyon oyunları.',

            // Program Section
            'program_title': 'Detaylı Günlük Program',
            'day1_title': 'Gün 1: Varış ve Dinlenme',
            'day1_desc': ['Katılımcıların İstanbul\'dan Şile\'deki kampa varışı.', 'Giriş ve konaklama dağıtımı.', 'Karşılama öğle yemeği.', 'Dinlenme ve yeri tanıma için serbest zaman.', 'Sosyalleşme aktiviteleri ve hafif yarışmalar.', 'Akşam barbekü partisi ve karşılama kutlaması.'],
            'day2_title': 'Gün 2: Su Maceraları',
            'day2_desc': ['Sabah kahvaltısı.', 'Sabah aktiviteleri: plaj voleybolu ve futbol.', 'Nehirde rafting macerasına çıkış.', 'Nehir kenarında öğle yemeği.', 'Kampa dönüş, serbest zaman.', 'Akşam aktiviteleri ve motivasyon yarışmaları.'],
            'day3_title': 'Gün 3: Heyecan ve Safari',
            'day3_desc': ['Sabah kahvaltısı.', 'Plajda sabah aktiviteleri.', 'Çevredeki alanlarda ATV safari gezisi.', 'Açık havada öğle yemeği.', 'Kampa dönüş, serbest zaman.', 'Akşam partisi ve göz kamaştırıcı havai fişekler.'],
            'day4_title': 'Gün 4: Yüksekten Uçuş ve Kahkahalar',
            'day4_desc': ['Sabah kahvaltısı.', 'Heyecan verici zipline macerası.', 'Yüzme ve denizin tadını çıkarma için serbest zaman.', 'Öğle yemeği.', 'Eğlenceli yarışmalar ve grup aktiviteleri.', 'Kültürel ve sosyal akşam.'],
            'day5_title': 'Gün 5: Dinlenme ve Veda',
            'day5_desc': ['Sabah kahvaltısı.', 'Serbest aktiviteler ve plajda dinlenme.', 'Öğle yemeği.', 'Kapanış yarışmaları ve ödül dağıtımı.', 'Veda partisi ve eğlence aktiviteleri.', 'Sohbet ve anı alışverişi için serbest zaman.'],
            'day6_title': 'Gün 6: Ayrılış',
            'day6_desc': ['Sabah kahvaltısı.', 'Çıkış işlemleri.', 'Katılımcıların İstanbul\'a transferi.', 'Unutulmaz anılarla dönüş.'],

            // Location Section
            'location_title': 'Konumumuz: Şile, İstanbul\'un Gizli Mücevheri',
            'location_desc1': 'Kampımız, doğrudan Karadeniz kıyısında yer alan büyüleyici doğal güzellikleri ve sakin plajlarıyla bilinen Şile bölgesinde bulunmaktadır. Şehrin gürültüsünden kaçmak ve huzurun tadını çıkarmak için mükemmel bir destinasyondur.',
            'location_desc2': '**Ana Ofis Adresimiz:** Istanova, İstanbul, Fatih, Yusufpaşa Tramvay Durağı Karşısı, No: 42, Ofis No: 8.',

            // Footer
            'footer_rights': 'Tüm Hakları Saklıdır &copy; 2025 Istanova',
            'contact_us': 'Bize Ulaşın:',

            // Booking Page
            'booking_title': 'Rezervasyon ve Ödeme Sayfası',
            'num_participants_label': 'Katılımcı Sayısı:',
            'relationship_type_label': 'İlişki Türü:',
            'friends': 'Arkadaşlar',
            'couple': 'Çift',
            'mobile_country_code_label': 'Ülke Kodu:',
            'phone_number_label': 'Telefon Numarası:',
            'user_email_label': 'E-posta:',
            'total_price_label': 'Toplam Tutar:',
            'discount_applied': 'İndirim uygulandı!',
            'payment_methods_title': 'Mevcut Ödeme Yöntemleri',
            'agree_terms': 'Şartlar ve Koşulları kabul ediyorum',
            'view_terms_link': 'Şartlar ve Koşulları Görüntüle',
            'confirm_booking': 'Rezervasyonu Onayla',
            'participant_name_label': 'Katılımcı Adı',
            'participant_age_label': 'Katılımcı Yaşı',
            'participant_gender_label': 'Katılımcı Cinsiyeti',
            'participant_nationality_label': 'Katılımcı Uyruğu',
            'male': 'Erkek',
            'female': 'Kadın',
            'participant_title': 'Katılımcı',
            'couple_male_label': 'Eş (Erkek)',
            'couple_female_label': 'Eş (Kadın)',
            'participant_male_title': 'Katılımcı', // For 3+ males
            'participant_female_title': 'Katılımcı', // For 3+ females

            // Payment Methods
            'bank_transfer_tr': 'Banka Havalesi (Türkiye)',
            'cash_office_tr': 'Ofiste Nakit Ödeme (Türkiye)',
            'paypal_tr': 'PayPal (Türkiye)',
            'paypal_eg': 'PayPal (Mısır)',
            'instapay_eg': 'InstaPay (Mısır)',
            'vodafone_cash_eg': 'Vodafone Cash (Mısır)',
            'paypal_gcc': 'PayPal (Körfez Ülkeleri)',
            'bank_transfer_gcc': 'Banka Havalesi (Körfez Ülkeleri)',
            'revolut_eu_us_au': 'Revolut (Avrupa, Amerika, Avustralya)',
            'paypal_eu_us_au': 'PayPal (Avrupa, Amerika, Avustralya)',
            'bank_transfer_eu_us_au': 'Banka Havalesi (Avrupa, Amerika, Avustralya)',

            // Terms & Conditions
            'terms_title': 'Şartlar ve Koşullar',
            'terms_booking_policy_title': 'Rezervasyon ve İptal Politikası:',
            'terms_booking_policy_list': [
                'Katılımcının yaşı 18 ile 45 arasında olmalıdır. Bu yaş aralığı dışındaki hiçbir rezervasyon kabul edilmeyecektir.',
                'Rezervasyon, tam ödeme alındıktan sonra onaylanır.',
                'Kamp başlangıç tarihinden 30 gün veya daha önce iptal durumunda, ödenen tutarın %75\'i iade edilir.',
                'Kamp başlangıç tarihinden 15-29 gün önce iptal durumunda, ödenen tutarın %50\'si iade edilir.',
                'Kamp başlangıç tarihinden 15 günden az süre kala iptal durumunda herhangi bir iade yapılmaz.',
                'Rezervasyonlar, kamp başlangıç tarihinden 7 gün önce 50 dolarlık bir idari ücret karşılığında başka bir kişiye (yaş şartlarını karşılayan) devredilebilir.'
            ],
            'terms_health_safety_title': 'Sağlık ve Güvenlik:',
            'terms_health_safety_list': [
                'Tüm katılımcılar kayıt sırasında herhangi bir özel sağlık durumu veya alerjiyi bildirmelidir.',
                'Kamp, kişisel ihmal veya güvenlik talimatlarına uyulmamasından kaynaklanan yaralanmalardan sorumlu değildir.',
                'Kampta temel ilk yardım sağlanır. Acil durumlarda katılımcı en yakın hastaneye nakledilecektir.'
            ],
            'terms_conduct_title': 'Davranış ve Kamp Kuralları:',
            'terms_conduct_list': [
                'Tüm katılımcılar birbirlerine ve kamp personeline saygı göstermelidir.',
                'Kamp içinde uyuşturucu ve alkol getirilmesi veya tüketilmesi kesinlikle yasaktır.',
                'Kamp, davranış kurallarını ihlal eden veya diğer katılımcılara rahatsızlık veren herhangi bir katılımcıyı, herhangi bir geri ödeme yapmadan kamptan çıkarma hakkını saklı tutar.'
            ],
            'terms_activities_title': 'Etkinlikler ve Sorumluluk:',
            'terms_activities_list': [
                'Etkinlikler, nitelikli eğitmenler gözetiminde düzenlenir.',
                'Etkinliklere katılım isteğe bağlıdır, ancak deneyimden en iyi şekilde yararlanmak için katılım önerilir.',
                'Bazı aktiviteler hava koşulları veya güvenlik nedenleriyle değiştirilebilir veya iptal edilebilir.',
                'Kamp, katılımcıların kişisel eşyalarının kaybolması veya hasar görmesinden sorumlu değildir. Lütfen eşyalarınıza dikkat edin.'
            ],
            'terms_payment_title': 'Ödeme:',
            'terms_payment_list': [
                'Fiyat, belirtilen tüm aktiviteleri, konaklamayı, yemekleri ve içecekleri içerir.',
                'Ödeme USD cinsinden yapılır ve günlük döviz kuruna göre yerel para birimine çevrilir.',
                'Ülkeye göre farklı ödeme yöntemleri mevcuttur (Banka Havalesi, PayPal, Ofiste Nakit, InstaPay, Vodafone Cash, Revolut).'
            ],
            'terms_photo_video_title': 'Fotoğraf ve Video Çekimi:',
            'terms_photo_video_list': [
                'Kamp sırasında tanıtım amaçlı fotoğraf ve video (drone dahil) çekimi yapılacaktır.',
                'Bu şartları kabul ederek, katılımcı "Istanova"ya görsellerini ve videolarını pazarlama ve reklam amaçlı kullanma hakkı tanır.'
            ],
            'agree_and_close': 'Kabul Et ve Kapat'
        }
    };

    let currentLang = 'ar'; // Default language

    // Function to apply language texts
    function applyLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
        document.body.classList.toggle('ltr', lang !== 'ar');
        document.body.classList.toggle('rtl', lang === 'ar');

        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.dataset.langKey;
            let text = langData[lang][key];

            if (Array.isArray(text)) {
                // For lists, reconstruct the UL
                const parentUl = element; // The <ul> element itself
                parentUl.innerHTML = ''; // Clear existing list items
                text.forEach(itemText => {
                    const li = document.createElement('li');
                    li.textContent = itemText;
                    parentUl.appendChild(li);
                });
            } else if (element.tagName === 'P' && text.includes('**')) {
                // For bold text within paragraphs
                element.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            } else {
                element.textContent = text;
            }
        });

        // Update current language button text
        const currentLangBtn = document.querySelector('.current-lang-btn');
        if (currentLangBtn) {
            if (lang === 'ar') {
                currentLangBtn.textContent = 'العربية';
                currentLangBtn.dataset.langKey = 'current_lang_ar';
            } else if (lang === 'en') {
                currentLangBtn.textContent = 'English';
                currentLangBtn.dataset.langKey = 'current_lang_en';
            } else if (lang === 'tr') {
                currentLangBtn.textContent = 'Türkçe';
                currentLangBtn.dataset.langKey = 'current_lang_tr';
            }
        }
    }

    // Language switcher logic
    const langSwitcher = document.querySelector('.language-switcher');
    const currentLangBtn = document.querySelector('.current-lang-btn');
    const langOptions = document.querySelector('.lang-options');

    if (langSwitcher) {
        currentLangBtn.addEventListener('click', () => {
            langSwitcher.classList.toggle('open');
        });

        langOptions.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', (event) => {
                const selectedLang = event.target.dataset.lang;
                localStorage.setItem('preferredLang', selectedLang); // Save preference
                applyLanguage(selectedLang);
                langSwitcher.classList.remove('open');
            });
        });

        // Close dropdown if clicked outside
        document.addEventListener('click', (event) => {
            if (langSwitcher && !langSwitcher.contains(event.target)) {
                langSwitcher.classList.remove('open');
            }
        });
    }

    // Automatic language detection by IP
    async function detectAndSetLanguage() {
        const preferredLang = localStorage.getItem('preferredLang');
        if (preferredLang) {
            applyLanguage(preferredLang);
            return;
        }

        try {
            const response = await fetch('https://ipinfo.io/json?token=YOUR_IPINFO_TOKEN'); // Replace with your ipinfo.io token
            const data = await response.json();
            const countryCode = data.country;
            let detectedLang = 'en'; // Default to English if not detected

            if (countryCode === 'TR') {
                detectedLang = 'tr';
            } else if (countryCode === 'SA' || countryCode === 'AE' || countryCode === 'KW' || countryCode === 'QA' || countryCode === 'BH' || countryCode === 'OM' || countryCode === 'EG' || countryCode === 'JO') {
                // Some Arab countries
                detectedLang = 'ar';
            } else if (navigator.language.startsWith('ar')) {
                detectedLang = 'ar';
            } else if (navigator.language.startsWith('tr')) {
                detectedLang = 'tr';
            }

            applyLanguage(detectedLang);
        } catch (error) {
            console.error('Error detecting language:', error);
            applyLanguage('ar'); // Fallback to Arabic if detection fails
        }
    }

    // Slogan rotator for hero section
    const slogans = document.querySelectorAll('.slogan');
    let currentSloganIndex = 0;

    function rotateSlogans() {
        if (slogans.length === 0) return;

        slogans.forEach((slogan, index) => {
            slogan.classList.remove('active', 'hidden');
            if (index === currentSloganIndex) {
                slogan.classList.add('active');
            } else {
                slogan.classList.add('hidden');
            }
        });

        currentSloganIndex = (currentSloganIndex + 1) % slogans.length;
    }

    if (slogans.length > 0) {
        rotateSlogans(); // Show the first slogan immediately
        setInterval(rotateSlogans, 5000); // Change slogan every 5 seconds
    }


    // Booking Page Logic (only if on booking.html)
    if (document.getElementById('bookingForm')) {
        const numParticipantsSelect = document.getElementById('num_participants');
        const participantDetailsContainer = document.getElementById('participant_details_container');
        const relationshipGroup = document.getElementById('relationship_group');
        const relationshipTypeSelect = document.getElementById('relationship_type');
        const totalPriceUsdSpan = document.getElementById('total_price_usd');
        const totalPriceLocalSpan = document.getElementById('total_price_local');
        const localCurrencySymbolSpan = document.getElementById('local_currency_symbol');
        const discountMessage = document.getElementById('discount_message');
        const paymentMethodsContainer = document.getElementById('payment_methods_container');
        const countryCodeSelect = document.getElementById('country_code');
        const bookingForm = document.getElementById('bookingForm');
        const viewTermsLink = document.getElementById('view_terms_link');
        const termsAgreeCheckbox = document.getElementById('terms_agree');

        const BASE_PRICE_PER_PERSON = 500; // USD
        let currentExchangeRate = 1; // Default 1 (USD)
        let localCurrencyCode = 'USD';
        let userCountry = 'US'; // Default

        const countries = [
            { code: 'US', name_ar: 'الولايات المتحدة', name_en: 'United States', name_tr: 'Amerika Birleşik Devletleri', currency: 'USD', phone_code: '+1' },
            { code: 'CA', name_ar: 'كندا', name_en: 'Canada', name_tr: 'Kanada', currency: 'CAD', phone_code: '+1' },
            { code: 'GB', name_ar: 'المملكة المتحدة', name_en: 'United Kingdom', name_tr: 'Birleşik Krallık', currency: 'GBP', phone_code: '+44' },
            { code: 'DE', name_ar: 'ألمانيا', name_en: 'Germany', name_tr: 'Almanya', currency: 'EUR', phone_code: '+49' },
            { code: 'FR', name_ar: 'فرنسا', name_en: 'France', name_tr: 'Fransa', currency: 'EUR', phone_code: '+33' },
            { code: 'AU', name_ar: 'أستراليا', name_en: 'Australia', name_tr: 'Avustralya', currency: 'AUD', phone_code: '+61' },
            { code: 'TR', name_ar: 'تركيا', name_en: 'Turkey', name_tr: 'Türkiye', currency: 'TRY', phone_code: '+90' },
            { code: 'EG', name_ar: 'مصر', name_en: 'Egypt', name_tr: 'Mısır', currency: 'EGP', phone_code: '+20' },
            { code: 'SA', name_ar: 'السعودية', name_en: 'Saudi Arabia', name_tr: 'Suudi Arabistan', currency: 'SAR', phone_code: '+966' },
            { code: 'AE', name_ar: 'الإمارات', name_en: 'United Arab Emirates', name_tr: 'Birleşik Arap Emirlikleri', currency: 'AED', phone_code: '+971' },
            { code: 'JO', name_ar: 'الأردن', name_en: 'Jordan', name_tr: 'Ürdün', currency: 'JOD', phone_code: '+962' },
            { code: 'KW', name_ar: 'الكويت', name_en: 'Kuwait', name_tr: 'Kuveyt', currency: 'KWD', phone_code: '+965' },
            { code: 'QA', name_ar: 'قطر', name_en: 'Qatar', name_tr: 'Katar', currency: 'QAR', phone_code: '+974' },
            { code: 'BH', name_ar: 'البحرين', name_en: 'Bahrain', name_tr: 'Bahreyn', currency: 'BHD', phone_code: '+973' },
            { code: 'OM', name_ar: 'عمان', name_en: 'Oman', name_tr: 'Umman', currency: 'OMR', phone_code: '+968' },
            { code: 'LB', name_ar: 'لبنان', name_en: 'Lebanon', name_tr: 'Lübnan', currency: 'LBP', phone_code: '+961' },
            { code: 'IQ', name_ar: 'العراق', name_en: 'Iraq', name_tr: 'Irak', currency: 'IQD', phone_code: '+964' },
            { code: 'SY', name_ar: 'سوريا', name_en: 'Syria', name_tr: 'Suriye', currency: 'SYP', phone_code: '+963' },
            { code: 'YE', name_ar: 'اليمن', name_en: 'Yemen', name_tr: 'Yemen', currency: 'YER', phone_code: '+967' },
            { code: 'DZ', name_ar: 'الجزائر', name_en: 'Algeria', name_tr: 'Cezayir', currency: 'DZD', phone_code: '+213' },
            { code: 'MA', name_ar: 'المغرب', name_en: 'Morocco', name_tr: 'Fas', currency: 'MAD', phone_code: '+212' },
            { code: 'TN', name_ar: 'تونس', name_en: 'Tunisia', name_tr: 'Tunus', currency: 'TND', phone_code: '+216' },
            { code: 'SD', name_ar: 'السودان', name_en: 'Sudan', name_tr: 'Sudan', currency: 'SDG', phone_code: '+249' },
            { code: 'LY', name_ar: 'ليبيا', name_en: 'Libya', name_tr: 'Libya', currency: 'LYD', phone_code: '+218' },
            { code: 'SO', name_ar: 'الصومال', name_en: 'Somalia', name_tr: 'Somali', currency: 'SOS', phone_code: '+252' },
            { code: 'MR', name_ar: 'موريتانيا', name_en: 'Mauritania', name_tr: 'Moritanya', currency: 'MRU', phone_code: '+222' },
            { code: 'DJ', name_ar: 'جيبوتي', name_en: 'Djibouti', name_tr: 'Cibuti', currency: 'DJF', phone_code: '+253' },
            { code: 'KM', name_ar: 'جزر القمر', name_en: 'Comoros', name_tr: 'Komorlar', currency: 'KMF', phone_code: '+269' },
            { code: 'PS', name_ar: 'فلسطين', name_en: 'Palestine', name_tr: 'Filistin', currency: 'ILS', phone_code: '+970' },
            // Add more countries as needed
        ];

        function populateCountryCodes() {
            countryCodeSelect.innerHTML = '';
            countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country.phone_code;
                option.setAttribute('data-country-code', country.code); // Store country code
                option.textContent = `${country.phone_code} (${country[`name_${currentLang}`]})`;
                option.style.backgroundImage = `url(https://flagcdn.com/w20/${country.code.toLowerCase()}.png)`; // Flag
                option.style.backgroundRepeat = 'no-repeat';
                option.style.backgroundPosition = (currentLang === 'ar') ? 'left 5px center' : 'right 5px center';
                option.style.padding = '5px 10px 5px 30px'; // Adjust padding for flag
                option.style.backgroundSize = '20px 15px';
                countryCodeSelect.appendChild(option);
            });
        }

        function populateNationalities(selectElement) {
            selectElement.innerHTML = '';
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = langData[currentLang]['select_nationality'] || 'اختر الجنسية';
            defaultOption.disabled = true;
            defaultOption.selected = true;
            selectElement.appendChild(defaultOption);

            countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country.code;
                option.textContent = country[`name_${currentLang}`];
                selectElement.appendChild(option);
            });
        }


        async function getExchangeRate(baseCurrency, targetCurrency) {
            if (baseCurrency === targetCurrency) return 1;
            try {
                // Using Freecurrencyapi for free, limited API key.
                // For production, consider a more robust service.
                const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_key_YOUR_API_KEY&base_currency=${baseCurrency}&currencies=${targetCurrency}`);
                const data = await response.json();
                if (data && data.data && data.data[targetCurrency]) {
                    return data.data[targetCurrency];
                }
                throw new Error('Exchange rate not found');
            } catch (error) {
                console.error('Error fetching exchange rate from Freecurrencyapi:', error);
                // Fallback to a simple, less accurate rate if API fails
                if (targetCurrency === 'TRY') return 32; // Example for TRY if API fails
                if (targetCurrency === 'EGP') return 47; // Example for EGP if API fails
                // More fallbacks for other currencies could be added
                return 1; // Default to 1 if no specific fallback
            }
        }

        async function determineUserLocationAndCurrency() {
            try {
                const response = await fetch('https://ipinfo.io/json?token=YOUR_IPINFO_TOKEN'); // Replace with your ipinfo.io token
                const data = await response.json();
                userCountry = data.country;
                const detectedCurrency = countries.find(c => c.code === userCountry)?.currency || 'USD';
                localCurrencyCode = detectedCurrency;

                // Set phone code dropdown based on detected country
                const detectedPhoneCode = countries.find(c => c.code === userCountry)?.phone_code;
                if (detectedPhoneCode) {
                    countryCodeSelect.value = detectedPhoneCode;
                }

                currentExchangeRate = await getExchangeRate('USD', localCurrencyCode);
                updateTotalPrice();
                renderPaymentMethods();
            } catch (error) {
                console.error('Error determining user location or currency:', error);
                // Fallback if IP detection fails
                userCountry = 'TR'; // Default to Turkey
                localCurrencyCode = 'TRY';
                countryCodeSelect.value = '+90';
                currentExchangeRate = await getExchangeRate('USD', 'TRY'); // Get TRY rate
                updateTotalPrice();
                renderPaymentMethods();
            }
        }


        function generateParticipantInputs(num) {
            participantDetailsContainer.innerHTML = '';
            relationshipGroup.style.display = 'none';
            discountMessage.style.display = 'none';

            if (num === 2) {
                relationshipGroup.style.display = 'block';
                const relationshipType = relationshipTypeSelect.value;
                if (relationshipType === 'couple') {
                    discountMessage.textContent = langData[currentLang]['discount_applied'];
                    discountMessage.style.display = 'block';
                }
                // Generate inputs for two participants
                for (let i = 0; i < num; i++) {
                    const participantDiv = document.createElement('div');
                    participantDiv.classList.add('participant-group');
                    let nameLabel = '';
                    let genderValue = '';

                    if (relationshipType === 'couple') {
                        nameLabel = (i === 0) ? langData[currentLang]['couple_male_label'] : langData[currentLang]['couple_female_label'];
                        genderValue = (i === 0) ? 'male' : 'female';
                    } else { // friends
                        nameLabel = `${langData[currentLang]['participant_title']} ${i + 1} (${langData[currentLang]['friends']})`;
                    }

                    participantDiv.innerHTML = `
                        <h4 data-lang-key="${nameLabel.includes('المشارك') ? 'participant_title' : (i===0 ? 'couple_male_label' : 'couple_female_label')}">${nameLabel}</h4>
                        <div class="form-group">
                            <label for="participant_name_${i + 1}" data-lang-key="participant_name_label">${langData[currentLang]['participant_name_label']}:</label>
                            <input type="text" id="participant_name_${i + 1}" name="participant_name_${i + 1}" required>
                        </div>
                        <div class="form-group">
                            <label for="participant_age_${i + 1}" data-lang-key="participant_age_label">${langData[currentLang]['participant_age_label']}:</label>
                            <input type="number" id="participant_age_${i + 1}" name="participant_age_${i + 1}" min="18" max="45" required>
                        </div>
                        <div class="form-group">
                            <label for="participant_gender_${i + 1}" data-lang-key="participant_gender_label">${langData[currentLang]['participant_gender_label']}:</label>
                            <select id="participant_gender_${i + 1}" name="participant_gender_${i + 1}" ${relationshipType === 'couple' ? 'disabled' : ''}>
                                <option value="male" ${genderValue === 'male' ? 'selected' : ''} data-lang-key="male">${langData[currentLang]['male']}</option>
                                <option value="female" ${genderValue === 'female' ? 'selected' : ''} data-lang-key="female">${langData[currentLang]['female']}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="participant_nationality_${i + 1}" data-lang-key="participant_nationality_label">${langData[currentLang]['participant_nationality_label']}:</label>
                            <select id="participant_nationality_${i + 1}" name="participant_nationality_${i + 1}" required></select>
                        </div>
                    `;
                    participantDetailsContainer.appendChild(participantDiv);
                    populateNationalities(document.getElementById(`participant_nationality_${i + 1}`));
                }

            } else { // 1 or 3+ participants
                if (num >= 3) {
                    discountMessage.textContent = langData[currentLang]['discount_applied'];
                    discountMessage.style.display = 'block';
                }
                for (let i = 0; i < num; i++) {
                    const participantDiv = document.createElement('div');
                    participantDiv.classList.add('participant-group');
                    participantDiv.innerHTML = `
                        <h4 data-lang-key="participant_title">${langData[currentLang]['participant_title']} ${i + 1}</h4>
                        <div class="form-group">
                            <label for="participant_name_${i + 1}" data-lang-key="participant_name_label">${langData[currentLang]['participant_name_label']}:</label>
                            <input type="text" id="participant_name_${i + 1}" name="participant_name_${i + 1}" required>
                        </div>
                        <div class="form-group">
                            <label for="participant_age_${i + 1}" data-lang-key="participant_age_label">${langData[currentLang]['participant_age_label']}:</label>
                            <input type="number" id="participant_age_${i + 1}" name="participant_age_${i + 1}" min="18" max="45" required>
                        </div>
                        <div class="form-group">
                            <label for="participant_gender_${i + 1}" data-lang-key="participant_gender_label">${langData[currentLang]['participant_gender_label']}:</label>
                            <select id="participant_gender_${i + 1}" name="participant_gender_${i + 1}">
                                <option value="male" data-lang-key="male">${langData[currentLang]['male']}</option>
                                <option value="female" data-lang-key="female">${langData[currentLang]['female']}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="participant_nationality_${i + 1}" data-lang-key="participant_nationality_label">${langData[currentLang]['participant_nationality_label']}:</label>
                            <select id="participant_nationality_${i + 1}" name="participant_nationality_${i + 1}" required></select>
                        </div>
                    `;
                    participantDetailsContainer.appendChild(participantDiv);
                    populateNationalities(document.getElementById(`participant_nationality_${i + 1}`));

                    // Update gender labels based on selection for 3+
                    const genderSelect = document.getElementById(`participant_gender_${i + 1}`);
                    const participantTitleElement = participantDiv.querySelector('h4');
                    genderSelect.addEventListener('change', () => {
                        if (genderSelect.value === 'male') {
                            participantTitleElement.textContent = `${langData[currentLang]['participant_male_title']} ${i + 1}`;
                        } else {
                            participantTitleElement.textContent = `${langData[currentLang]['participant_female_title']} ${i + 1}`;
                        }
                    });
                }
            }
            updateTotalPrice();
        }

        function updateTotalPrice() {
            const numParticipants = parseInt(numParticipantsSelect.value);
            let totalPriceUSD = numParticipants * BASE_PRICE_PER_PERSON;
            let discountPercentage = 0;

            if (numParticipants === 2 && relationshipTypeSelect.value === 'couple') {
                discountPercentage = 0.10; // 10% for couples
            } else if (numParticipants >= 3) {
                discountPercentage = 0.10; // 10% for groups of 3+
            } else if (numParticipants === 2 && relationshipTypeSelect.value === 'friends') {
                discountPercentage = 0.05; // 5% for friends (2 people)
            }

            if (discountPercentage > 0) {
                totalPriceUSD -= totalPriceUSD * discountPercentage;
                discountMessage.textContent = langData[currentLang]['discount_applied'];
                discountMessage.style.display = 'block';
            } else {
                discountMessage.style.display = 'none';
            }

            const totalPriceLocal = totalPriceUSD * currentExchangeRate;

            totalPriceUsdSpan.textContent = `${totalPriceUSD.toFixed(2)} USD`;
            totalPriceLocalSpan.textContent = totalPriceLocal.toFixed(2);
            localCurrencySymbolSpan.textContent = localCurrencyCode;
        }

        function renderPaymentMethods() {
            paymentMethodsContainer.innerHTML = ''; // Clear previous methods
            let methods = [];

            if (userCountry === 'TR') {
                methods = [
                    { name: langData[currentLang]['bank_transfer_tr'], icon: 'fas fa-bank', id: 'bank_transfer_tr' },
                    { name: langData[currentLang]['cash_office_tr'], icon: 'fas fa-money-bill-wave', id: 'cash_office_tr' },
                    { name: langData[currentLang]['paypal_tr'], icon: 'fab fa-paypal', id: 'paypal_tr' }
                ];
            } else if (userCountry === 'EG') {
                methods = [
                    { name: langData[currentLang]['paypal_eg'], icon: 'fab fa-paypal', id: 'paypal_eg' },
                    { name: langData[currentLang]['instapay_eg'], icon: 'fas fa-mobile-alt', id: 'instapay_eg' }, // Generic mobile icon
                    { name: langData[currentLang]['vodafone_cash_eg'], icon: 'fas fa-money-bill-wave', id: 'vodafone_cash_eg' } // Generic cash icon
                ];
            } else if (['SA', 'AE', 'JO', 'KW', 'QA', 'BH', 'OM'].includes(userCountry)) { // GCC and Jordan
                methods = [
                    { name: langData[currentLang]['paypal_gcc'], icon: 'fab fa-paypal', id: 'paypal_gcc' },
                    { name: langData[currentLang]['bank_transfer_gcc'], icon: 'fas fa-bank', id: 'bank_transfer_gcc' }
                ];
            } else { // Europe, America, Australia (default for others)
                methods = [
                    { name: langData[currentLang]['revolut_eu_us_au'], icon: 'fab fa-revolut', id: 'revolut_eu_us_au' }, // Assuming fontawesome has Revolut
                    { name: langData[currentLang]['paypal_eu_us_au'], icon: 'fab fa-paypal', id: 'paypal_eu_us_au' },
                    { name: langData[currentLang]['bank_transfer_eu_us_au'], icon: 'fas fa-bank', id: 'bank_transfer_eu_us_au' }
                ];
            }

            methods.forEach(method => {
                const methodDiv = document.createElement('div');
                methodDiv.classList.add('payment-method');
                methodDiv.id = `payment_method_${method.id}`;
                methodDiv.innerHTML = `<i class="${method.icon}"></i> <span>${method.name}</span>`;
                methodDiv.addEventListener('click', () => {
                    document.querySelectorAll('.payment-method').forEach(div => div.classList.remove('selected'));
                    methodDiv.classList.add('selected');
                    displayPaymentDetails(method.id);
                });
                paymentMethodsContainer.appendChild(methodDiv);
            });
        }

        function displayPaymentDetails(methodId) {
            let detailsHtml = '';
            const paypalButtonHtml = `
                <div class="paypal-button-container">
                    <div id="paypal-container-W3G4VFWKPBTUY"></div>
                    <script>
                        paypal.HostedButtons({
                            hostedButtonId: "W3G4VFWKPBTUY",
                        }).render("#paypal-container-W3G4VFWKPBTUY")
                    </script>
                    <style>.pp-W3G4VFWKPBTUY{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}</style>
                    <form action="https://www.paypal.com/ncp/payment/W3G4VFWKPBTUY" method="post" target="_blank" style="display:inline-grid;justify-items:center;align-content:start;gap:0.5rem;">
                        <input class="pp-W3G4VFWKPBTUY" type="submit" value="Pay Now" />
                        <img src=https://www.paypalobjects.com/images/Debit_Credit_APM.svg alt="cards" />
                        <section style="font-size: 0.75rem;"> Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style="height:0.875rem;vertical-align:middle;"/></section>
                    </form>
                </div>
            `;

            switch (methodId) {
                case 'bank_transfer_tr':
                case 'bank_transfer_gcc':
                case 'bank_transfer_eu_us_au':
                    detailsHtml = `
                        <p><strong>اسم البنك:</strong> بنك زراعات</p>
                        <p><strong>اسم المستفيد:</strong> Istanova Tourism LLC</p>
                        <p><strong>رقم الحساب (IBAN):</strong> TRXXXXXXXXXXXXXXXXXXXXXX (سيتم تزويدكم بالرقم كاملاً بعد تأكيد الحجز)</p>
                        <p><strong>الرمز السويفت (SWIFT/BIC):</strong> TCZBTR2A</p>
                        <p>يرجى إرفاق صورة من إيصال التحويل البنكي عبر البريد الإلكتروني بعد إتمام عملية الدفع.</p>
                    `;
                    break;
                case 'cash_office_tr':
                    detailsHtml = `
                        <p>يمكنكم الدفع نقداً في مكتبنا في اسطنبول.</p>
                        <p><strong>العنوان:</strong> اسطنبول، الفاتح، مقابل ترام واي يوسف باشا، رقم 42، مكتب رقم 8.</p>
                        <p>يرجى التواصل معنا لتحديد موعد قبل زيارة المكتب.</p>
                    `;
                    break;
                case 'paypal_tr':
                case 'paypal_eg':
                case 'paypal_gcc':
                case 'paypal_eu_us_au':
                    detailsHtml = `
                        <p>يمكنك الدفع عبر PayPal. المبلغ الإجمالي هو <span id="paypal_amount_display">${totalPriceUsdSpan.textContent}</span>.</p>
                        ${paypalButtonHtml}
                    `;
                    break;
                case 'instapay_eg':
                    detailsHtml = `
                        <p>للدفع عبر InstaPay، يرجى تحويل المبلغ إلى الحساب التالي:</p>
                        <p><strong>اسم المستفيد:</strong> Istanova Tourism</p>
                        <p><strong>InstaPay ID:</strong> istanova@instapay</p>
                        <p>يرجى إرفاق لقطة شاشة لعملية التحويل بعد إتمام الدفع.</p>
                    `;
                    break;
                case 'vodafone_cash_eg':
                    detailsHtml = `
                        <p>للدفع عبر Vodafone Cash، يرجى تحويل المبلغ إلى الرقم التالي:</p>
                        <p><strong>رقم فودافون كاش:</strong> +2010XXXXXXXX (سيتم تزويدكم بالرقم كاملاً بعد تأكيد الحجز)</p>
                        <p>يرجى إرفاق لقطة شاشة لعملية التحويل بعد إتمام الدفع.</p>
                    `;
                    break;
                case 'revolut_eu_us_au':
                    detailsHtml = `
                        <p>للدفع عبر Revolut، يرجى تحويل المبلغ إلى الحساب التالي:</p>
                        <p><strong>اسم المستفيد:</strong> Istanova Tourism LLC</p>
                        <p><strong>Revolut Tag:</strong> @istanova</p>
                        <p><strong>IBAN:</strong> (يتم تزويده عند الحاجة)</p>
                        <p>يرجى إرفاق لقطة شاشة لعملية التحويل بعد إتمام الدفع.</p>
                    `;
                    break;
                default:
                    detailsHtml = '<p>يرجى اختيار طريقة دفع لتظهر التفاصيل.</p>';
            }

            // Create or update payment details div
            let paymentDetailsDiv = document.getElementById('payment_details');
            if (!paymentDetailsDiv) {
                paymentDetailsDiv = document.createElement('div');
                paymentDetailsDiv.id = 'payment_details';
                paymentDetailsDiv.classList.add('payment-details');
                paymentMethodsContainer.parentNode.insertBefore(paymentDetailsDiv, paymentMethodsContainer.nextSibling);
            }
            paymentDetailsDiv.innerHTML = detailsHtml;

            // Re-render PayPal button if it's the selected method
            if (methodId.includes('paypal')) {
                // Ensure the PayPal script is re-executed if the container is new/re-rendered
                const paypalContainer = document.getElementById('paypal-container-W3G4VFWKPBTUY');
                if (paypalContainer) {
                    // This is a bit tricky with hosted buttons as they might not re-render easily.
                    // The script included directly in the HTML for paypal will only run once.
                    // For dynamic rendering, you'd need to use PayPal's smart buttons or generate button via JS.
                    // The current setup assumes the hosted button script is always loaded and works
                    // even if the container is re-added, which might not always be the case.
                    // A more robust solution for dynamic PayPal buttons involves PayPal's JS SDK.
                    // For simplicity, the provided hosted button script is assumed to work as is.
                }
                const paypalAmountDisplay = document.getElementById('paypal_amount_display');
                if (paypalAmountDisplay) {
                    paypalAmountDisplay.textContent = totalPriceUsdSpan.textContent;
                }
            }
        }


        // Event Listeners for Booking Page
        numParticipantsSelect.addEventListener('change', () => {
            generateParticipantInputs(parseInt(numParticipantsSelect.value));
            updateTotalPrice();
        });

        relationshipTypeSelect.addEventListener('change', () => {
            generateParticipantInputs(parseInt(numParticipantsSelect.value));
            updateTotalPrice();
        });

        // Initial render for participants based on default selection (1)
        generateParticipantInputs(1);
        populateCountryCodes();
        determineUserLocationAndCurrency();


        // Terms & Conditions Popup
        const termsPopup = document.createElement('div');
        termsPopup.classList.add('terms-overlay');
        termsPopup.innerHTML = `
            <div class="terms-popup">
                <h2 data-lang-key="terms_title">الشروط والأحكام</h2>
                <div class="terms-content">
                    <h3 data-lang-key="terms_booking_policy_title">سياسة الحجز والإلغاء:</h3>
                    <ul data-lang-key="terms_booking_policy_list"></ul>
                    <h3 data-lang-key="terms_health_safety_title">الصحة والسلامة:</h3>
                    <ul data-lang-key="terms_health_safety_list"></ul>
                    <h3 data-lang-key="terms_conduct_title">السلوك وقواعد المخيم:</h3>
                    <ul data-lang-key="terms_conduct_list"></ul>
                    <h3 data-lang-key="terms_activities_title">الأنشطة والمسؤولية:</h3>
                    <ul data-lang-key="terms_activities_list"></ul>
                    <h3 data-lang-key="terms_payment_title">الدفع:</h3>
                    <ul data-lang-key="terms_payment_list"></ul>
                    <h3 data-lang-key="terms_photo_video_title">التصوير الفوتوغرافي والفيديو:</h3>
                    <ul data-lang-key="terms_photo_video_list"></ul>
                </div>
                <button class="btn primary-btn" id="agree_and_close_terms_popup" data-lang-key="agree_and_close">موافق وأغلق</button>
            </div>
        `;
        document.body.appendChild(termsPopup);

        viewTermsLink.addEventListener('click', (e) => {
            e.preventDefault();
            applyLanguageToTermsPopup(); // Apply language to popup content
            termsPopup.classList.add('active');
        });

        const agreeAndCloseTermsButton = document.getElementById('agree_and_close_terms_popup');
        agreeAndCloseTermsButton.addEventListener('click', () => {
            termsPopup.classList.remove('active');
            termsAgreeCheckbox.checked = true; // Automatically check the box
        });

        function applyLanguageToTermsPopup() {
            const popupElements = termsPopup.querySelectorAll('[data-lang-key]');
            popupElements.forEach(element => {
                const key = element.dataset.langKey;
                let text = langData[currentLang][key];
                if (Array.isArray(text)) {
                    // For lists, reconstruct the UL
                    const parentUl = element;
                    parentUl.innerHTML = ''; // Clear existing list items
                    text.forEach(itemText => {
                        const li = document.createElement('li');
                        li.textContent = itemText;
                        parentUl.appendChild(li);
                    });
                } else {
                    element.textContent = text;
                }
            });
        }

        // Booking Form Submission
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Age validation
            const participantAges = document.querySelectorAll('[id^="participant_age_"]');
            let ageInvalid = false;
            participantAges.forEach(input => {
                const age = parseInt(input.value);
                if (age < 18 || age > 45) {
                    ageInvalid = true;
                    input.style.borderColor = 'red';
                    input.nextElementSibling.textContent = 'العمر يجب أن يكون بين 18 و 45 عاماً.'; // Localized error message
                    input.nextElementSibling.style.color = 'red';
                } else {
                    input.style.borderColor = '';
                    if (input.nextElementSibling && input.nextElementSibling.style.color === 'red') {
                        input.nextElementSibling.textContent = ''; // Clear error message
                    }
                }
            });

            if (ageInvalid) {
                alert('يرجى التحقق من أعمار المشاركين. يجب أن يكون العمر بين 18 و 45 عاماً.');
                return;
            }

            if (!termsAgreeCheckbox.checked) {
                alert('يجب الموافقة على الشروط والأحكام لإتمام الحجز.');
                return;
            }

            const formData = new FormData(bookingForm);
            const bookingDetails = {};
            formData.forEach((value, key) => {
                bookingDetails[key] = value;
            });

            bookingDetails['total_price_usd'] = parseFloat(totalPriceUsdSpan.textContent);
            bookingDetails['total_price_local'] = parseFloat(totalPriceLocalSpan.textContent);
            bookingDetails['local_currency_code'] = localCurrencyCode;
            bookingDetails['exchange_rate_usd_to_local'] = currentExchangeRate;
            bookingDetails['user_ip_country'] = userCountry;

            try {
                const response = await fetch('php/send_booking.php', { // This will be your PHP file for email
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(bookingDetails)
                });

                const result = await response.json();

                if (result.success) {
                    alert('تم استلام حجزك بنجاح! سنتواصل معك قريباً.');
                    bookingForm.reset();
                    generateParticipantInputs(1); // Reset participants to 1
                } else {
                    alert('حدث خطأ أثناء إرسال الحجز: ' + result.message);
                }
            } catch (error) {
                console.error('Error submitting booking:', error);
                alert('حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.');
            }
        });
    }

    // Initialize language after all functions are defined
    detectAndSetLanguage(); // This should be called last to ensure all elements are ready
});