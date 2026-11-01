export type Locale = 'zh' | 'en'
export type LocalizedText = Record<Locale, string>
export const text = (value: LocalizedText, locale: Locale) => value[locale]
export const homePath = (locale: Locale) => (locale === 'zh' ? '/' : '/en')

export const sections = [
  { id: 'about', label: { zh: '自我介绍', en: 'Introduction' }, summary: { zh: '个人背景、研究兴趣与未来方向。', en: 'Background, research interests, and future goals.' } },
  { id: 'education', label: { zh: '教育背景', en: 'Education' }, summary: { zh: '学习经历、专业方向与学术训练。', en: 'Studies, fields of specialization, and academic training.' } },
  { id: 'projects', label: { zh: '项目经历', en: 'Projects' }, summary: { zh: '参与的项目、承担的工作与主要成果。', en: 'Projects, responsibilities, and key outcomes.' } },
  { id: 'internships', label: { zh: '实习经历', en: 'Internships' }, summary: { zh: '实习岗位、工作实践与收获。', en: 'Internship roles, professional experience, and takeaways.' } },
  { id: 'publications', label: { zh: '科研论文', en: 'Publications' }, summary: { zh: '学术论文、研究成果与相关资料。', en: 'Publications, research contributions, and related resources.' } }
] as const satisfies ReadonlyArray<{ id: string; label: LocalizedText; summary: LocalizedText }>

export type SectionId = (typeof sections)[number]['id']
export const pagePath = (locale: Locale, section?: SectionId) =>
  section ? `${locale === 'zh' ? '' : '/en'}/${section}` : homePath(locale)

type ResourceLink = { label: LocalizedText; href: string }
type InternshipEntry = {
  id: string
  organization: LocalizedText
  role: LocalizedText
  dates: LocalizedText
  description: LocalizedText
}
type PublicationEntry = {
  id: string
  title: string
  authors: string
  venue: string
  year: string
  description: LocalizedText
  links: ResourceLink[]
}

