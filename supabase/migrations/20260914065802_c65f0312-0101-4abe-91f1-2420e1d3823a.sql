CREATE TABLE public.rfq_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  designation TEXT,
  city TEXT,
  country TEXT,
  industry TEXT,
  product_interest TEXT[] NOT NULL DEFAULT '{}',
  quantity TEXT,
  capacity_requirement TEXT,
  timeline TEXT,
  budget_range TEXT,
  requirement TEXT NOT NULL,
  source TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT ALL ON public.rfq_submissions TO service_role;

ALTER TABLE public.rfq_submissions ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_rfq_submissions_updated_at
BEFORE UPDATE ON public.rfq_submissions
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();