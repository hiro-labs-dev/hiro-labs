import { icons } from '../data/techIcons'

// Display name (as written in data/site.js) → Simple Icons slug.
const SLUGS = {
  'typescript': 'typescript', 'node.js': 'nodedotjs', 'postgres': 'postgresql', 'prisma': 'prisma',
  'tauri': 'tauri', 'rust': 'rust', 'react': 'react', 'react 18': 'react', 'vite': 'vite',
  'openai': 'openai', 'claude': 'claude', 'ollama': 'ollama', 'elevenlabs': 'elevenlabs',
  'aws': 'amazonwebservices', 'aws lambda': 'awslambda', 'dynamodb': 'amazondynamodb',
  'django': 'django', 'django 5': 'django', 'django rest framework': 'django', 'wagtail': 'wagtail', 'wagtail 6': 'wagtail',
  'express': 'express', 'fastify': 'fastify', 'fastapi': 'fastapi', 'drizzle': 'drizzle', 'sqlite': 'sqlite',
  'python': 'python', 'ffmpeg': 'ffmpeg', 'electron': 'electron', 'maplibre': 'maplibre', 'mapbox': 'mapbox',
  'stripe': 'stripe', 'celery': 'celery', 'redis': 'redis', 'docker': 'docker', 'github actions': 'githubactions',
  'i18next': 'i18next',
}


export default function TechChip({ name }) {
  const icon = icons[SLUGS[name]]
  return (
    <span className="hl-chip hl-tech">
      {icon && (
        <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" style={{ color: icon.c || 'var(--text-body)' }}>
          <path d={icon.d} fill="currentColor" />
        </svg>
      )}
      {name}
    </span>
  )
}
