Contents lists available at ScienceDirect

International Journal of Medical Informatics

journal homepage: www.elsevier.com/locate/ijmedinf

Review article

Sociodemographic determinants of digital health literacy: A systematic
review and meta-analysis

Marta Estrela a,b, c,d,*, Guilherme Semedo e, F´atima Roque d,f, Pedro Lopes Ferreira c,g, Maria
Teresa Herdeiro a
a iBiMED—Institute of Biomedicine, Department of Medical Sciences, University of Aveiro, Aveiro, Portugal
b Department of Social, Political and Territorial Sciences, University of Aveiro, Portugal
c Centre for Health Studies and Research, University of Coimbra, Coimbra, Portugal
d Health Sciences Research Center, University of Beira Interior (CICS-UBI), Covilh˜a, Portugal
e Medical Devices Department, Critical Catalyst, Matosinhos, Portugal
f Research Unit for Inland Development, Guarda Polytechnic Institute (UDI-IPG), Guarda, Portugal
g Faculty of Economics, University of Coimbra, Coimbra, Portugal

A R T I C L E  I N F O

A B S T R A C T

Keywords:
Digital health literacy
Systematic Review
Digital Health
Meta-analysis
Sociodemographic
Social Inequalities

Introduction: Differences in digital health literacy levels are associated with a lack of access to digital tools, usage
patterns,  and  the  ability  to  effectively  use  digital  technologies.  Although  some  studies  have  investigated  the
impact of sociodemographic factors on digital health literacy, a comprehensive evaluation of these factors has
not been conducted. Therefore, this study sought to examine the sociodemographic determinants of digital health
literacy by conducting a systematic review of the existing literature.
Methods: A search of four databases was conducted. Data extraction included information on study character-
istics, sociodemographic factors, and the digital health literacy scales used. Meta-analyses for age and sex were
conducted using RStudio software with the metaphor package.
Results: A total of 3922 articles were retrieved, of which 36 were included in this systematic review. Age had a
negative  effect on digital health  literacy (B  = -0.05, 95%CI [-0.06; (cid:0) 0.04]), particularly  among older adults,
whereas sex appeared to have no statistically significant influence among the included studies (B = - 0.17, 95%CI
[-0.64; 0.30]). Educational level, higher income, and social support also appeared to have a positive influence on
digital health literacy.
Discussion:  This  review  highlighted  the  importance  of  addressing  the  digital  health  literacy  needs  of  under-
privileged populations, including immigrants and individuals with low socioeconomic status. It also emphasizes
the  need  for  more  research  to  better  understand  the  influence  of  sociodemographic,  economic,  and  cultural
differences on digital health literacy.
Conclusions: Overall, this review suggests digital health literacy is dependent on sociodemographic, economic,
and cultural factors, which may require tailored interventions that consider these nuances.

1. Introduction

The development of electronic health records and telemedicine has
led to an increasing use of digital health tools, gaining significant mo-
mentum in the 2000s with the widely available internet [1]. Today, the
use of digital health tools has expanded to include health-related apps,
wearable devices, and online medical resources to help people manage
their  health  and  make  informed  decisions  about  health  care.  The

growing use of digital tools in the modern world requires quick adap-
tation,  which  is  ultimately  hindered  or  facilitated  by  access  to  new
technologies and the skills needed for their adequate use [2,3]. As the
proper  use  of  digital  health  tools,  also  known  as  e-health  or  eHealth
tools,  demands  a  vast  number  of  skills,  including  numeracy,  science
literacy, technology use, health literacy, and the capacity to critically
appraise  health  information  [4],  exploring  the  digital  health  literacy
context constitutes a complex challenge.

* Corresponding author at: Department of Medical Sciences, Institute of Biomedicine – iBiMED- University of Aveiro, Campus Universit´ario de Santiago Agra do

Crasto - edifício 30 3810-193 Aveiro, Aveiro, Portugal.

E-mail address: mestrela@ua.pt (M. Estrela).

https://doi.org/10.1016/j.ijmedinf.2023.105124
Received 16 March 2023; Received in revised form 18 May 2023; Accepted 5 June 2023

