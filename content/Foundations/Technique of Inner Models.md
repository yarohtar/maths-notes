The [[Constructible Hierarchy]] $L$ is the [[Constructible Model of Set Theory]]:

$$
L\models ZF
$$

Also, by [[Consistency of Choice]]:

$$
L\models ZFC
$$

Furthermore $L$ is [[Transitive Model|Transitive]] and [[Axiom of Constructability]] is [[Satisfied]]:

$$
L\models (V=L)
$$

We now prove stuff inside of $L$.

### Lemma (main idea)

For every $x\subseteq \mathbb{N}$, $x\in L$, there is some $\alpha<\omega_{1}$ such that $x\in L_{\alpha}$.

#### Proof

We work in $L$, which is a [[Model]] of $ZFC$.
Let $B_{x} = \mathbb{N}\cup \{ x \}$ and note that this is a [[Foundations/Set Theory/Transitive|Transitive]] set.
Find $\nu$ large enough by [[Lévy Reflection Theorem]]
such that $x\in L_{\nu}$ and $\sigma$ is absolute between $L_{\nu}$ and $L$
where $\sigma$ is from [[Gödel's Condensation Lemma]].
Because $L\models \sigma$, we get $L_{\nu}\models \sigma$.
Now using [[The Downward Löwenheim-Skolem Theorem]]
find countable $M$ such that $B_{x}\subseteq M\subseteq L_{\nu}$ with $\sigma$ [[Absolute]] between $M$ and $L_{\nu}$.
So $M\models \sigma$ and $M$ is countable.
Form the [[Transitive Model|Transitive]] $N\cong M$ by [[Mostowski's Collapsing Theorem]].
Then by [[Gödel's Condensation Lemma]], there is some $\alpha$ such that $N=L_{\alpha}$
Since $N$ is countable, so is $L_{\alpha}$.
But $\lvert L_{\alpha} \rvert=\lvert \alpha \rvert$, so it has to be $\alpha<\omega_{1}$.

### Theorem

[[The Continuum Hypothesis]] holds in $L$:

$$
L\models ZFC+CH
$$

#### Proof

By the previous lemma, all subsets of $\mathbb{N}$ are contained in $L_{\omega_{1}}$.
Furthermore, $\lvert L_{\omega_{1}} \rvert=\lvert \omega_{1} \rvert$.
Thus the powerset of $\mathbb{N}$ is of cardinality at most $\lvert \omega_{1} \rvert$.
