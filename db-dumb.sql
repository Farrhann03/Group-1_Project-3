--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cuisine; Type: TABLE; Schema: public; Owner: yvonnekoh
--

CREATE TABLE public.cuisine (
    id integer NOT NULL,
    type_of_food character varying(100) NOT NULL
);


ALTER TABLE public.cuisine OWNER TO yvonnekoh;

--
-- Name: cuisine_id_seq; Type: SEQUENCE; Schema: public; Owner: yvonnekoh
--

CREATE SEQUENCE public.cuisine_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cuisine_id_seq OWNER TO yvonnekoh;

--
-- Name: cuisine_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yvonnekoh
--

ALTER SEQUENCE public.cuisine_id_seq OWNED BY public.cuisine.id;


--
-- Name: location; Type: TABLE; Schema: public; Owner: yvonnekoh
--

CREATE TABLE public.location (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    address character varying(100) NOT NULL,
    located_at character varying(100) NOT NULL,
    "cuisineId" character varying(100) NOT NULL,
    "priceId" character varying(100) NOT NULL
);


ALTER TABLE public.location OWNER TO yvonnekoh;

--
-- Name: location_id_seq; Type: SEQUENCE; Schema: public; Owner: yvonnekoh
--

CREATE SEQUENCE public.location_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.location_id_seq OWNER TO yvonnekoh;

--
-- Name: location_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yvonnekoh
--

ALTER SEQUENCE public.location_id_seq OWNED BY public.location.id;


--
-- Name: price; Type: TABLE; Schema: public; Owner: yvonnekoh
--

CREATE TABLE public.price (
    id integer NOT NULL,
    cost character varying(100) NOT NULL
);


ALTER TABLE public.price OWNER TO yvonnekoh;

--
-- Name: pricing_id_seq; Type: SEQUENCE; Schema: public; Owner: yvonnekoh
--

CREATE SEQUENCE public.pricing_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pricing_id_seq OWNER TO yvonnekoh;

--
-- Name: pricing_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yvonnekoh
--

ALTER SEQUENCE public.pricing_id_seq OWNED BY public.price.id;


--
-- Name: cuisine id; Type: DEFAULT; Schema: public; Owner: yvonnekoh
--

ALTER TABLE ONLY public.cuisine ALTER COLUMN id SET DEFAULT nextval('public.cuisine_id_seq'::regclass);


--
-- Name: location id; Type: DEFAULT; Schema: public; Owner: yvonnekoh
--

ALTER TABLE ONLY public.location ALTER COLUMN id SET DEFAULT nextval('public.location_id_seq'::regclass);


--
-- Name: price id; Type: DEFAULT; Schema: public; Owner: yvonnekoh
--

ALTER TABLE ONLY public.price ALTER COLUMN id SET DEFAULT nextval('public.pricing_id_seq'::regclass);


--
-- Data for Name: cuisine; Type: TABLE DATA; Schema: public; Owner: yvonnekoh
--

COPY public.cuisine (id, type_of_food) FROM stdin;
1	Western
2	Indian
3	Chinese
4	Thailand
5	Muslim
6	Chinese
7	Indian
8	Malay
9	Korean
\.


--
-- Data for Name: location; Type: TABLE DATA; Schema: public; Owner: yvonnekoh
--

COPY public.location (id, name, address, located_at, "cuisineId", "priceId") FROM stdin;
3	Char-Grill Bar Holland Village	25a Lor Liput, Singapore 277735	Central	Western	$10 per pax
4	The Roti Prata House	246 M, Upper Thomson Rd, 574370	Central	Indian	$10 per pax
5	Haidilao Hot Pot @ 313	313 Orchard Rd, #04 - 23 / 24, Singapore 238895	Central	Chinese	$50 per pax
6	Siam Square Mookata	Golden Mile Tower, 6001 Beach Road\nBasement Singapore 199589	West	Thailand	$25 per pax
7	Al-Azhar	201D Tampines Street 21 #01-1155 Singapore 524201	West	Muslim	$10 per pax
8	Mongkok Dim Sum	197 East Coast Road Singapore 428901	West	Chinese	$15 per pax
9	Srisun Express	56 Serangoon Garden Way Singapore 555952	North East	Indian	$10 per pax
10	Ponggol Nasi Lemak	965 Upper Serangoon Road Singapore 534721	North East	Muslim	$5 per pax
11	Todamgol Korean Restaurant	31 Tanjong Pagar Road Singapore 088454	North	Korean	$30 per pax
\.


--
-- Data for Name: price; Type: TABLE DATA; Schema: public; Owner: yvonnekoh
--

COPY public.price (id, cost) FROM stdin;
1	$10 per pax
2	$10 per pax
3	$50 per pax
4	$25 per pax
5	$10 per pax
6	$15 per pax
7	$10 per pax
8	$5 per pax
9	$30 per pax
\.


--
-- Name: cuisine_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yvonnekoh
--

SELECT pg_catalog.setval('public.cuisine_id_seq', 9, true);


--
-- Name: location_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yvonnekoh
--

SELECT pg_catalog.setval('public.location_id_seq', 11, true);


--
-- Name: pricing_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yvonnekoh
--

SELECT pg_catalog.setval('public.pricing_id_seq', 9, true);


--
-- Name: cuisine cuisine_pkey; Type: CONSTRAINT; Schema: public; Owner: yvonnekoh
--

ALTER TABLE ONLY public.cuisine
    ADD CONSTRAINT cuisine_pkey PRIMARY KEY (id);


--
-- Name: location location_pkey; Type: CONSTRAINT; Schema: public; Owner: yvonnekoh
--

ALTER TABLE ONLY public.location
    ADD CONSTRAINT location_pkey PRIMARY KEY (id);


--
-- Name: price pricing_pkey; Type: CONSTRAINT; Schema: public; Owner: yvonnekoh
--

ALTER TABLE ONLY public.price
    ADD CONSTRAINT pricing_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