InternationalJournalofMedicalInformatics177(2023)105124Availableonline10June20231386-5056/©2023TheAuthors.PublishedbyElsevierB.V.ThisisanopenaccessarticleundertheCCBYlicense(http://creativecommons.org/licenses/by/4.0/).M. Estrela et al.

Digital health literacy is defined as the ability to find, understand,
and use health information from digital sources [5], such as the Internet
and mobile devices, and is strongly related to the frequency with which
people  use  different  health  and  digital  resources.  These  resources
include  online  video  consultations,  digital  health  records,  social  net-
works,  and  other  health-related  applications  aimed  at  promoting  and
improving patient health [6]. The burden of digital health illiteracy is
significant, as those with difficulty navigating health information may
be more vulnerable to misinformation [7]. Differences in digital health
literacy levels between individuals persist noticeably, as well as in their
online  skills  and  Internet  knowledge,  which  are  ultimately  related  to
socioeconomic  status  and  autonomy  in  the  use  of  these  tools  [8,9],
consequently  contributing  to  social  health  inequalities  and  poorer
health outcomes [10].

Currently, there are several approaches to address digital inequality.
A three-level model for digital divide has been presented by van Deursen
&  Helsper [3], with the first digital divide level being associated with
lack of access to digital tools and the means to access the Internet, the
second level to usage patterns, and the last level being associated with
the ability to use digital technologies effectively and efficiently to ach-
ieve improved outcomes. Nevertheless, digital divide – and each of these
levels present on the three-level model - is influenced by factors such as
socioeconomic  status,  generation, sex, region, and  health status,  with
the first being one of the main predictors of Internet access and associ-
ated  skills,  directly  influencing  competent  Internet  use  [3,11,12].
Furthermore, digital health literacy can be influenced by other factors
such as technology readiness, attitudes towards technology, and Internet
use patterns [13–16]. Although some studies have reported the influ-
ence of sociodemographic factors on digital health literacy, a systematic
appraisal of these factors is lacking. Thus, this study aimed to analyze
the sociodemographic determinants of digital health literacy through a
systematic  review  and  meta-analysis  of  the  available  studies  on  the
topic.

2. Methods

2.1. Screening and study selection

A  search  was  conducted  on  November  24,  2021,  on  MedLINE-
PubMed,  Scopus,  Web  of  Knowledge,  and  EMBASE  databases.  To  up-
date the results obtained, a new search was conducted on April 12, 2022,
using  the  same  databases.  The  screening  of  the  obtained  articles  was
conducted by title and abstract by two independent researchers (ME and
GS), and the search strategy was primarily designed to identify relevant
studies  that  analyze  the  influencing  factors  on  digital  health  literacy,
and identify which scales were used in these studies to measure digital
health literacy. The keywords used to search the aforementioned data-
bases are as follows:

(digital  health  OR  e-health  OR  ehealth)  AND  literacy  AND  (de-
terminants  OR  factors  OR  sociodemographic  OR  demographic  OR
scale)
This  systematic  review  was  registered  in  the  PROSPERO  database
(CRD42022325207) [17].

2.2. Selection criteria

were applied by ME and GS and validated by a third researcher (TH)
when  there  was  no  agreement.  Inter-rater  agreement  was  calculated
using  the  Cohen’s  kappa  coefficient.  Full-text  articles  were  selected
using the same approach.

2.3. Quality assessment

The quality of the included studies was assessed using the Joanna
Briggs  Institute  Checklist  for  Cross-sectional  studies  [18].  For  each
study, the risk of bias was assessed separately by two researchers (ME
and GS). Similar to the screening process, a third reviewer (TH) acted as
a referee to reach a consensus in case of disagreement.

2.4. Data analysis

Data  extraction  retrieved  information  on  authors,  year,  country,
study  design,  study  population,  response  rate,  average  digital  health
literacy score, and a brief description of the main digital health literacy
determinants,  namely  sociodemographic  characteristics.  The  primary
outcome  was  the  impact  of  the  aforementioned  sociodemographic
characteristics  on  digital  health  literacy  levels,  and  the  secondary
outcome was the scale used to analyze digital health literacy. The results
were summarized qualitatively and quantitatively. This systematic re-
view  and  meta-analysis  followed  the  PRISMA  [19]  and  MOOSE  [20]
guidelines. Further recommendations for conducting meta-analyses of
observational studies were retrieved from a study by Mueller [21].

2.5. Statistical analysis

All  statistical  analyses  were  conducted  using  RStudio  software  (v.
4.2.2),  and  the  packages  metafor  [22],  dplyr,  and  readxl.  Regression
coefficients  were  estimated  with  95%  confidence  intervals  using  a
random-effects model with Hedges and Olkin’s estimator [23,24]. Het-
erogeneity  due  to  differences  between  studies  was  assessed  using
Cochran’s Q and I2-statistic [25,26]. Forest plots were used to visually
represent the presence of heterogeneity. Publication bias was assessed
using funnel plots [27] – see supplementary figures S2). Sensitivity for age
was  assessed  through  subgroup  analyses  of  young  adults,  adults,  and
older  adults.  As  there  were  no  evident  subgroups  for  sex,  sensitivity
analyses  for  this  variable  were  conducted  using  the  leave-one-out
method.

3. Results

3.1. Screening

A total of 3922 articles were retrieved from Pubmed, Scopus, WoS,
and  EMBASE  databases,  of  which  1886  were  duplicates  (Fig.  1).
Screening by title and abstract was conducted, and 1926 records were
excluded as they did not agree with the inclusion criteria, achieving a
Cohen’s kappa of 0.623, corresponding to substantial agreement [28];
110 reports were analyzed by full text to check eligibility. Of these, 36
were included in this systematic review. Cohen’s kappa of 0.861 was
obtained, corresponding to an almost perfect agreement [28] between
the researchers.

3.2. Quality analysis

The inclusion criteria accepted studies that analyzed the influence of
sociodemographic factors, such as sex, age, income, geographic region,
and social status. There was no time restriction and the languages of the
included studies were English, Portuguese, or Spanish. Conference ab-
stracts,  systematic  reviews,  reviews,  meta-analyses,  editorials,  study
protocols, scale design and validation studies, correspondence papers,
and studies that were not within the scope of our study were excluded.
All  titles  and  abstracts  obtained  from  the  searches  were  indepen-
dently reviewed by two researchers. The inclusion and exclusion criteria

The quality analysis was conducted by two independent researchers.
From  the  thirty-seven  studies  included  after  full-text  screening,  one
study  was  removed  for  inadequate  reporting  of  results.  Although  the
remaining studies had overall good quality, some criteria were classified
as “unclear” for some studies, especially regarding inclusion criteria of
the sample, exposure measurement, and confounding factor identifica-
tion/management.  The  results  of  the  quality  analysis  are  shown  in
supplementary material - Table S2.

InternationalJournalofMedicalInformatics177(2023)1051242M. Estrela et al.

3.3. Studies’ characteristics

3.5. Location

Fig. 1. PRISMA flowchart with screening results.

All  studies  used  the  eHealth  Literacy  Scale  (eHEALS),  except  for
Zakar’s study [29], which used the Digital Health Literacy Instrument.
The weighted average eHEALS score among the studies was 30.4 ± 2.4.
Table 1 presents the main characteristics of the studies included. The
data extracted from the regression analyses are presented in Table S1.
Table  2  summarizes  the  characteristics  analyzed  in  each  study.
Almost all the studies analyzed age and sex. The results of the effect of
each variable on digital health literacy scores are included in the sup-
plementary material.

3.4. Study design and setting

All  studies  had  a  cross-sectional  design.  Seventeen  studies  were
conducted on-site [13,16,30–44], either through interviews or the dis-
tribution  of  a  questionnaire;  nine  studies  were  conducted  online
[29,45–52], and five studies were conducted through telephone (CATI)
[53–57]. The remaining five studies adopted a mixed approach [58–62],
using two of the aforementioned data collection strategies.

studies

(14/36)  were

The included studies are distributed around the globe: almost half of
countries
the
[13,29–35,45–48,58,59].  Twelve  studies  were  conducted  in  North
America
Europe
[40,41,56,57,61,62],  three  in  Africa  [42,43,52]  and  one  in  Australia
[44].

[16,36–39,49–51,53–55,60],

in  Asian

conducted

six

in

3.6. Population characteristics

Seven studies were conducted among high school or college students
[29,30,32,35,41,42,47]. Older adults were the target population in six
studies  [16,31,36,39,49,55],  while  one  study  included  younger  and
older adults [59]. Of the remaining twenty-two studies, eight targeted
populations with specific diseases [36,43,44,50,51,54,60,61], one tar-
geted  at  healthcare  workers  [46],  and  the  remaining  had  patients  in
general or the general population as the target population.

3.6.1. Digital health literacy levels

From  studies  that  presented  average  eHEALS  scores  among  re-
spondents,  it  was  observed  that  healthcare  workers  [46]  and  online
health consumers [52] presented higher levels of digital health literacy.

