create type question as enum ('craftsman', 'generous', 'learn', 'improve', 'resourceful');

create table if not exists devlog (
  id serial primary key,
  user_id uuid default auth.uid() references auth.users(id),
  accomplished text not null,
  question question,
  answer text not null,
  rating int not null,
  created_at timestamp with time zone not null default now()
);

alter table devlog enable row level security;

create policy user_create_own_devlog on devlog 
  for insert 
  to authenticated 
  with check (true);

create policy user_read_own_devlogs on devlog 
  for select 
  using (auth.uid() = user_id);

