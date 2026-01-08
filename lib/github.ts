/**
 * GitHub API Integration
 * Busca repositórios e informações do perfil do GitHub
 */

const GITHUB_USERNAME = 'guuilhermessantos';
const GITHUB_API = 'https://api.github.com';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

export interface GitHubUser {
  login: string;
  name: string;
  bio: string | null;
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  company: string | null;
}

/**
 * Busca informações do perfil do GitHub
 */
export async function getGitHubUser(): Promise<GitHubUser> {
  const response = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
    },
    next: { revalidate: 3600 } // Cache por 1 hora
  });

  if (!response.ok) {
    throw new Error('Erro ao buscar dados do GitHub');
  }

  return response.json();
}

/**
 * Busca todos os repositórios públicos
 */
export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  const response = await fetch(
    `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 } // Cache por 1 hora
    }
  );

  if (!response.ok) {
    throw new Error('Erro ao buscar repositórios do GitHub');
  }

  return response.json();
}

/**
 * Busca repositórios com mais stars (featured)
 */
export async function getFeaturedRepos(limit = 6): Promise<GitHubRepo[]> {
  const repos = await getGitHubRepos();
  
  // Filtra e ordena por stars, depois por data de atualização
  return repos
    .filter(repo => !repo.name.includes('guuilhermessantos')) // Remove README repo
    .sort((a, b) => {
      // Primeiro por stars
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      // Depois por data de atualização
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    })
    .slice(0, limit);
}

/**
 * Mapeia linguagem para ícone (removido - não mais usado)
 * Os cards agora usam apenas texto e badges
 */

/**
 * Mapeia linguagem para cor de gradiente
 */
export function getLanguageGradient(language: string | null): string {
  const gradients: Record<string, string> = {
    'TypeScript': 'from-blue-600/20 to-blue-800/20',
    'JavaScript': 'from-yellow-500/20 to-yellow-700/20',
    'Python': 'from-blue-500/20 to-green-500/20',
    'Java': 'from-red-600/20 to-orange-600/20',
    'Go': 'from-cyan-500/20 to-blue-600/20',
    'Rust': 'from-orange-600/20 to-red-700/20',
    'Ruby': 'from-red-500/20 to-pink-600/20',
    'PHP': 'from-purple-600/20 to-indigo-700/20',
    'HTML': 'from-orange-500/20 to-red-500/20',
    'CSS': 'from-blue-500/20 to-purple-500/20',
  };

  return gradients[language || ''] || 'from-gray-600/20 to-gray-800/20';
}

/**
 * Formata a descrição do repositório
 */
export function formatDescription(description: string | null): string {
  if (!description) return 'Projeto desenvolvido com tecnologias modernas.';
  
  // Limita o tamanho da descrição
  if (description.length > 150) {
    return description.substring(0, 147) + '...';
  }
  
  return description;
}

/**
 * Converte tópicos em tecnologias
 */
export function getRepoTechnologies(repo: GitHubRepo): string[] {
  const techs: string[] = [];
  
  // Adiciona a linguagem principal
  if (repo.language) {
    techs.push(repo.language);
  }
  
  // Adiciona tópicos (limitado a 4 total)
  if (repo.topics && repo.topics.length > 0) {
    const formattedTopics = repo.topics
      .map(topic => topic.charAt(0).toUpperCase() + topic.slice(1))
      .slice(0, 3);
    techs.push(...formattedTopics);
  }
  
  return techs.slice(0, 4);
}