InternationalJournalofMedicalInformatics177(2023)1051243M. Estrela et al.

Table 1
Characteristics of the included studies.

Year

Author

Location

Setting

N

Age
(mean)

Sex
(%
males)

Population

Time period

Response
rate (%)

eHEALS mean (SD)

2021

Abdulai, A

Ghana

Online survey

269

28.4

59.7

Adults

2019
2020

Alhuwail, D
Arcury, T

2021

Bergman, L

Kuwait
North
Carolina (US)
Sweden

Online survey
On-site

386
200

36.5
63.5

37
42

Adults
Older adults (55 + yo)

On-site

681

45.9

43.1

Adults (arabic and
swedish native
speakers)

Apr 15 - Jun 1,
2020
Sep – Oct 2015
Nov 2014-May
2016
Feb – Sep 2019

2021

2020

Berkowsky,
R
Cherid, C

California
(US)
Canada

On-site

401

67.5

Online survey

237

72.7

42.7

Older adults (65 + yo)

2020

2013

Choi, N

Texas (US)

Mixed

980

71.3

36

30

Adults (50 + yo)

Low income disabled
and home-bound adults

General population
(14–93 yo)
Healthcare workers
(21–60 yo)
High school students

2021

De Santis, K

Germany

CATI

1014

54

47.9

2020

Do, B

Vietnam

Online survey

5209

34.0

32.9

2019

Gazibara, T

2021

Guo, Z

Belgrade
(Servia)
Hong kong

On-site

702

16.5

41.9

CATI/Online

1501

49.0

47.4

Adults

2020
2011

Kim, S
Knapp, C

Korea
US

On-site
Telephone

205
2371

21.7
40.5

14.1
9

2020

Lee, O

South Korea

Interviews

217

72.2

37.8

Nursing students
Parents with children
with care needs
Older adults (65 + yo)

Lee, W

2021
2022  Makowsky,
M
2021  Maroney, K

2021  Mengestie,
N

2022  Moon, Z

2021  Morton, E.

Malaysia
Canada

On-site
On-site

216
301

46.7
39.9

43.5
44.9

Adults
Adults

Phone survey

288

52.6

54.5

KT and LT recipients

Chicago IL
(US)
Ethiopia

On-site

801

21.7

40

England and
Wales
US

On-site and
online
Online survey

1860

60.5

0

919

36.9

23.1

People with bipolar

Health sciences
university students
Breast cancer survivors

2020
2017
2021

Nguyen, L
Richtering, S
Schrauben, S

Vietnam
Australia
US

On-site
On-site
On-site

410
453
633

22.2
67
67.9

44.9
75.9
59

2020

Shiferaw, K

Ethiopia

On-site

423

35.6

66.3

2018
2015

Stellefson, M
Tennant, B

US
US

Online survey
CATI

176
283

66.2
67.5

49.4
54.8

2022

Tran, H

Vietnam

Online survey

1851

20.5

6.9

Medical students
Adults (CVD)
Chronic kidney disease
adults
Chronic patients

COPD patients
Older adults and baby
boomers
Nursing students

2017

Vicente, M

2019  Wong, D
2016

Xesfingi, S

European
union
Hong kong
Greece

2021

Xu, R

China

2020

Yang, E

South Korea

On-site
Online and
interview
On-site

Online and
face-to-face

CATI

26,566

–

1016
1064

31.5
38.1

40

39.2
44.8

General population (14
+ yo)
Patients
Adults

569

46.3

50.6

Patients

405

–

19.1

Young and old adults

2017
2021

Yang, S
Zakar, R

Taiwan
Pakistan

On-site
Online survey

556
1747

47.7
22.5

–

47.3

College students
University students

2020

Zhou, J

China

Online survey

162

40.6

9.9

2015

Zibrik, L

British
Columbia

* Average (SD) per item.
** Median (IQR).

On-site

896

–

44.5

Online health
communities
Chinese and punjabi
seniors

Sep 2017 - Mar
2018
Nov 2012 - Feb
2013

Oct 2020

April 6–19,
2020
Dec 2016 - Jan
2017
Sep 1–25,
2019
Apr 9–23,2020
Jul – Oct 2009

–

Sep-Nov 2019
May 18-Aug
31, 2014
Mar 2014 -
Nov 2016
Apr-May 2019

–

Feb 19-Jul 20,
2020
Jul – Dec 2017

Late 2016 -
mid 2018
Feb – May
2019
–

Feb 2013

Apr 7 – May
31, 2020
Sep 2014

Mar-Apr 2017
2013

Nov 2019-Jan
2020
Nov 2017-Feb
2018

Dec 2015
May 1 - Jun 15,
2020
Jan – Mar
2019
2013–2014

46.4

62.7
31.8

96.9

–

97.8

–

–

–

100

–

61.3
58.2

–

–
–

82

94.6

64

81.3

–
–

67.9

95.3

13.9
7.3

47.5

–

94.5
–

71.1

100

79.4
88.2

73.6

–

4.01 (0.95)*

28.63 (5.6)
28.4 (7.1)

28.7 (6.2) - Total;
28.1 (6.1) - Arabic;
29.3 (6.2) -
Swedish
–

29 (24–32)**

3.53 (0.76) - <60
yo *
3.22 (0.85) - >60
yo *
31 (6)

33.1 (4.8)

26.0 (10)**

3.71 (0.65)*

26.10 (7.7)
–

2.7 (1.58) – US*;
3.56 (0.60) – S.
Koreans*
27.38 (6.59)
29.27 (6.84)

30.88 (5.37)

28.7

28.8 (7.34)

31.7 (6.3)

27.03 (3.54)
27.2 (6.59)
–

24.6 (6.4)

29.11 (5.72)
29.05 (5.75)

31.4 (4.4)

–

–
–

66.4 (21.2)***

30.50 (4.62) -
young adults;
30.95 (4.17) - older
adults
–
–

3.79 (0.79)*

–

InternationalJournalofMedicalInformatics177(2023)1051244M. Estrela et al.

*** Minimum-maximum normalization.

Table 2
Sociodemographic variables studied per study.

Author

Age

Sex

Education

Socioeconomic
status

Employment

Ethnicity, race and Language
spoken

Household composition, social support, and
residence

