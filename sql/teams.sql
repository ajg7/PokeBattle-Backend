--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

-- Started on 2021-02-05 22:16:10

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
-- TOC entry 209 (class 1259 OID 34385)
-- Name: teams; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teams (
    id integer NOT NULL,
    team_name character varying(255) NOT NULL,
    "user_Id" integer NOT NULL
);


ALTER TABLE public.teams OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 34383)
-- Name: teams_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.teams_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teams_id_seq OWNER TO postgres;

--
-- TOC entry 3020 (class 0 OID 0)
-- Dependencies: 208
-- Name: teams_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.teams_id_seq OWNED BY public.teams.id;


--
-- TOC entry 2879 (class 2604 OID 34388)
-- Name: teams id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teams ALTER COLUMN id SET DEFAULT nextval('public.teams_id_seq'::regclass);


--
-- TOC entry 3014 (class 0 OID 34385)
-- Dependencies: 209
-- Data for Name: teams; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.teams (id, team_name, "user_Id") FROM stdin;
\.


--
-- TOC entry 3021 (class 0 OID 0)
-- Dependencies: 208
-- Name: teams_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teams_id_seq', 1, false);


--
-- TOC entry 2881 (class 2606 OID 34390)
-- Name: teams teams_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (id);


--
-- TOC entry 2882 (class 2606 OID 34391)
-- Name: teams teams_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_user_id_foreign FOREIGN KEY ("user_Id") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2021-02-05 22:16:10

--
-- PostgreSQL database dump complete
--

