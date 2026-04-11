const NOTES = {
    "AP Biology": {
        color: "#7c74d8",
        units: {
            "Unit 1: Chemistry of Life": {
                tags: ["characteristics of life", "feedback", "scientific method", "chemistry", "macromolecules"],
                content: `
                    <h2 id="h-life">Chapter 1A: A View of Life - Overview</h2>
                    <h3>Characteristics of Life</h3>
                    <ul>
                        <li>Organized and made of at least one cell</li>
                        <li>Acquire/use materials and energy from the original source of the sun to do work and carry out all cellular processes <strong>metabolism</strong></li>
                        <li>Maintain <strong>homeostasis</strong> (stable internal balance) through negative feedback mechanisms</li>
                        <li>Respond to stimuli in environment (ex: heat, sun, plants growing against the force of gravity)</li>
                        <li>Reproduce, grow, and develop by passing on genetic info/DNA to the next generation, which is crucial for a species but not an individual</li>
                        <li>Evolve and adapt: changing environments cause populations (not individuals) to adapt/modify to function better with favorable variations selected for</li>
                    </ul>

                    <h3>Levels of Organization</h3>
                    <p>Atoms --> Molecule (2+ atoms of same/different elements) --> Cell --> Tissue --> Organ --> Organ System --> Organism (an individual) --> Population (organisms of same species in an area) --> Community (interacting living populations in an area) --> Ecosystem (living + nonliving in a particular area) --> Biome (same ecosystems all over the world) --> Biosphere (Earth)</p>

                    <h3>Feedback Mechanisms</h3>
                    <p>Used to maintain internal environments in response to internal/external changes</p>
                    <div>
                    <div>
                        <p><strong>Negative Feedback Mechanisms</strong></p>
                        <ul>
                            <li>Maintain homeostasis by keeping variables close to the target set point (ex: body temperature, blood glucose/pH, thermoregulation through sweating/shivering)</li>
                            <li>Body reacts to environment</li>
                            <li>Sensors detect environmental changes causing body imbalance, control/regulatory centers initiate actions to bring conditions back to normal, then once its normal, inhibitory mechanisms reverse these actions to avoid overcorrection</li>
                            <li>Dynamic equilibrium</li>
                            <li><strong>Thermoregulation:</strong> higher temperature = faster molecules = faster reactions and metabolism</li>
                            <li>Endotherms: warm-blooded, warmed by internal metabolic processes</li>
                            <li>Exotherms: cold-blooded, gaining heat from external synthesis w/ little metabolic heat</li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Positive Feedback Mechanisms</strong></p>
                        <ul>
                            <li>Mechanism amplifying a change and achieving a goal (NOT homeostasis or equilibrium)</li>
                            <li>Conditions moved further and further from initial set point as response gets intense, until an endpoint is reached which stops process</li>
                            <li>Usually some hormone or impulse causing the mechanism</li>
                            <li>Ex: labor onset / childbirth, breastfeeding, blood platelet activation, fruit ripening</li>
                        </ul>
                    </div>
                    </div>

                    <h3>Scientific Method</h3>
                    <ol>
                        <li>Make observations</li>
                        <li>Pose a specific testable measurable question w/ one independent manipulated variable</li>
                        <li>Research the question</li>
                        <li>Formulate a working testable hypothesis as a statement (no words like proved/disproved, use supported/rejected/refuted/reformed)</li>
                        <li>Repeatable controlled experiment w/ multiple trials/test subjects and large sample size (n) for more accurate results, only one variable altered at a time
                            <ul>
                                <li>Controls/constants - controlled variables kept identical in all setups</li>
                                <li>Control groups - standard of comparison to validate experimental results
                                    <ul>
                                        <li>Negative control - show what happens when IV is absent or has no effect to ensure no contamination, confounders, or false positives/placebos</li>
                                        <li>Positive control - show what a known measurable response looks like to ensure experiment is working properly, no false negatives</li>
                                    </ul>
                                </li>
                                <li>Experimental groups - groups that get experimental treatment</li>
                                <li>Independent variable - manipulated variable by experimenter on x-axis</li>
                                <li>Dependent variable - variable that changes/responds to IV on y-axis</li>
                            </ul>
                        </li>
                        <li>Data collection/experimental observations through quantitative (numerical) and qualitative (descriptive) data</li>
                        <li>Data analysis through graphs, charts, tables, and stats</li>
                        <li>Make a conclusion w/o using prove/disprove, use supported/rejected/refuted</li>
                        <li>Communicate findings through peer-reviewed journals</li>
                    </ol>

                <h3>Graphs</h3>
                <p>Appropriate specific title (ex: The Effect of IV on DV), axes labels w/ units, key/legend, consistent appropriate scale w/ equal increments including the first increment (origin does not have to start at zero, breaks sometimes allowed, labeling the corner as 0 is for both x and y axis)</p>
                <div>
                    <div>
                        <p><strong>Line Graph</strong></p>
                        <ul>
                            <li>Show relationship between 2 numerical, continuous variables</li>
                            <li>Visualize DV changes over time or across a gradient like temperature, distance, or pH</li>
                            <li>Data usually in a specific order</li>
                            <li>Points connected by a line, sometimes each point represents mean value w/ error bars</li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Scatter Plot</strong></p>
                        <ul>
                            <li>Show relationships between 2 numerical, continuous variables</li>
                            <li>No inherent x-value order given on data table</li>
                            <li>Often used to look for correlation/association</li>
                            <li>Data points shouldn't be connected & are often scattered across graph</li>
                            <li>Trend line shows overall direction of relationship of correlation (can be curved but shouldn't extend past provided points)</li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Bar Graph</strong></p>
                        <ul>
                            <li>Compare differences in dependent variable across categories/groups</li>
                            <li>Bars don't touch</li>
                            <li>Bar can represent mean value w/ error bars</li>
                            <li>Error bars = +/- 2 standard error of the means</li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Histogram</strong></p>
                        <ul>
                            <li>Display distribution of data showing central tendencies/spread (often looks like a bell curve)</li>
                            <li>Uniform range intervals</li>
                            <li>Bars touch</li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Pie Chart</strong></p>
                        <ul>
                            <li>Compare different percentages/parts of a whole</li>
                            <li>Representative of proporition to full dataset</li>
                            <li>Usually categorical</li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Log Scale (Semi-Log) Graphs</strong></p>
                        <ul>
                            <li>Uses logarithmic nonlinear scale if data spans very large quantities</li>
                            <li>Compress large range into small graph</li>
                            <li><em>The numbers with a 1, from low to high, are what you count from, and what you count by</em></li>
                            <li>Count by the same increment of 10 until the next multiple of 10</li>
                            <li>Value of a point between two tick marks is geometric mean of tickmark values: sqrt(xy), or you can approximate by being about half the average between the lines</li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Dual Y-Axes Graphs</strong></p>
                        <ul>
                            <li>Used to portray two different dependent variables w/ different units or measurement/number ranges/magnitudes</li>
                            <li>Labels on both ends, key showing different colors</li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Box and Whisker Plots</strong></p>
                        <ul>
                            <li>Compare spread and distribution summary on an interval</li>
                            <li>Show skewed data or outliers, median/middle value, range, and interquartile range (show how spread out data is)</li>
                            <li>Can be horizontal or vertical</li>
                            <li>Start line = lower extreme (min), start of box = lower quartile (Q1), middle of box = median (Q2), end of box = upper quartile (Q3), end line = upper extreme (max), whiskers = range of data, length of box=interquartile range (IQR), points outside whiskers = outliers
                                <ul>
                                    <li>Q1 and Q3 are medians of the lower and upper halves of dataset</li>
                                    <li>Outliers can be represented as single data points outside the box/whiskers</li>
                                </ul>
                            </li>
                    </div>
                </div>
                
                <h2>Chapter 1B: Math & Statistical Applications</h2>
                <ul>
                    <li>Metric System: KHDUDCM**M**N</li>
                    <li>Mean/average = sum of all data points / # of items</li>
                    <li>Median/middle value = middle value of dataset of average of 2 middle vales</li>
                    <li>Mode = most frequent value in dataset</li>
                    <li>Range = difference between max-min</li>
                    <li><strong>Standard Deviation</strong>: measure of how far spread out a dataset is or how much it deviates/how far away it is from the mean
                        <ul>
                            <li>Higher SD = most data points are further from mean</li>
                            <li>Higher range = higher standard deviation</li>
                            <li>Zero = all values are identical</li>
                            <li>Formula on reference table: xi = value of one point, x with line over = mean, sigma = sum, n=sample size</li>
                            <li>68-95-99.7 (+- 1 std is 68%, +-2std is 95%, +-3std is 99.7% of mean) - empirical normal distribution or bell curve</li>
                        </ul>
                    </li>
                    <li><strong>Standard Error</strong>: measure how well the sample mean match up to the true population mean
                        <ul>
                            <li>Measure variation in sample means of datasets from the same population</li>
                            <li>Formula on reference table: s=standard deviation, n=sample size</li>
                            <li>Higher standard deviation = higher standard error</li>
                            <li>Error bars = +/- 2SEm above and below the bar or dot which is the mean (95% CI)
                                <ul>
                                    <li>Shows statistical significance - if the bars overlap its insignificant</li>    
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><strong>Null Hypothesis</strong>: statistical hypothesis that states that any difference between 2 factors is purely due to chance and there is no causal statistically significant relationship between 2 variables.
                        <ul>
                            <li>Or if the scenario presents statistical expectation, null hypothesis assumes outcome = statistical expectation</li>
                            <li>If results are significant, the null hypothesis is rejected, statistically significant difference :)</li>
                            <li>If results are insignificant, the null hypothesis fails to be rejected, no statistically significant difference :(</li>
                            <li>Not the same as experimental hypothesis</li>
                        </ul>
                    </li>
                    <li><strong>Chi-Square Analysis</strong>: evaluate null hypothesis and see if difference in observation is significant or not in categorical data
                        <ul>
                            <li>Formula on reference table (o=observed value, e=expected value, x^2=chi square value)</li>
                            <li>Compare this value to critical chi square value table that corresponds to pvalues based on degrees of freedom</li>
                            <li>Degrees of freedom = # of outcomes/categories - 1</li>
                            <li>P-value = value between 0 and 1 determining significance, smaller (less than 0.05) is 95% CI significant</li>
                            <li>Critical chi-square values - values to use as benchmarks to compare your chi-square value at p=0.05 and p=0.01
                                <ul>
                                    <li>if value smaller than corresponding critical value  = fail to reject null</li>
                                    <li>if your chisquare is bigger = null is rejected</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
        `
            }
        }
    }
}