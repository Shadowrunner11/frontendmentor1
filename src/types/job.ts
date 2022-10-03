export interface IJOb{
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: LevelEnum;
  postedAt: string;
  contract: ContractEnum;
  location: string;
  languages: string[];
  tools: string[];
}

enum ContractEnum{
  FullTime = 'Full Time' 
}

enum LevelEnum{
  Senior = 'Senior',
  Junior = 'Junior'
}