// 内容与指标按用户提供的 resume.pdf 录入；英文与中文共用同一份经历记录。
// 简历没有列出实习和论文，因此保留空列表，不将项目经历推断为实习或论文。
export const profile = {
  siteTitle: { zh: '陈曦的个人主页', en: 'Xi Chen' },
  name: { zh: '陈曦', en: 'Xi Chen' },
  headline: { zh: '大模型 · 后训练', en: 'Large Language Models · Post-training' },
  description: {
    zh: '陈曦，中国科学技术大学控制工程硕士在读，关注大模型后训练与终端 Agent。',
    en: 'Xi Chen, a master’s student in Control Engineering at the University of Science and Technology of China, focusing on LLM post-training and terminal agents.'
  },
  summary: {
    zh: '中国科学技术大学控制工程硕士在读，关注大模型后训练与终端 Agent，具有任务合成、SFT/GRPO 训练及分布式训练与评测实践。',
    en: 'I am a master’s student in Control Engineering at the University of Science and Technology of China. My work focuses on LLM post-training and terminal agents, including task synthesis, SFT/GRPO, distributed training, and evaluation.'
  },
  introduction: {
    zh: '我是陈曦，目前就读于中国科学技术大学，控制工程硕士在读。\n\n我关注大模型后训练与终端 Agent，项目实践涵盖训练任务的反向合成与质量筛查、SFT 冷启动、PPO/GRPO 训练、远程沙箱执行，以及双节点训练和评测。在相关项目中，我负责会话反向重建、质量筛查、冷启动数据构建与远程沙箱执行后端，并参与合成流水线、执行验证、训练配置与评测。',
    en: 'I am Xi Chen, currently pursuing a master’s degree in Control Engineering at the University of Science and Technology of China.\n\nMy interests center on LLM post-training and terminal agents. My project experience covers reverse task synthesis and quality screening, SFT cold starts, PPO/GRPO training, remote sandbox execution, and two-node training and evaluation. I have been responsible for session reconstruction, quality screening, cold-start data construction, and the remote sandbox backend, while contributing to synthesis pipelines, execution validation, training configuration, and evaluation.'
  },
  motto: 'Be the change that you want to see in the world.',
  isDraft: false,
  contacts: [
    { label: { zh: 'wugecx@163.com', en: 'wugecx@163.com' }, href: 'mailto:wugecx@163.com' },
    { label: { zh: '+86 18229980855', en: '+86 18229980855' }, href: 'tel:+8618229980855' }
  ] as ResourceLink[],
  education: [
    {
      id: 'education-ustc',
      school: { zh: '中国科学技术大学', en: 'University of Science and Technology of China' },
      qualification: { zh: '硕士在读 · 控制工程', en: 'Master’s student · Control Engineering' },
      dates: { zh: '2025.09 - 至今', en: 'Sep 2025 - Present' },
      description: { zh: '', en: '' }
    },
    {
      id: 'education-usc',
      school: { zh: '南华大学', en: 'University of South China' },
      qualification: { zh: '本科 · 建筑电气与智能化', en: 'Undergraduate studies · Building Electrical Engineering and Intelligent Systems' },
      dates: { zh: '2020.09 - 2024.06', en: 'Sep 2020 - Jun 2024' },
      description: { zh: '', en: '' }
    }
  ],
  skills: [
    {
      id: 'skill-post-training',
      title: { zh: '大模型后训练', en: 'LLM post-training' },
      description: {
        zh: '熟悉 SFT 冷启动、拒绝采样及 PPO/GRPO 训练流程，具备终端 Agent 后训练实践。',
        en: 'Familiar with SFT cold starts, rejection sampling, and PPO/GRPO training workflows, with practical experience in terminal-agent post-training.'
      }
    },
    {
      id: 'skill-training',
      title: { zh: '训练与推理工程', en: 'Training and inference engineering' },
      description: {
        zh: '熟悉 verl、vLLM，具备双节点训练、NCCL 权重同步与显存配置优化经验。',
        en: 'Familiar with verl and vLLM, with experience in two-node training, NCCL weight synchronization, and GPU memory configuration.'
      }
    },
    {
      id: 'skill-evaluation',
      title: { zh: 'Agent 任务与评测', en: 'Agent tasks and evaluation' },
      description: {
        zh: '熟悉任务合成、执行校验与失败归因，具备 Harbor 框架及 Terminal-Bench 评测实践。',
        en: 'Familiar with task synthesis, execution validation, and failure attribution, with practical experience using Harbor and Terminal-Bench.'
      }
    },
    {
      id: 'skill-development',
      title: { zh: '编程与开发', en: 'Programming and development' },
      description: {
        zh: '熟悉 Python、PyTorch、Linux 与 Git，具备 Docker 容器化、沙箱并发管理与异步编程经验。',
        en: 'Familiar with Python, PyTorch, Linux, and Git, with experience in Docker containerization, sandbox concurrency management, and asynchronous programming.'
      }
    },
    {
      id: 'skill-english',
      title: { zh: '英语能力', en: 'English' },
      description: {
        zh: '大学英语四、六级。',
        en: 'College English Test Band 4 and Band 6 (CET-4 and CET-6).'
      }
    }
  ],
  projects: [
    {
      id: 'project-task-synthesis',
      title: {
        zh: '终端 Agent 训练任务的反向合成与质量筛查',
        en: 'Reverse Synthesis and Quality Screening of Terminal-Agent Training Tasks'
      },
      role: {
        zh: '负责会话反向重建与质量筛查；参与合成流水线与执行验证',
        en: 'Responsible for session reconstruction and quality screening; contributed to the synthesis pipeline and execution validation'
      },
      dates: { zh: '2026.06 - 2026.08', en: 'Jun 2026 - Aug 2026' },
      description: {
        zh: '终端 Agent 的后训练受限于可自动判分的任务供给：人工命题覆盖窄，模型直接出题又缺少可信校验。项目建设会话日志反向重建与文本种子合成两条任务线，统一产出指令、参考解、初始态测试、终态测试与容器环境，经质量筛查与执行验证累计落盘 9,820 条任务，7,200 条可解任务进入训练池。在同一冷启动 checkpoint 上做同预算 GRPO，完整任务池相对未经筛查的种子线任务池，held-out 通过率由 29.3% 提升至 32.6%。',
        en: 'Terminal-agent post-training is limited by the supply of automatically gradable tasks: manually authored tasks have narrow coverage, while direct model-generated tasks lack reliable validation. The project established two task-generation tracks, reverse reconstruction from session logs and synthesis from text seeds, producing a common set of instructions, reference solutions, initial-state tests, final-state tests, and container environments. Quality screening and execution validation yielded 9,820 stored tasks, of which 7,200 solvable tasks entered the training pool. With the same cold-start checkpoint and GRPO budget, the complete task pool achieved a held-out pass rate of 32.6%, compared with 29.3% for the unscreened seed-track pool.'
      },
      highlights: [
        {
          title: { zh: '会话日志的反向任务重建与回放校验', en: 'Reverse task reconstruction and replay validation' },
          description: {
            zh: '以编码 Agent 的真实会话为素材反向还原可执行任务，参考解由工具调用序列确定性转写，替代由模型重写解法引入的不一致。被编辑文件按完整读取、逆序回放编辑、部分读取三级优先重建编辑前后两态；不调用 LLM 的预检剔除编辑定位失败率超过 0.45 的会话。16,400 条会话中 76% 在合成前剔除，产出 2,320 条可执行任务。',
            en: 'Reconstructed executable tasks from real coding-agent sessions. Reference solutions were deterministically transcribed from tool-call sequences to avoid inconsistencies introduced by model-written solutions. Before-and-after states of edited files were reconstructed using three priorities: full-file reads, reverse replay of edits, and partial reads. An LLM-free precheck rejected sessions with an edit-location failure rate above 0.45. Of 16,400 sessions, 76% were filtered out before synthesis, yielding 2,320 executable tasks.'
          }
        },
        {
          title: { zh: '答案暴露嗅探与无效测试的模式扫描', en: 'Answer-leakage detection and invalid-test scanning' },
          description: {
            zh: '任务落盘前分别检查环境与测试，杜绝 agent 直接读取答案、空实现通过判分两类捷径。环境侧对答案类文件名、初始化脚本中写死的期望值与日志中的终态数值做语义嗅探，确定级退回、疑似级复核；测试侧以确定性模式扫描自比较断言、恒真条件与直接读取预期文件的比对，命中即拒绝。共拦截 4.2% 的环境暴露任务与 3.6% 的无效测试；同预算 GRPO 对照中，任务池经筛查后 held-out 通过率由 29.3% 提升至 30.8%。',
            en: 'Checked environments and tests before storing tasks to prevent two shortcuts: reading answers directly and passing grading with an empty implementation. Semantic checks targeted answer-like filenames, hard-coded expected values in initialization scripts, and final-state values in logs; confirmed leaks were rejected and suspected leaks were reviewed. Deterministic scans rejected self-comparison assertions, always-true conditions, and comparisons that directly read expected-output files. Screening blocked 4.2% of tasks for environment leakage and 3.6% for invalid tests. Under an equal GRPO budget, screening improved the held-out pass rate from 29.3% to 30.8%.'
          }
        },
        {
          title: { zh: '测试失败的双向归因与容器重验', en: 'Attributing failures to solutions or tests, with container revalidation' },
          description: {
            zh: '参考解未通过终态测试时，按结构化测试报告逐条判定缺陷位于解法还是测试，替代一律判为解法错误导致的整题误弃。解法缺陷进入下一轮修复；测试缺陷须过高置信门槛，修改后的测试在临时容器内同时满足参考解全过、初始态不误过，才允许覆盖原测试。oracle 失败任务中 19% 经测试修复重新入库，回收任务加入 RL 池后 held-out 通过率由 30.8% 提升至 31.5%。',
            en: 'When a reference solution failed final-state tests, structured test reports were used to identify whether each defect lay in the solution or the tests, avoiding wholesale rejection caused by treating every failure as a solution error. Solution defects entered another repair round. Test defects required a high-confidence decision, and replacement tests had to pass every reference-solution check while rejecting the initial state in a temporary container. Test repairs recovered 19% of oracle-failed tasks. Adding these recovered tasks to the RL pool improved the held-out pass rate from 30.8% to 31.5%.'
          }
        },
        {
          title: { zh: '五阶段合成流水线与阶段级校验', en: 'Five-stage synthesis pipeline with per-stage validation' },
          description: {
            zh: '任务描述与参考解、初始态测试、终态测试、容器环境、产物落盘五段串行生成，每段批量调用后做语法、结构与完整性校验，任一不满足即整条丢弃，使失败停在成本最低的阶段并可按阶段归因。两条任务线共用同一产物格式与校验入口，种子线 24,000 条候选的端到端留存率为 31%。',
            en: 'Generated tasks sequentially in five stages: task descriptions and reference solutions, initial-state tests, final-state tests, container environments, and artifact storage. Each batch was checked for syntax, structure, and completeness; a failed check discarded the task at the earliest stage to limit wasted cost and support stage-level attribution. Both tracks shared one artifact format and validation entry point. The seed track retained 31% of its 24,000 candidates end to end.'
          }
        },
        {
          title: { zh: 'oracle 回放与 pass@k 难度分桶', en: 'Oracle replay and pass@k difficulty bucketing' },
          description: {
            zh: '每条任务先回放参考解，判分全过才视为合法，再由独立解题模型在容器内多次采样，只保留至少解出一次的任务，通过次数同时作为训练侧的难度标签。采集侧把无轨迹或测试总数不超过一条的样本判为环境安装失败并重投，测试正常执行但全部失败的样本保留为有效负样本。oracle 通过率 90.5%，7,200 条可解任务进入训练池。',
            en: 'Replayed the reference solution first and accepted a task as valid only if all grading checks passed. An independent solver then sampled multiple attempts in a container; tasks solved at least once were retained, and the number of successful attempts served as a training difficulty label. Samples with no trajectory or at most one test were classified as environment-installation failures and retried. Samples whose tests ran normally but all failed were retained as valid negative examples. The oracle pass rate was 90.5%, and 7,200 solvable tasks entered the training pool.'
          }
        }
      ],
      links: [] as ResourceLink[]
    },
    {
      id: 'project-agent-training',
      title: {
        zh: '8B 终端 Agent 的 SFT 冷启动与双节点 GRPO 训练',
        en: 'SFT Cold Start and Two-Node GRPO Training for an 8B Terminal Agent'
      },
      role: {
        zh: '负责冷启动数据构建与远程沙箱执行后端；参与双节点训练配置与评测',
        en: 'Responsible for cold-start data construction and the remote sandbox execution backend; contributed to two-node training configuration and evaluation'
      },
      dates: { zh: '2026.08 - 至今', en: 'Aug 2026 - Present' },
      description: {
        zh: '在自建终端任务池（7,200 条可解任务）上训练 Qwen3-8B 终端 Agent。直接在基座上做 PPO 时约九成 rollout 没有 reward，228 步内验证集通过率停留在 4% 至 8%，因此改为 SFT 冷启动加 GRPO 的两段式训练，并把容器执行迁移到远程沙箱服务、训练扩展到双节点。自建 held-out 集（138 题，avg@4）通过率由 11.6% 提升至 32.6%，Terminal-Bench 2.0 avg@4 由 5.3% 提升至 11.8%。',
        en: 'Trained a Qwen3-8B terminal agent on a self-built pool of 7,200 solvable terminal tasks. Direct PPO training from the base model produced no reward for roughly 90% of rollouts, with the validation pass rate remaining between 4% and 8% over 228 steps. Training was therefore changed to an SFT cold start followed by GRPO, with container execution moved to a remote sandbox service and training extended to two nodes. The pass rate on a self-built held-out set of 138 tasks, measured by avg@4, improved from 11.6% to 32.6%; Terminal-Bench 2.0 avg@4 improved from 5.3% to 11.8%.'
      },
      highlights: [
        {
          title: { zh: 'reward 密度分桶与拒绝采样冷启动', en: 'Reward-density bucketing and a rejection-sampling cold start' },
          description: {
            zh: '先测 reward 密度再训练，替代在无信号的任务池上直接做 RL。按冷启动 checkpoint 的多次采样通过率对任务分桶，剔除全错与全对两端共 39% 的任务；冷启动数据从 teacher 轨迹中拒绝采样，主体为终态通过且过程无冗余调用的轨迹，另保留 20% 含失败与修复段的轨迹以维持 RL 阶段的探索多样性。冷启动使 held-out 通过率由 11.6% 提升至 26.1%。',
            en: 'Measured reward density before training instead of applying RL directly to a task pool with little learning signal. Tasks were bucketed by repeated-sampling pass rates from the cold-start checkpoint, removing the always-failing and always-passing extremes, which together accounted for 39% of tasks. Cold-start data were rejection-sampled from teacher trajectories, primarily retaining those that passed final-state tests without redundant calls. A further 20% of retained trajectories included failure-and-repair segments to preserve exploration diversity during RL. The cold start improved the held-out pass rate from 11.6% to 26.1%.'
          }
        },
        {
          title: { zh: '远程沙箱执行后端与异步调用桥接', en: 'Remote sandbox backend and asynchronous call bridging' },
          description: {
            zh: '容器执行由训练节点本地迁移到独立沙箱集群，消除 rollout 并发受单机限制、镜像构建争用训练节点 CPU 与磁盘两个瓶颈。同步的训练 step 接口与异步沙箱客户端之间由独立事件循环线程桥接，每次远程调用设硬超时；任务镜像预构建并缓存，网络策略按任务声明。rollout 并发容器数由 24 提升至 320，容器相关失败率由 8.9% 降至 0.8%。',
            en: 'Moved container execution from the training node to a separate sandbox cluster, addressing single-machine rollout-concurrency limits and CPU/disk contention from image builds. A dedicated event-loop thread bridged the synchronous training-step interface and the asynchronous sandbox client, with a hard timeout for each remote call. Task images were prebuilt and cached, and network policies followed task declarations. Concurrent rollout containers increased from 24 to 320, while container-related failures fell from 8.9% to 0.8%.'
          }
        },
        {
          title: { zh: '分置部署的 NCCL 权重同步与显存预算', en: 'NCCL weight synchronization and GPU memory budgeting' },
          description: {
            zh: '训练由单机扩展到双节点时，colocate 部署依赖的 CUDA IPC 权重同步无法跨节点，改为训练与推理分置部署、NCCL 广播同步权重，并显式指定 NCCL 使用的网卡。显存按反向传播中 log_softmax 的分配量（序列长 × 词表 × 4 字节）反算 batch、并发与生成长度上限，替代逐步缩减配置的试错。双节点有效吞吐为单机的 1.9 倍，单卡峰值显存收敛至 74GB 以内。',
            en: 'When extending training from one machine to two nodes, CUDA IPC weight synchronization used in colocated deployment could not span nodes. Training and inference were deployed separately, with NCCL broadcasts for weight synchronization and an explicitly selected network interface. Batch size, concurrency, and generation-length limits were calculated from the backward-pass log_softmax allocation, sequence length × vocabulary size × 4 bytes, rather than reduced through trial and error. Effective two-node throughput reached 1.9 times the single-machine throughput, with peak memory usage below 74 GB per GPU.'
          }
        },
        {
          title: { zh: 'GRPO 零方差组监控与 rollout 规模消融', en: 'Monitoring zero-variance groups and ablating rollout scale' },
          description: {
            zh: 'GRPO 以组内标准化 advantage 替代 critic，组内全对或全错时 advantage 恒为零，因此把零方差组占比作为与 reward 同级的监控指标，按批统计并以采样温度与难度配比调整。消融显示 rollout 规模（每步 prompt 数 × 组大小）对通过率的影响大于学习率与 KL 系数，调参顺序据此改为先定 rollout 规模、再调轮数与生成长度、最后调学习率。零方差组占比由 23% 降至 6%。',
            en: 'GRPO uses group-normalized advantages instead of a critic; advantages become zero when all samples in a group are correct or all are incorrect. The proportion of zero-variance groups was therefore monitored alongside reward, measured per batch, and adjusted through sampling temperature and the task-difficulty mix. Ablations showed that rollout scale, prompts per step × group size, affected pass rate more than the learning rate or KL coefficient. Tuning consequently prioritized rollout scale, followed by training rounds and generation length, and finally the learning rate. The proportion of zero-variance groups fell from 23% to 6%.'
          }
        },
        {
          title: { zh: 'held-out 评测协议对齐与错误分类', en: 'Held-out evaluation protocol alignment and error classification' },
          description: {
            zh: '评测前先回放参考解验证环境，评测 agent 与训练使用同一交互协议，避免环境故障与格式退化被计为能力下降。失败按超时、上下文溢出、协议解析失败与真实解题失败四类归因：前两类按工程问题整改，后两类进入数据与训练改进清单。协议对齐使训练后模型的解析失败率由 6.1% 降至 1.3%，两轮错误分类定位出 3 类需补数据的任务形态。',
            en: 'Validated environments by replaying reference solutions before evaluation, and used the same interaction protocol for evaluation and training so environment failures and format degradation would not be mistaken for reduced capability. Failures were classified into timeouts, context overflow, protocol-parsing errors, and genuine task-solving failures. The first two were addressed as engineering issues; the latter two informed data and training improvements. Protocol alignment reduced the trained model’s parsing-failure rate from 6.1% to 1.3%. Two rounds of error classification identified three task categories needing additional data.'
          }
        }
      ],
      links: [] as ResourceLink[]
    }
  ],
  internships: [] as InternshipEntry[],
  publications: [] as PublicationEntry[]
}
