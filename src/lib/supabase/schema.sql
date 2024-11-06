-- Öğrenci tablosu
create table students (
  id bigint primary key,
  ad_soyad text not null,
  kademe int not null,
  class_id int,
  school_id int,
  number text,
  username text not null,
  learning_style text,
  alan_id int,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Eksik kazanımlar tablosu
create table missing_achievements (
  id bigint primary key,
  student_id bigint references students(id),
  achievement_id bigint,
  teacher_id bigint,
  deneme_id bigint,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Öğrenci test sonuçları
create table student_test_results (
  id bigint primary key,
  student_id bigint references students(id),
  deneme_id bigint,
  exam_type_id int,
  net decimal(4,2),
  dogru_sayisi int,
  yanlis_sayisi int,
  bos_sayisi int,
  course_id int,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Hedef okullar
create table target_schools (
  id bigint primary key,
  student_id bigint references students(id),
  school_id int,
  class_id int,
  school_name text not null,
  target_score int,
  lgs_score int,
  tyt_score int,
  ayt_score int
);

-- Günlük hedefler
create table daily_goals (
  id bigint primary key,
  student_id bigint references students(id),
  course_id int,
  achievement_id int,
  test_id int,
  solved_questions int,
  correct_answers int,
  wrong_answers int,
  date date not null
);

-- Ödevler
create table assignments (
  id bigint primary key,
  title text not null,
  description text,
  due_date timestamp with time zone,
  course_id int,
  class_id int,
  teacher_id int,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Öğrenci ödevleri
create table student_assignments (
  id bigint primary key,
  assignment_id bigint references assignments(id),
  student_id bigint references students(id),
  status text default 'pending',
  submission_date timestamp with time zone,
  teacher_id int
);