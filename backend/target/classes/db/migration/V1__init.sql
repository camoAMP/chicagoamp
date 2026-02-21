create extension if not exists "pgcrypto";

create table if not exists videos (
  id uuid primary key default gen_random_uuid(),
  vimeo_id varchar(64) unique,
  title varchar(255) not null,
  description text,
  status varchar(32) not null,
  duration_seconds integer,
  seo_title varchar(255),
  seo_description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists images (
  id uuid primary key default gen_random_uuid(),
  video_id uuid references videos(id),
  title varchar(255),
  source varchar(32) not null,
  sha256 varchar(64) unique,
  format varchar(16),
  width integer,
  height integer,
  byte_size bigint,
  original_filename varchar(255),
  storage_path text,
  remote_url text,
  created_at timestamptz not null default now()
);

create table if not exists campaigns (
  id uuid primary key default gen_random_uuid(),
  name varchar(255) not null,
  status varchar(32) not null,
  channel varchar(64),
  start_date date,
  end_date date,
  created_at timestamptz not null default now()
);

create table if not exists analytics_snapshots (
  id uuid primary key default gen_random_uuid(),
  video_id uuid references videos(id),
  views integer not null,
  watch_time_seconds integer not null,
  engagement_rate numeric(5, 2),
  recorded_at date not null,
  created_at timestamptz not null default now()
);
