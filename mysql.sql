create database eshopper_project;
drop database eshopper_project;


create table category(
   id int,
   name varchar(255),
   count char(10)
);


insert into category values(1,'mens wear',200)
insert into category values(2,'mens wear tshirt',20012345657)

alter table category add column mobile int after name;
insert into category values(6,'mens wear tshirt',7506157362)


insert into category (id,name,mobile)values(6,'mens wear tshirt',7506157362);

alter table category drop column mobile;
alter table category add column mobile bigint after name;

insert into category (id,name,mobile)values(6,'mens wear tshirt',7506157362);

create table brands(
   id int auto_increment primary key,
   name varchar(255),
   count int
   );

insert into brands (name,count)values('adidas',10);
insert into brands (name,count)values('puma',20);
insert into brands (name,count)values('killer jeans',30);
insert into brands (name,count)values('rayban',10);

-- delete from brands--
delete from brands where id=3;
insert into brands (name,count)values('reliance',14);

delete from brands; /* when we do delete table that time again insert table  with brand name as given above*/
	-- do insert--

truncate table brands;/* same like delete*/
 -- do insert--

 drop table brands;/* same like delete but this drop dlete complet the table that why we have to do again table and insert table as shown in the above table brand*/
 -- do insert and create table--
--update brands set name='jeans',count=90--
 update brands set name='jeans',count=90 where id=3

select count(id) from brands;


select count(*) from brands;

select count(*)as CNT from brands;

select sum(count)as TOTAL from brands;
select avg(count)as AVG from brands;

select max(count)as MAXVAL from brands;
select min(count)as MINVAL from brands;

select * from brands;
select name,count from brands;
select name,count from brands where 1;
select name,count from brands where count>10;
select name,count from brands where name='puma';
select name,count from brands where name like 'a%';
select name,count from brands where name like '%s';
select name,count from brands where name like '%a%';

select name,count from brands where count>10 and count<100;
select name,count from brands where count between 10 and 90;
select name,count,id from brands where id=2 or id=3 or id=10; 
select name,count,id from brands where id=2 and id=3 and id=10;
select name,count,id from brands where id in(2,3,90);