✓
Abdulai, A
✓
Alhuwail, D
⨯
Arcury, T
✓
Bergman, L
✓
Berkowsky, R
✓
Cherid, C
✓
Choi, N
✓
De Santis, K
✓
Do, B
✓
Gazibara, T
✓
Guo, Z
✓
Kim, S
✓**
Knapp, C
✓
Lee, O
✓
Lee, W
Makowsky, M  ✓
✓
Maroney, K
⨯
Mengestie, N
✓
Moon, Z
✓
Morton, E
✓
Nguyen, L
✓
Richtering, S
✓
Schrauben, S
✓
Schrauben, S
⨯
Shiferaw, K
✓
Stellefson, M
✓
Tennant, B
✓
Tran, H
✓
Vicente, M
✓
Wong, D
✓
Xesfingi, S
✓
Xu, R
✓
Yang, E
✓
Zakar, R
✓
Zhou, J
✓
Yang, S

✓
✓
⨯
✓
✓
✓
✓
✓
✓
✓
✓
⨯
✓*
✓
✓
✓
✓
✓
⨯
✓
✓
✓
⨯
⨯
⨯
✓
✓
✓
✓
✓
✓
✓
⨯
✓
✓
⨯

✓
✓
⨯
✓
✓
✓
⨯
✓
⨯
✓
✓
⨯
✓*
✓
✓
✓
✓
⨯
✓
✓
⨯
✓
✓
✓
✓
✓
✓
⨯
✓
✓
✓
✓
✓
⨯
✓
⨯

** -✓Parents and children.
* -✓Parents.

⨯
⨯
⨯
⨯
✓
⨯
✓
✓
✓
✓
✓
⨯
✓
⨯
✓
⨯
⨯
⨯
✓
⨯
✓
✓
✓
✓
✓
⨯
✓
✓
✓
⨯
✓
✓
✓
✓
⨯
⨯

⨯
⨯
⨯
⨯
✓
⨯
⨯
⨯
⨯
⨯
✓
⨯
⨯
⨯
✓
⨯
✓
⨯
⨯
⨯
⨯
⨯
⨯
⨯
✓
⨯
⨯
⨯
✓
✓
⨯
✓
⨯
⨯
⨯
⨯

⨯
⨯
✓
✓
✓
⨯
✓
⨯
⨯
⨯
⨯
⨯
✓*
⨯
✓
✓
✓
⨯
✓
⨯
⨯
⨯
✓
✓
⨯
⨯
✓
⨯
⨯
⨯
⨯
⨯
⨯
⨯
⨯
⨯

However, although nursing students from Tran’s study [47] presented
high scores on eHEALS on average, other groups of nursing and medical
students belonged to the studies with the lowest average eHEALS scores
[31,32]. It was also observed that most studies presenting higher levels
of digital health literacy were conducted online and/or through phone.
In  studies  comparing  two  distinct  groups,  while  no  significant  differ-
ences were noted among young adults and older adults [59], statistically
significant  differences  were  observed  among  Arabic  and  Swedish
speakers [40], those under and above 60 years of age [60], and US and
South Korean older adults [31].

3.6.2. Age

The  weighted  average  age  of  all  participants  was  40.92  ± 15.37
years old. Considering the statistically significant outcomes, all articles,
except Morton [50], reported a negative association between age and
eHEALS scores. People aged over  75 years are up to four times more
likely  to  have  lower  levels  of  digital  health  literacy  [36].  When  con-
ducting a meta-analysis, a statistically significant negative effect of age
on  eHEALS  scores  was  observed  (B  = -0.05,  95%CI  [-0.06;-0.04])
(Fig. 2). After conducting subgroup analyses (Supplementary figure S1),
a significant effect of age on the eHEALS scores among older adults was
observed. The young adults’ subgroup presented no heterogeneity but
no  significant  results,  whereas  the  adult  group  also  presented  non-
significant results and substantial heterogeneity.

⨯
⨯
⨯
⨯
✓
⨯
✓
⨯
✓
✓*
✓
⨯
✓*
⨯
⨯
✓
✓
✓
⨯
⨯
⨯
⨯
⨯
⨯
✓
✓
✓
⨯
✓
⨯
✓
✓
✓
⨯
✓
⨯

3.6.3. Sex

ten

studies

presented

Regarding sex, five studies had more than 80% females as partici-
pants, and only seven studies had over 50% males as a study population.
From the 28 studies that analyzed the influence of sex on eHEALS scores,
only
results
[29,32,41,42,45–48,52,57].  However,  although  significant,  these  re-
sults present high heterogeneity, with females presenting higher levels
of digital health literacy in some studies and lower levels in others. Fig. 3
presents  the  forest  plot  for  the  studies  included  in  the  meta-analysis,
with an effect size of –0.17, 95%CI  [-0.64;0.30], confirming  the high
heterogeneity  between  the  studies  and  the  non-significance  of  the
pooled  results.  A  table  with  a  sensitivity  analysis  is  presented  in  the
Supplementary Material.

significant

3.6.4. Education

level

educational

Among the 27 studies that analyzed the influence of education, every
study with statistically significant results presented a positive influence
of
scores
[13,31,36,38,40,43,45,48,50,51,55,56,58,62], with those with a college
degree or higher being particularly predisposed to present higher digital
health literacy. Gazibara’s study [41] analyzed parents’ highest educa-
tional attainment, with no statistically significant results. Moon’s study
[61] presents a positive influence of the age at which respondents left
full-time education on eHEALS scores.

eHEALS

on

InternationalJournalofMedicalInformatics177(2023)1051245M. Estrela et al.

3.6.6. Employment

Seven  studies  analyzed  the  influence  of  employment  status  on
eHEALS scores, with only Xu’s study presenting a significant difference
in  digital  health  literacy  scores  between  employed  and  unemployed
individuals [34].

3.6.7. Ethnicity, race, and languages spoken

Ethnicity appeared to have no effect on digital health literacy in the
included studies, with the exception of Lee’s study [13] conducted in
Malaysia,  where  Malaysian  Chinese  people  presented  lower  levels  of
eHEALS scores. Tennant et al. [55] evaluated the influence of race and
achieved non-significant results. Choi [60] and Bergman [40] analyzed
the influence of the languages spoken on eHEALS scores. In Choi’s study,
being Spanish-speaking in the US had no influence on eHEALS scores,
while being an Arabic native speaker in Sweden was associated with a
higher probability of presenting low digital health literacy.

3.6.8. Household composition, social support, and residence

None of the studies that analyzed the influence of marital status on
eHEALS scores showed statistically significant differences between the
groups. Four studies analyzed the impact of residence on digital health
literacy, all with no statistically significant results. While having chil-
dren appeared to have no influence [34], living alone and lack of social
support were associated with lower eHEALS [34,51].

