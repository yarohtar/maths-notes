Let $X$ be a [[Foundations/Well-ordered]] set and $Y$ be an arbitrary set.
Then for any [[Foundations/Function]] $G:\mathcal{P}(X\times Y)\to Y$ there is unique $f:X\to Y$ such that
$$
\forall x\in X\quad %quad
f(x)=G(f|_{I_{x}})
$$
where $I_{x}$ is the [[Foundations/Initial Segment]].

### Theorem
Say $h$ is an attempt if $h$ is a function $I\to Y$ 
where the domain of $h$ is an [[Foundations/Initial Segment]] $I$ of $X$ and 
$$
(\forall x\in dom(h))\ h(x)=G(h|_{I_{x}})
$$
(Note that $I_{x}\subseteq dom(h)$)

WTS that there is a unique attempt whose domain is $X$

We first show that if $h,h'$ are attempts, then $h(x)=h'(x)$ for all $x\in dom(h)\cap dom(h')$ by [[Foundations/Proof by Induction]].

Fix $x\in dom(h)\cap dom(h')$
Assume $h(y)=h'(y)$ for all $y<x$ (induction hypothesis)
(Note that $dom(h)\cap dom(h')$ is an initial segment of $X$)
We have $h(x)=G(h|_{I_{x}})=G(h'|_{I_{x}})=h'(x)$

To complete the proof of existence, we let 
$$
f=\bigcup \{ h:h\text{ is an attempt} \}
$$
Now just check that this is a [[Foundations/Function]] and check that $f$ is an attempt.
To find the domain of $f$: 
If $dom(f)\neq X$ then $dom(f)=I_{x}$ for some $x\in X$
So there is no attempt defined at $x$ 
but we know how to do one step extension so this is untrue

