insert into videos (
  id,
  vimeo_id,
  title,
  description,
  status,
  duration_seconds,
  seo_title,
  seo_description
) values
  (
    gen_random_uuid(),
    '102334455',
    'Chicago After Dark',
    'Cinematic skyline reel with neon accents and bold typography.',
    'LIVE',
    162,
    'Chicago After Dark | Chicago AMP',
    'A neon-glow skyline story powered by Chicago AMP.'
  ),
  (
    gen_random_uuid(),
    '102334456',
    'Loop Brand Launch',
    'Product launch recap for a Loop-based retail activation.',
    'SCHEDULED',
    128,
    'Loop Brand Launch | Chicago AMP',
    'Launch recap video optimized for social and web.'
  );

insert into images (
  id,
  video_id,
  title,
  source,
  sha256,
  format,
  width,
  height,
  byte_size,
  original_filename,
  storage_path,
  remote_url
) values
  (
    gen_random_uuid(),
    (select id from videos where vimeo_id = '102334455'),
    'Skyline Poster Frame',
    'VIMEO',
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    'jpg',
    1920,
    1080,
    0,
    'skyline-poster.jpg',
    null,
    'https://cdn.chicagoamp.com/images/skyline-poster.jpg'
  ),
  (
    gen_random_uuid(),
    (select id from videos where vimeo_id = '102334456'),
    'Loop Launch Thumbnail',
    'VIMEO',
    'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    'jpg',
    1920,
    1080,
    0,
    'loop-launch.jpg',
    null,
    'https://cdn.chicagoamp.com/images/loop-launch.jpg'
  );

insert into campaigns (
  id,
  name,
  status,
  channel,
  start_date,
  end_date
) values
  (
    gen_random_uuid(),
    'Neon Skyline Release',
    'ACTIVE',
    'Multi-channel',
    current_date - 7,
    current_date + 14
  ),
  (
    gen_random_uuid(),
    'Loop Retail Launch',
    'PLANNED',
    'Social',
    current_date + 3,
    current_date + 30
  );

insert into analytics_snapshots (
  id,
  video_id,
  views,
  watch_time_seconds,
  engagement_rate,
  recorded_at
) values
  (
    gen_random_uuid(),
    (select id from videos where vimeo_id = '102334455'),
    14200,
    560000,
    68.4,
    current_date - 1
  ),
  (
    gen_random_uuid(),
    (select id from videos where vimeo_id = '102334455'),
    13100,
    521000,
    64.9,
    current_date - 2
  );