Fig. 2. Meta-analysis results for age.

4. Discussion

The  role  of  various  socioeconomic  and  demographic  factors  in
determining  DHL  has  been  a  subject  of  interest  in  the  research  com-
munity.  This  systematic review and  meta-analysis  discusses the  influ-
ence of sociodemographic determinants on DHL, an important aspect of
healthcare  that involves  an  individual’s  ability to  access,  understand,
and  use  health  information  from  digital  sources.  Overall,  our  results
suggest that there are some factors that may directly influence the digital
health literacy levels, such as age, education, and social support.

Most studies have analyzed the impact of age and sex on DHL levels.
One interesting finding of this systematic review and meta-analysis is
that sex does not appear to be a significant determinant of digital health
literacy.  While  sex  is  often  associated  with  disparities  in  health  out-
comes, studies demonstrate that these differences are also highly influ-
enced by other variables, such as cultural context, marital status, and
socioeconomic conditions [63]. Whereas the impact of sex tends to be
heterogeneous among studies, a negative relationship between age and
DHL  levels  appears  to  exist.  Though  it  may  seem  obvious  that  older
individuals  may  have  lower  digital  health  literacy,  the  review  found
significant  results  only  in  subgroup  analyses.  However,  when  con-
ducting  subgroup  analyses,  studies  conducted  among  young  adults
showed no significant impact of age on the DHL levels. Studies of the
general population are highly heterogeneous; thus, they lack sufficient
consistency to draw conclusions. However, the included studies on older
adult  subgroups  presented  a  significant  negative  impact  of  age  on
eHEALS scores. Still, these results should be carefully considered, as only
two studies were included in this subgroup. Thus, our results suggest
that age may not be a strong predictor of digital health literacy on its
own.

The review included studies that investigated the direct impact of
socioeconomic  factors  such  as  education,  income,  and  employment
status  on digital  health  literacy. As  expected, the  results  showed  that
individuals with higher levels of education tended to have higher digital
health  literacy  than  those  with  lower  levels  of  education,  thus  rein-
forcing its role in digital health literacy. These  results agree with the
previously  published  literature  on  the  impact  of  educational  level  on
health literacy, digital literacy, and digital health literacy [64,65]. So-
cioeconomic status also seemed to influence the level of digital health
literacy. As low socioeconomic status is associated with suboptimal use
of health resources and health status [64], it is only expected that it is

Fig. 3. Meta-analysis results for sex.

3.6.5. Socioeconomic status

Regarding

income,  five  studies  presented  significant  results
[38,43,56,58,62], with higher income associated with higher eHEALS
levels. Two of these studies only presented significant results for pop-
ulations in the highest income bracket [43,58]. Other studies measured
the income-to-needs ratio [60], financial and social status [29,46,59],
economic condition [32], ability to pay for medication [47], healthcare
insurance  scheme  [34],  and  Index  of  Multideprivation  quintile  [61],
where individuals belonging to the 3rd quintile presented lower digital
health literacy when compared to their least-deprived counterparts.

InternationalJournalofMedicalInformatics177(2023)1051246M. Estrela et al.

also reflected in the ability to acquire adequate health information from
digital sources. Furthermore, access to the Internet and digital health
tools  may  also  be  severely  hindered  by  individuals’  economic  status,
thus  highlighting  the  importance  of  reinforcing  digital  health  in-
terventions among those who are the most underprivileged [3,11,12].
This  review  also  highlights  the  influence  of  social  support  on  digital
health  literacy,  suggesting  that  individuals  with  more  social  support
tend to have higher health literacy than those with less social support.
While ethnicity by itself appears to have no effect on digital health
literacy levels on most of the included studies, and appear to be very
dependent  on  the  context,  being  a  native  speaker  may  constitute  an
advantage  for  higher  digital  health  literacy  levels  when  compared  to
their immigrant counterparts. As immigrants are at a higher risk of so-
cial exclusion, which consequently hinders access to healthcare services
[66],  it  is  also  important  to  target  DHL  interventions  for  these  pop-
ulations, ultimately helping them navigate the country’s health systems.
One of the limitations of this review was the high heterogeneity and
variability of the included studies. This was expected, as the included
studies were cross-sectional, each representing only a specific popula-
tion,  and  being  at  risk  for  a  higher  selection  bias  of  participants.
Furthermore,  it  is  observed  that  those  studies  conducted  through  an
online  survey  tend  to  present  higher  average  levels  of  digital  health
literacy, which might be result of an exclusion of those individuals who
are unable to use digital tools. Additionally, this review only included
articles that analyzed the direct influence of socioeconomic variables,
and studies on differences between groups were excluded. However, the
review  had  some  strengths,  including  the  inclusion  of  studies  from
around the world, the reliability of the scale used, and lack of publica-
tion  bias.  The  eHEALS  [4]  is  the  most  widely  used  scale  to  measure
digital health literacy, presenting high levels of validity and consistency
[67,68]. However, while digital health literacy may have not changed
since  its  development,  the  context  in  which  digital  health  skills  are
applied nowadays has, and eHEALS focuses only on information gath-
ering (Health 1.0 skills), disregarding interactivity on the Web (Health
2.0)  [69].  The  ever-growing  influence  of  social  media  on  health  de-
cisions and the risk of health misinformation [70] are prominent prob-
lems that were not as present as they are now. Furthermore, as there is so
much misinformation circulating on the Internet, people with low dig-
ital  health  literacy  may  also  be  more  susceptible  to  cognitive  bias,
overestimating  their  knowledge  base  [71].  As  the  eHEALS  is  a  scale
comprising self-reporting questions, it may not entirely reflect the actual
digital health literacy levels of the population. Thus, it is also important
to assess actual digital health literacy through performance-based items,
possibly with reference to those developed by van der Vaart and Weiss
[69,72].

5. Conclusions

In conclusion, this review provides valuable insights into the influ-
ence of socioeconomic and demographic factors on digital health liter-
acy.  These  findings  suggest  that  DHL  is  multifactorial  and  may  be
influenced by cultural and contextual factors. Furthermore, educational
level, social support, and socioeconomic status may be key factors for
improving  digital  health  literacy. Nevertheless,  this review  also  high-
lights the need for more research to better understand the influence of
sociodemographic, economic, and cultural differences on digital health
literacy.  Thus,  we  recommend  targeting  digital  health  interventions
considering  these  nuances,  to  improve  their  effectiveness  -  which  is
highly dependent on several underlying factors -, as they may not be
one-size-fits-all.

Funding

This  research  was  funded  by  an  individual  grant  by  FCT  (ref

2021.05141.BD).

CRediT authorship contribution statement

Marta Estrela: Conceptualization, Methodology, Software, Valida-
tion,  Formal  analysis,  Investigation,  Data  curation,  Writing  –  original
draft, Writing – review & editing, Visualization, Project administration,
Funding  acquisition.  Guilherme  Semedo:  Formal  analysis,  Investiga-
tion, Data curation, Writing – review &  editing, Visualization. F´atima
Roque: Validation, Writing – review & editing, Visualization, Supervi-
sion.  Pedro  Lopes  Ferreira:  Validation,  Writing  –  review  &  editing,
Visualization, Supervision. Maria Teresa Herdeiro: Validation, Writing
– review & editing, Visualization, Supervision.

Declaration of Competing Interest

The authors declare that they have no known competing financial
interests or personal relationships that could have appeared to influence
the work reported in this paper.

Acknowledgements

We would like to thank Ms. Joana Ant˜ao and Mr. Guilherme Rodri-
gues, from the Institute of Biomedicine, Portugal, for their help with the
statistical analysis.

Appendix A. Supplementary material

Supplementary data to this article can be found online at https://doi.

org/10.1016/j.ijmedinf.2023.105124.

References

[1] J. Jagarapu, R.C. Savani, A brief history of telemedicine and the evolution of

teleneonatology, Semin. Perinatol. 45 (5) (2021), 151416.

[2] A. Karnoe, D. Furstrand, K.B. Christensen, O. Norgaard, L. Kayser, Assessing

competencies needed to engage with digital health services: Development of the
eHealth literacy assessment toolkit, J. Med. Internet Res. 20 (5) (2018) 1–14.
[3] D.A.J.A.M. van, E.J. Helsper, The third-level digital divide: Who benefits most from

being online?, in: Communication and information technologies annual 10
Emerald Group Publishing Limited, 2015, pp. 29–52.

[4] C.D. Norman, H.A. Skinner, eHealth literacy: Essential skills for consumer health in

a networked world, J. Med. Internet Res. 8 (2) (2006 Jun 16) e9.

[5] WHO Regional Office for Europe, Report on the WHO symposium on the future of

digital health systems in the European region, WHO Regional Office for Europe,
Copenhagen, 2019.

[6] The HLS19 Consortium of the WHO Action Network M-POH. International report
on the methodology, results, and recommendations of the European Health
Literacy Population Survey 2019-2021 (HLS19) of M-POHL [Internet]. Austrian
National Public Health Institute, Vienna, 2021 [cited 2022 Apr 22]. Available
from: https://m-pohl.net/sites/m-pohl.net/files/inline-files/HLS19_International%
20Report%20%28002%29_0.pdf.

[7] A.W.K. Yeung, A. Tosevska, E. Klager, F. Eibensteiner, C. Tsagkaris, E.D. Parvanov,
et al., Medical and health-related misinformation on social media: Bibliometric
study of the scientific literature, J. Med. Internet. Res. 24 (1) (2022) e28152.
[8] E. Hargittai, A.M. Piper, M.R. Morris, From internet access to internet skills: digital
inequality among older adults, Univ. Access Inf. Soc. 18 (4) (2019) 881–890.
[9] I. Kickbusch, Health Literacy, the solid facts, World Health Organization, Geneva,

2013, p. 73.

[10] K. Latulippe, C. Hamel, D. Giroux, Social health inequalities and eHealth: A

literature review with qualitative synthesis of theoretical and empirical studies,
J. Med. Internet Res. 19 (4) (2017) e136.

[11] A. Cornejo Müller, B. Wachtler, T. Lampert, Digital divide-social inequalities in the

utilisation of digital healthcare, Bundesgesundheitsblatt Gesundheitsforschung
Gesundheitsschutz. 63 (2) (2020) 185–191.

[12] M.C. Kim, J.K. Kim, Digital Divide: Conceptual Discussions and Prospect, in:

W. Kim, T.W. Ling, Y.J. Lee, S.S. Park (Eds.), the Human Society and the Internet
Internet-Related Socio-Economic Issues, Springer, Berlin, Heidelberg, 2001,
pp. 78–91. Lecture Notes in Computer Science.

[13] W.L. Lee, Z.J. Lim, L.Y. Tang, N.A. Yahya, K.D. Varathan, S.M. Ludin, Patients’
technology readiness and ehealth literacy: implications for adoption and
deployment of eHealth in the COVID-19 era and beyond, Comput Inform Nurs. 40
(4) (2021) 244–250.

[14] S. Yusif, A. Hafeez-Baig, J. Soar, e-Health readiness assessment factors and
measuring tools: A systematic review, Int. J. Med. Inf. 107 (2017) 56–64.
[15] E.V. Estacio, R. Whittle, J. Protheroe, The digital divide: Examining socio-

demographic factors associated with health literacy, access and use of internet to
seek health information, J Health Psychol. 24 (12) (2019) 1668–1675.

InternationalJournalofMedicalInformatics177(2023)1051247M. Estrela et al.

[16] T.A. Arcury, J.C. Sandberg, K.P. Melius, S.A. Quandt, X. Leng, C. Latulipe, et al.,

Older adult internet use and eHealth literacy, J. Appl. Gerontol. 39 (2) (2020)
141–150.

[17] Estrela M, Semedo G, Roque F, Lopes Ferreira P, Herdeiro MT. Socioeconomic
determinants for digital health literacy: a systematic review. PROSPERO 2022
CRD42022325207 [Internet]. Available from: https://www.crd.york.ac.uk/prosp
ero/display_record.php?RecordID=325207.

[18] Joanna Briggs Institute. © Joanna Briggs Institute 2017 Critical Appraisal Checklist
for Analytical Cross Sectional Studies, 2017; Available from: https://jbi.global/sit
es/default/files/2019-05/JBI_Critical_Appraisal-Checklist_for_Analytical_Cross
_Sectional_Studies2017_0.pdf.

[19] M.J. Page, J.E. McKenzie, P.M. Bossuyt, I. Boutron, T.C. Hoffmann, C.D. Mulrow, et

al., The PRISMA 2020 statement: an updated guideline for reporting systematic
reviews, BMJ 29 (372) (2021), n71.

[20] D.F. Stroup, J.A. Berlin, S.C. Morton, I. Olkin, G.D. Williamson, D. Rennie, et al.,
Meta-analysis of observational studies in epidemiology: a proposal for reporting.
Meta-analysis of observational studies in epidemiology (MOOSE) group, JAMA 283
(15) (2000) 2008–2012.

[21] M. Mueller, M. D’Addario, M. Egger, M. Cevallos, O. Dekkers, C. Mugglin, et al.,
Methods to systematically review and meta-analyse observational studies: a
systematic scoping review of recommendations, BMC Med. Res. Method. 18 (1)
(2018) 44.

[22] W. Viechtbauer, Conducting meta-analyses in R with the metafor package, J Stat

Soft. 36 (3) (2010).

[44] S.S. Richtering, K. Hyun, L. Neubeck, G. Coorey, J. Chalmers, T. Usherwood, et al.,
eHealth Literacy: Predictors in a population with moderate-to-high cardiovascular
risk, JMIR Hum. Factors. 4 (1) (2017) e4.

[45] D. Alhuwail, Y. Abdulsalam, Assessing electronic health literacy in the state of

Kuwait: Survey of internet users from an Arab State, J Med. Internet Res. 21 (5)
(2019) e11174.

[46] B.N. Do, T.V. Tran, D.T. Phan, H.C. Nguyen, T.T.P. Nguyen, H.C. Nguyen, et al.,
Health literacy, eHealth Literacy, adherence to infection prevention and control
procedures, lifestyle changes, and suspected COVID-19 symptoms among health
care workers during lockdown: Online survey, J. Med. Internet Res. 22 (11) (2020)
e22894.

[47] H.T.T. Tran, M.H. Nguyen, T.T.M. Pham, G.B. Kim, H.T. Nguyen, N.M. Nguyen, et
al., Predictors of eHealth literacy and its associations with preventive behaviors,
fear of COVID-19, anxiety, and depression among undergraduate nursing students:
A cross-sectional survey, Int. J. Environ. Res. Public Health. 19 (7) (2022) 3766.
[48] J. Zhou, C. Wang, Improving cancer survivors’ e-health literacy via online health
communities (OHCs): a social support perspective, J. Cancer Surviv. 14 (2) (2020)
244–252.

[49] R.W. Berkowsky, Exploring predictors of eHealth literacy among older adults:
Findings from the 2020 CALSPEAKS survey, Gerontol. Geriatr. Med. 7 (2021),
23337214211064228.

[50] E. Morton, K. Ho, S.J. Barnes, E.E. Michalak, Digital health literacy in bipolar

disorder: International web-based survey, JMIR Ment. Health. 8 (10) (2021)
e29764.

[23] L.V. Hedges, Estimation of effect size from a series of independent experiments,

[51] M.L. Stellefson, J.J. Shuster, B.H. Chaney, S.R. Paige, J.M. Alber, J.D. Chaney, et

Psychol. Bull. 92 (2) (1982) 490–499.

[24] L.V. Hedges, I. Olkin, CHAPTER 9 - Random effects models for effect sizes, in: L.
V. Hedges, I. Olkin (Eds.), Statistical Methods for Meta-Analysis, Academic Press,
San Diego, 1985, pp. 189–203.

[25] M. Borenstein, In a meta-analysis, the I-squared statistic does not tell us how much

the effect size varies, J. Clin. Epidemiol. 9 (152) (2022) 281–284.

[26] T.B. Huedo-Medina, J. S´anchez-Meca, F. Marín-Martínez, J. Botella, Assessing

heterogeneity in meta-analysis: Q statistic or I2  index? Psychol. Methods 11 (2)
(2006) 193–206.

al., Web-based health information seeking and ehealth literacy among patients
living with chronic obstructive pulmonary disease (COPD), HealthCommun. 33
(12) (2018) 1410–1424.

[52] A.F. Abdulai, A.H. Tiffere, F. Adam, M.M. Kabanunye, COVID-19 information-

related digital literacy among online health consumers in a low-income country,
Int. J. Med. Inform. 145 (2021), 104322.

[53] C. Knapp, V. Madden, H. Wang, P. Sloyer, E. Shenkman, Internet use and eHealth

literacy of low-income parents whose children have special health care needs,
J. Med. Internet Res. 13 (3) (2011) e75.

[27] M. Egger, G.D. Smith, M. Schneider, C. Minder, Bias in meta-analysis detected by a

[54] K. Maroney, L.M. Curtis, L. Opsasnick, K.D. Smith, M.R. Eifler, A. Moore, et al.,

simple, graphical test, BMJ 315 (7109) (1997) 629–634.

[28] M.L. McHugh, Interrater reliability: the kappa statistic, Biochem. Med. (Zagreb). 22

(3) (2012) 276–282.

[29] R. Zakar, S. Iqbal, M.Z. Zakar, F. Fischer, COVID-19 and health information seeking

behavior: Digital health literacy survey amongst university students in Pakistan,
Int. J. Environ. Res. Public Health. 18 (8) (2021) 4009.

[30] S. Kim, J. Jeon, Factors influencing eHealth literacy among Korean nursing
students: A cross-sectional study, Nurs. Health Sci. 22 (3) (2020) 667–674.
[31] O.E.K. Lee, D.H. Kim, K.A. Beum, Factors affecting information and communication
technology use and eHealth literacy among older adults in the US and South Korea,
Educ. Gerontol. 46 (9) (2020) 575–586.

[32] L.H. Nguyen, T.B.T. Le, E-Health literacy of medical students at a university in

Central Vietnam, Indian J. Public Health Res. Develop. 11 (2) (2020) 1299–1304.
[33] D.K.K. Wong, M.K. Cheung, Online health information seeking and ehealth literacy

among patients attending a primary care clinic in Hong Kong: A cross-sectional
survey, J. Med. Internet Res. 21 (3) (2019) e10831.

[34] R.H. Xu, L.M. Zhou, E.L.Y. Wong, D. Wang, the association between patients’
ehealth literacy and satisfaction with shared decision-making and well-being:
Multicenter cross-sectional study, J. Med. Internet. Res. 23 (9) (2021) e26721.

[35] S.C. Yang, Y.F. Luo, C.H. Chiang, The associations among individual factors,

eHealth literacy, and health-promoting lifestyles among college students, J. Med.
Internet Res. 19 (1) (2017) e15.

[36] C. Cherid, A. Baghdadli, M. Wall, N.E. Mayo, G. Berry, E.J. Harvey, et al., Current

level of technology use, health and eHealth literacy in older Canadians with a
recent fracture-a survey in orthopedic clinics, Osteoporos. Int. 31 (7) (2020)
1333–1340.

eHealth literacy and web-based patient portal usage among kidney and liver
transplant recipients, Clin. Transplant. 35 (2) (2021) e14184.

[55] B. Tennant, M. Stellefson, V. Dodd, B. Chaney, D. Chaney, S. Paige, et al., eHealth
literacy and Web 2.0 health information seeking behaviors among baby boomers
and older adults, J. Med. Internet Res. 17 (3) (2015), e70.

[56] K.K. De Santis, T. Jahnel, E. Sina, J. Wienert, H. Zeeb, Digitization and health in
Germany: Cross-sectional nationwide survey, JMIR Public Health Surveill. 7 (11)
(2021) e32951.

[57] M.R. Vicente, G. Madden, Assessing eHealth skills across Europeans, Health Policy

Technol. 6 (2) (2017) 161–168.

[58] Z. Guo, S.Z. Zhao, N. Guo, Y. Wu, X. Weng, J.Y.H. Wong, et al., Socioeconomic

disparities in ehealth literacy and preventive behaviors during the COVID-19
pandemic in Hong Kong: Cross-sectional study, J. Med. Internet Res. 23 (4) (2021)
e24577.

[59] E. Yang, S.J. Chang, H. Ryu, H.J. Kim, S.J. Jang, Comparing factors associated with
ehealth literacy between young and older adults, J. Gerontol. Nurs. 46 (8) (2020)
46–56.

[60] N.G. Choi, D.M. Dinitto, The digital divide among low-income homebound older

adults: Internet use patterns, eHealth literacy, and attitudes toward computer/
Internet use, J. Med. Internet. Res. 15 (5) (2013) e93.

[61] Z. Moon, M. Zuchowski, R. Moss-Morris, M.S. Hunter, S. Norton, L.D. Hughes,

Disparities in access to mobile devices and e-health literacy among breast cancer
survivors, Support Care Cancer 30 (1) (2022) 117–126.

[62] S. Xesfingi, A. Vozikis, eHealth literacy: In the quest of the contributing factors,

Interact. J. Med. Res. 5 (2) (2016) e16.

[63] C. Vlassoff, Gender differences in determinants and consequences of health and

[37] M.J. Makowsky, S. Davachi, C.A. Jones, eHealth literacy in a sample of South Asian

illness, J. Health Popul. Nutr. 25 (1) (2007) 47–61.

adults in Edmonton, Alberta, Canada: Subanalysis of a 2014 community-based
survey, JMIR Form. Res. 6 (3) (2022) e29955.

[38] S.J. Schrauben, L. Appel, E. Rivera, C.M. Lora, J.P. Lash, J. Chen, et al., Mobile

health (mHealth) technology: Assessment of availability, acceptability, and use in
CKD, Am J Kidney Dis. 77 (6) (2021) 941–950.e1.

[39] L. Zibrik, S. Khan, N. Bangar, E. Stacy, H. Novak Lauscher, K. Ho, Patient and

community centered eHealth: Exploring eHealth barriers and facilitators for
chronic disease self-management within British Columbia’s immigrant Chinese and
Punjabi seniors, Health Policy Technol. 4 (4) (2015) 348–356.

[40] L. Bergman, U. Nilsson, K. Dahlberg, M. Jaensson, J. Wångdahl, Health literacy and

e-health literacy among Arabic-speaking migrants in Sweden: a cross-sectional
study, BMC Public Health 21 (1) (2021) 2165.

[41] T. Gazibara, J. Cakic, M. Cakic, T. Pekmezovic, A. Grgurevic, eHealth and
adolescents in Serbia: psychometric properties of eHeals questionnaire and
contributing factors to better online health literacy, HealthPromot Int. 34 (4)
(2019) 770–778.

[42] N.D. Mengestie, T.M. Yilma, M.A. Beshir, G.K. Paulos, eHealth literacy of medical
and health science students and factors affecting eHealth literacy in an Ethiopian
University: A cross-sectional study, Appl. Clin. Inform. 12 (2) (2021) 301–309.

[43] K.B. Shiferaw, B.C. Tilahun, B.F. Endehabtu, M.K. Gullslett, S.A. Mengiste, E-health
literacy and associated factors among chronic patients in a low-income country: a
cross-sectional survey, BMC Med. Inform. Decis. Mak. 20 (1) (2020) 181.

[64] T. Jansen, J. Rademakers, G. Waverijn, R. Verheij, R. Osborne, M. Heijmans, The

role of health literacy in explaining the association between educational
attainment and the use of out-of-hours primary care services in chronically ill
people: a survey study, BMC Health Serv. Res. 18 (1) (2018) 394.

[65] K.A. Holt, D. Overgaard, L.V. Engel, L. Kayser, Health literacy, digital literacy and

eHealth literacy in Danish nursing students at entry and graduate level: a cross
sectional study, BMC Nurs. 19 (2020) 22.

[66] M.K. Nakphong, M.E. De Trinidad Young, B. Morales, I.Y. Guzman-Ruiz, L. Chen,
K.G. Kietzman, Social exclusion at the intersections of immigration, employment,
and healthcare policy: A qualitative study of Mexican and Chinese immigrants in
California, Soc. Sci. Med. 1 (298) (2022), 114833.

[67] L. Jiyeon, L. Eun-Hyun, C. Duckhee, eHealth literacy instruments: systematic
review of measurement properties, J. Med. Internet Res. 23 (11) (2021).

[68] J. Burzy´nska, M. Rękas, P. Januszewicz, Evaluating the psychometric properties of
the eHealth literacy scale (eHEALS) among Polish social media users, Int. J.
Environ. Res. Public Health 19 (7) (2022) 4067.

[69] R. van der Vaart, C. Drossaert, Development of the digital health literacy

instrument: Measuring a broad spectrum of health 1.0 and health 2.0 Skills, J. Med.
Internet. Res. 19 (1) (2017), e27.

InternationalJournalofMedicalInformatics177(2023)1051248M. Estrela et al.

[70] M. Lowry, N. Trivedi, P. Boyd, A. Julian, M. Trevi˜no, Y. Lama, et al., Making
decisions about health information on social media: A mouse-tracking study,
Cognit. Res.: Principles Implicat. 7 (1) (2022) 68.

[71] B.E. Canady, M. Larzo, Overconfidence in managing health concerns: The Dunning-

Kruger effect and health literacy, J. Clin. Psychol. Med. Set. (2022).

[72] B.D. Weiss, M.Z. Mays, W. Martz, K.M. Castro, D.A. DeWalt, M.P. Pignone, et al.,
Quick assessment of literacy in primary care: the newest vital sign, Ann. Fam. Med.
3 (6) (2005) 514–522.

InternationalJournalofMedicalInformatics177(2023)1051249