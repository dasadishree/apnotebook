const NOTES = {
    "AP Biology": {
        units: {
            "Unit 1: Chemistry of Life": {
                tags: ["characteristics of life", "feedback", "scientific method", "chemistry", "macromolecules"],
                content: `
                    <h2 id="h-ch1a">Chapter 1A: A View of Life — Overview</h2>
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
                    <div class="note-grid-2">
                        <div class="note-card">
                            <p class="note-card-title">Negative feedback</p>
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
                        <div class="note-card">
                            <p class="note-card-title">Positive feedback</p>
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
                <div class="graph-grid">
                    <div class="graph-cell note-card-muted">
                        <p>Line graph</p>
                        <ul>
                            <li>Show relationship between 2 numerical, continuous variables</li>
                            <li>Visualize DV changes over time or across a gradient like temperature, distance, or pH</li>
                            <li>Data usually in a specific order</li>
                            <li>Points connected by a line, sometimes each point represents mean value w/ error bars</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Scatter plot</p>
                        <ul>
                            <li>Show relationships between 2 numerical, continuous variables</li>
                            <li>No inherent x-value order given on data table</li>
                            <li>Often used to look for correlation/association</li>
                            <li>Data points shouldn't be connected & are often scattered across graph</li>
                            <li>Trend line shows overall direction of relationship of correlation (can be curved but shouldn't extend past provided points)</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Bar graph</p>
                        <ul>
                            <li>Compare differences in dependent variable across categories/groups</li>
                            <li>Bars don't touch</li>
                            <li>Bar can represent mean value w/ error bars</li>
                            <li>Error bars = ±2 standard error of the means</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Histogram</p>
                        <ul>
                            <li>Display distribution of data showing central tendencies/spread (often looks like a bell curve)</li>
                            <li>Uniform range intervals</li>
                            <li>Bars touch</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Pie chart</p>
                        <ul>
                            <li>Compare different percentages/parts of a whole</li>
                            <li>Representative of proportion to full dataset</li>
                            <li>Usually categorical</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Log scale (semi-log)</p>
                        <ul>
                            <li>Uses logarithmic nonlinear scale if data spans very large quantities</li>
                            <li>Compress large range into small graph</li>
                            <li><em>The numbers with a 1, from low to high, are what you count from, and what you count by</em></li>
                            <li>Count by the same increment of 10 until the next multiple of 10</li>
                            <li>Value of a point between two tick marks is geometric mean of tickmark values: √(xy), or you can approximate by being about half the average between the lines</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Dual Y-axes</p>
                        <ul>
                            <li>Used to portray two different dependent variables w/ different units or measurement/number ranges/magnitudes</li>
                            <li>Labels on both ends, key showing different colors</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Box and whisker</p>
                        <ul>
                            <li>Compare spread and distribution summary on an interval</li>
                            <li>Show skewed data or outliers, median/middle value, range, and interquartile range (show how spread out data is)</li>
                            <li>Can be horizontal or vertical</li>
                            <li>Start line = min; start of box = Q1; middle = median (Q2); end of box = Q3; end line = max; whiskers = range; box length = IQR; points outside = outliers
                                <ul>
                                    <li>Q1 and Q3 are medians of the lower and upper halves of dataset</li>
                                    <li>Outliers can be represented as single data points outside the box/whiskers</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <h2 id="h-ch1b">Chapter 1B: Math & Statistical Applications</h2>
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
                        </ul>
                        <div class="note-grid-2" style="margin:10px 0;">
                            <div class="note-card">
                                <p class="note-card-title">Results are significant</p>
                                <p style="margin:0;font-size:13px;">Null hypothesis is <strong>rejected</strong> — statistically significant difference.</p>
                            </div>
                            <div class="note-card">
                                <p class="note-card-title">Results are insignificant</p>
                                <p style="margin:0;font-size:13px;">Null hypothesis <strong>fails to be rejected</strong> — no statistically significant difference.</p>
                            </div>
                        </div>
                        <p style="font-size:12.5px;color:var(--ink3);margin-top:6px;">Not the same as the experimental hypothesis.</p>
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

                <h2 id="h-ch2a">Chapter 2A: Basic Chemistry Review</h2>
                <ul>
                    <li><strong>Matter:</strong> anything that takes up space and has mass</li>
                    <li><strong>Atom:</strong> smallest simplest unit of a substance that can't be broken down chemically or physically (+1 protons and 0 neutrons in nucleus, -1 electrons in orbitals surrounding)
                        <ul>
                            <li>If neutral, proton # = electron # (otherwise its an ion)</li>
                            <li>Protons and neutrons have 1amu mass, electrons have 1/1836amu mass (~0)</li>
                            <li>Valence electrons - electrons in valence outermost electron shell determining reactivity</li>
                            <li>Top left number is mass # (protons+neutrons), bottom left # is atomic number (# of protons which is the atom's identity)</li>
                            <li>Isotopes - atoms of same element w/ same proton number but different neutron number of mass number
                                <ul>
                                    <li>Radioisotopes — unstable nucleus, decay and emit radiation; fossil dating, radiolabeling (tracers), radiotherapy (ex: C-14, Tc-99; I-131, Co-60 for therapy)</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><strong>Element:</strong>substance composed of all same type of atom (periodic table elements). CHONP is most abundant elements, with all organic compounds having C</li>
                    <li><strong>Compound:</strong> substance w/ 2 or more different chemically bonded atoms</li>
                    <li><strong>Molecule:</strong> 2 or more nonmetal atoms chemically bonded</li>
                    <li>Some substances are both compounds and molecules (different nonmetals bonded), some are only molecules (diatomics), some are only compounds (ionic compounds)</li>
                    <li><strong>Mixture</strong>: 2 or more different substances combined physically not chemically
                        <ul>
                            <li>Molarity (M) shows how concentrated solutions are (higher molarity = more concentrated)</li>
                        </ul>
                    </li>
                    <li>Memorize: PO4^3- is phosphate, NH3 is ammonia</li>
                </ul>

                <h3>Bonding</h3>
                <ul>
                    <li>Atoms bond (gain/lose/share) to complete their valence shell and form an octet of 8 valence electrons (H and He only need 2) — octet rule</li>
                    <li>Right side / nonmetals gain electrons, left side/metals lose electrons</li>
                    <li><strong>Electronegativity</strong> — atom's tendency to attract electrons; F is most electronegative (top right on periodic table = more EN; bottom left = least)</li>
                    <li>Losing electrons makes charge more positive; gaining electrons makes charge more negative</li>
                    <li>Greater EN difference = more polar bond; ionic bond if difference &gt; 1.7</li>
                </ul>
                <div class="callout">Greater EN difference → more polar. Ionic bond if EN difference &gt; 1.7.</div>
                <div class="note-grid-3">
                    <div class="note-card">
                        <p class="note-card-title">Ionic</p>
                        <ul>
                            <li>Transfer of electrons, usually metal + nonmetal; EN difference &gt; 1.7</li>
                            <li>Ion = charged particle where proton # ≠ electron #</li>
                            <li>Ex: NaCl → Na⁺ and Cl⁻</li>
                        </ul>
                    </div>
                    <div class="note-card">
                        <p class="note-card-title">Polar covalent</p>
                        <ul>
                            <li>Unequal sharing between 2 different nonmetals</li>
                            <li>Higher EN atom pulls more → partial negative (δ−); other atom → partial positive (δ+)</li>
                        </ul>
                    </div>
                    <div class="note-card">
                        <p class="note-card-title">Nonpolar covalent</p>
                        <ul>
                            <li>Equal sharing between 2 same nonmetals (diatomics); no EN difference</li>
                        </ul>
                    </div>
                </div>
                <h3>Molecule polarity: SNAP</h3>
                <ul>
                    <li><em>Symmetrical molecules are nonpolar, asymmetrical molecules are polar</em></li>
                    <li>Shape and charge distribution of entire molecule affects molecule polarity</li>
                </ul>
                
                <h2 id="h-ch2b">Chapter 2B: More Basic Chemistry</h2>
                <ul>
                    <li>Intramolecular forces like ionic/covalent bonding are within a molecule/compound</li>
                    <li>Intermolecular forces are between molecules/compounds like hydrogen bonding, dipole-dipole attractions, van der waals forces, and London dispersion forces</li>
                </ul>
                <h3>Hydrogen bonding</h3>
                <ul>
                    <li>Strongest type of <em>inter</em>molecular force but weaker than intramolecular forces</li>
                    <li>Attraction between partially positive hydrogen of one molecule and a small, highly electronegative partially negative atom in another (typically F, O, N)</li>
                    <li>Water, NH₃, and HF are capable of hydrogen bonding</li>
                    <li>Molecule can H-bond if: polar/has polar bonding, has a partially positive H, and has at least one F, O, or N</li>
                </ul>

                <h3>Properties of water</h3>
                <p>Life depends on water.</p>
                <p><strong>Structure:</strong> polar covalent bonding between O and H; polar/asymmetrical molecule; hydrogen bonding between molecules → unique properties.</p>
                <div class="note-grid-2">
                    <div class="note-card-muted">
                        <p class="note-card-title">High specific heat</p>
                        <p style="margin:0;font-size:12.5px;">Lots of energy needed to raise temperature because H-bonds must be broken first. Helps organisms maintain stable internal body temperature (homeostasis).</p>
                    </div>
                    <div class="note-card-muted">
                        <p class="note-card-title">High heat of vaporization</p>
                        <p style="margin:0;font-size:12.5px;">Lots of energy needed liquid → gas. Enables evaporative cooling (sweating) and stable body temperature.</p>
                    </div>
                    <div class="note-card-muted" style="grid-column:1/-1;">
                        <p class="note-card-title">Cohesion, adhesion &amp; surface tension</p>
                        <p style="margin:0;font-size:12.5px;"><strong>Cohesion</strong> — attraction between same molecules. <strong>Adhesion</strong> — attraction between different molecules. <strong>Surface tension</strong> — surface molecules pulled inward. Enables capillary action, transpiration, blood flow, meniscus, insects on water.</p>
                    </div>
                    <div class="note-card-muted">
                        <p class="note-card-title">Ice less dense than liquid</p>
                        <p style="margin:0;font-size:12.5px;">Ice has fewer molecules per volume — stable H-bonds spread molecules apart. Lets aquatic life survive under ice (D = m/V).</p>
                    </div>
                    <div class="note-card-muted">
                        <p class="note-card-title">Water as solvent</p>
                        <p style="margin:0;font-size:12.5px;">Polar water dissolves polar/ionic (<strong>hydrophilic</strong>); like dissolves like — nonpolar ↔ nonpolar (<strong>hydrophobic</strong>). Phospholipids are <strong>amphipathic</strong> (polar head, nonpolar tails) → selectively permeable membranes.</p>
                    </div>
                </div>

                <h3>Acids &amp; bases</h3>
                <div class="note-grid-2" style="margin-bottom:10px;">
                    <div class="note-card">
                        <p class="note-card-title">Acids</p>
                        <p style="margin:0;font-size:12.5px;">Yield/donate H⁺ in solution. pH &lt; 7.</p>
                    </div>
                    <div class="note-card">
                        <p class="note-card-title">Bases</p>
                        <p style="margin:0;font-size:12.5px;">Yield/donate OH⁻ or accept H⁺. pH &gt; 7.</p>
                    </div>
                </div>
                <ul>
                    <li><strong>pH Scale</strong>: measures acidity/basicity of solution or concentration of H+, where 7=neutral, high=basic(lessH+), low=acidic(moreH+), and each unit is a 10-fold change in H+ concentration since pH=-log(H+)</li>
                    <li>Buffers - keep pH in normal (not necessarily neutral) limits by taking up excess H+ and OH- so drastic changes don't occur. Ex: Blood buffers like carbonic acid (weak acid) or bicarbonate (weak base) keeps blood pH at 7.4 since enzymes can denature if pH changes</li>
                </ul>

                <h2 id="h-ch3">Chapter 3: Biochemistry</h2>
                <h3>Organic Compounds</h3>
                <ul>
                    <li>Compounds containing carbon and hydrogen, basis of all living organisms</li>
                    <li>Carbohydrates, lipids, proteins, nucleic acids</li>
                    <li>Carbon useful since it's small, has 4 valence electrons, shares electrons to form 4 covalent bonds making stable molecules, forms single/double/triple bonds w itself creating chains or rings or bonds w other abundant elements (CHONPS)</li>
                    <li>Most basic category of organic compounds: hydrocarbons containing only C and H which are all nonpolar and hydrophobic</li>
                    <li><strong>Functional groups</strong>: enhance diversity of organic molecules giving function, polarity, properties, replacng one or more H atoms (ex: -OH hydroxyl group, -COOH carboxyl group, -NH2 amino group, phosphate group). Ex: testosterone vs estrogen are both steroid hormone lipids w different functional groups.</li>
                    <li><strong>Isomers</strong>: same molecular formula but different structures and properties. Ex: glucose (H on top, hexagon, cell energy broken down during cell respiration for ATP), fructose (pentagon fruit and food sweetener), galactose (OH on top, hexagon, sugar less sweet than glucose/fructose, can be combined w glucose to form lactose milk sugar, can be found outside cell membrane to play role in cell-cell recognition and identity markers) all have C6H12O6 formula</li>
                </ul>
                
                <h3>Reactions making/breaking polymers</h3>
                <p>Monomers are individual repeating subunits in biomolecules, linked through covalent bonds to form a polymer (many subunits together).</p>
                <div class="note-grid-2">
                    <div class="note-card">
                        <p class="note-card-title">Dehydration synthesis</p>
                        <p style="margin:0;font-size:12.5px;"><strong>Anabolic</strong> — monomers joined by removing water (polymerization). Requires energy.</p>
                    </div>
                    <div class="note-card">
                        <p class="note-card-title">Hydrolysis</p>
                        <p style="margin:0;font-size:12.5px;"><strong>Catabolic</strong> — bonds broken by adding water. Releases energy overall.</p>
                    </div>
                </div>

                <h3>Carbohydrates</h3>
                <ul>
                    <li>Quick energy, sugars, rice, bread, pasta</li>
                    <li>CHO in a 1:2:1 or close ratio</li>
                    <li>Generally polar & soluble in water b/c of many OH functional groups</li>
                    <li>Monomer: monosaccharide (simple single sugar) linked together through covalent bonds called glycosidic linkage</li>
                    <li><strong>Monosaccharides:</strong> provide immediate energy for cell processes, mostly in ring shape but sometimes linear. Ex: 6 carbon sugars like glucose, fructose, galactose (cell identity marker) which are isomers of C6H12O6, or 5 carbon sugars like deoxyribose (DNA) and ribose (RNA)</li>
                    <li><strong>Disaccharides:</strong> double sugars which are 2 monosacchardies joined by dehydration synthesis. Provide semi-immediate energy when broken to monosacchardies. Ex: glucose+glucose=maltose, glucose+fructose=sucrose(table sugar), glucose+galactose=lactose(milk sugar)</li>
                            <li><strong>Polysaccharides:</strong> long-term energy storage &amp; structural support
                        <ul>
                            <li>Structural variations (shape and bonding) affect function; H-bonding increases strength; helical shapes expose linkages to enzymes</li>
                        </ul>
                        <div class="note-grid-2" style="margin:10px 0;">
                            <div class="note-card-muted">
                                <p class="note-card-title">Energy storage</p>
                                <ul style="margin:0;padding-left:16px;font-size:12.5px;">
                                    <li><strong>Starch</strong> — glucose storage in plants; digestible by humans</li>
                                    <li><strong>Glycogen</strong> — glucose storage in animals (liver &amp; muscles)</li>
                                </ul>
                            </div>
                            <div class="note-card-muted">
                                <p class="note-card-title">Structural support</p>
                                <ul style="margin:0;padding-left:16px;font-size:12.5px;">
                                    <li><strong>Cellulose</strong> — plant cell walls; not digestible by humans</li>
                                    <li><strong>Chitin</strong> — fungi cell walls; crustacean exoskeletons</li>
                                </ul>
                            </div>
                        </div>
                    </li>   
                </ul>

                <h3>Lipids</h3>
                <ul>
                    <li>CHO not in 1:2:1 ratio and sometimes P</li>
                    <li>nonpolar, fats, oils, butter</li>
                    <li>Generally insoluble/nonpolar bc of long hydrocarbon chains</li>
                    <li>No monomer subunit</li>
                    <li>Ester linkage covalent bonds link lipid components together for triglycerides and phospholipids only</li>
                    <li><strong>Triglycerides</strong>(fats/oils): CHO
                        <ul>
                            <li>Main function: long term energy storage and insulation. Made of 1 glycerol and 3 fatty acids linked together</li>
                            <div class="note-grid-2" style="margin:8px 0;">
                                <div class="note-card-muted">
                                    <p class="note-card-title">Saturated fatty acids</p>
                                    <p style="margin:0;font-size:12.5px;">Single bonds; fully surrounded by H. Solid at room temp. Linked to cardiovascular issues. Ex: animal fats, butter.</p>
                                </div>
                                <div class="note-card-muted">
                                    <p class="note-card-title">Unsaturated fatty acids</p>
                                    <p style="margin:0;font-size:12.5px;">≥1 double bond → kinks. Generally liquid at room temp. Ex: plant oils (corn oil).</p>
                                </div>
                            </div>
                        </ul>
                    </li>
                    <li><strong>Phospholipids</strong>: CHOP
                        <ul>
                            <li>Main function: plasma membrane components</li>
                            <li>Structure: phosphate group PO4^3 & glycerol making up the polar hydrophillic head, 2 fatty acids nonppolar hydrophobic tails</li>
                            <li>Membrane fluidity maintained by fatty acids, since saturated fatty acids in hotter environments prevent fluidity and unsaturated/kinky fatty acids in colder environments prevent rigidity (less fluid = less permeable)</li>
                            <li>Phospholipid bilayer w nonpolar tails facing each other and polar heads facing outside since internal/external environments are mostly water so this is stable configuration</li>
                            <li>SELECTIVE PERMEABILITY: small nonpolar molecules easily pass, small polar molecules sometimes cross but usually need help from transport proteins. Ions & larger polar molecules either don't cross or need help from transport proteins. Large macromolecules like starch, proteins, and DNA don't pass since they are too big and need bulk transport, not even trasnport protein.</li>
                        </ul>
                    </li>
                    <li><strong>Steroids</strong>: CHO
                        <ul>
                            <li>Steroid - hormones that act as intracellular ligands/signalling molecules to help cells communicate</li>
                            <li>Ex: sex hormones like testosterone/estrogen help develop male/female reproductive organs and secondary sex characteristics, stress hormones like cortisol sends signals breaking down carbs/fats for energy</li>
                            <li>Cholesterol - steroid and another cell membrane component keeping membrane appropriately fluid (stabilize at high temps through weak hydrophobic fatty acid tail interactions, prevent phospholipid stiffness at lowtemps). Precursor to sex hormone production. Too much cholesterol = hydrophobic so can cause circulation disorders</li>
                            <li>Structure: four fused carbon rings: functional groups on ends add diversity</li>
                        </ul>
                    </li>
                    <li><strong>Waxes</strong>: CHO
                        <ul>
                            <li>Protection & excessive waterloss prevention since they're hydrophobic</li>
                            <li>Structure: long chain fatty acids bonded to long chain alcohols</li>
                            <li>Ex: earwax traps dust/dirt from entering ear canal, waxy plant leaf coating prevents water loss</li>
                        </ul>
                    </li>
                </ul>

                <h3>Proteins</h3>
                <ul>
                    <li>CHON and sometimes S</li>
                    <li>Monomer: amino acid (structure is a central Carbon, an amino group to the left (NH2), and a carboxyl group to the right (COOH), a Hydrogen on top, and a variant R group which makes each amino acid unique on bottom)</li>
                    <li>R groups can have a charge (ionized), different R groups affect function and folding</li>
                    <li>Amino acid sequence within a species is very similar but differs more between species caused by DNA variation (more similar DNA = more closely related organisms)</li>
                    <li>Different amino acid sequence = different shape/folding = different function since different shapes prevents enzymes or hormones or antibodies from working</li>
                    <li>Peptide covalent bonds link amino acids together in a protein</li>
                    <li>Polymer: long chain of many amino acids linked together called polypeptides</li>
                    <li>Proteins are a polypeptide chain folded into a specific shape</li>
                    <li>Polypeptide chains have directionality, the N-terminus is the amino NH2 group end and the C-terminus is the carboxyl COOH group end where new amino acids get added</li>
                    <li>Ex: enzymes speed up reactions, keratin supports hair/nails, collagen supports skin, channel/carrier proteins transport substance, hemoglobin transports O2 in blood to cells, antigens mark cells as foreign, antibody proteins made by immune system to defend against foreign invaders, insulin is a ligand protein that lowers blood glucose, HGH (human growth hormone) ligand stimulates growth in childhood and cell reproduction, neurotransmitter ligands enable nerve cell communication, protein receptors receive ligand and react, actin/myosin are contractile proteins allowing motion/muscle contractions</li>
                    <li>Different specialized cells make or activate different types of proteins in abundance</li>
                    <li>Up to 4 levels of protein structure b/c of folding (not all proteins have all 4 levels)</li>
                    <li>Chaperone proteins — help proteins fold if needed or correct misfolding</li>
                    <li>If folding is disrupted, protein denatures and all proteins work at specific temperatures and pH levels</li>
                    <li>Temperatures above optimal cause thermal agitation which disrupts bonds, pH changes alter H+ and OH- concentrations also disrupting bonds</li>
                    <li>Sometimes denaturing is reversible, sometimes not</li>
                </ul>
                <p style="font-size:12.5px;color:var(--ink3);margin:8px 0 10px;">Levels of structure:</p>
                <div class="note-grid-2">
                    <div class="note-card-muted">
                        <p class="note-card-title">1° Primary</p>
                        <p style="margin:0;font-size:12.5px;">Linear sequence of amino acids linked by peptide bonds (all proteins have this).</p>
                    </div>
                    <div class="note-card-muted">
                        <p class="note-card-title">2° Secondary</p>
                        <p style="margin:0;font-size:12.5px;">α-helices &amp; β-pleated sheets via H-bonding along backbone; R-groups don't contribute. Most proteins have up to this level.</p>
                    </div>
                    <div class="note-card-muted">
                        <p class="note-card-title">3° Tertiary</p>
                        <p style="margin:0;font-size:12.5px;">3D shape from R-group interactions: VdW, hydrophobic/hydrophilic, H-bonds, ionic, disulfide bridges. Within one chain.</p>
                    </div>
                    <div class="note-card-muted">
                        <p class="note-card-title">4° Quaternary</p>
                        <p style="margin:0;font-size:12.5px;">2+ folded chains interacting. Ex: hemoglobin, insulin.</p>
                    </div>
                </div>

                <h3>Nucleic acids</h3>
                <ul>
                    <li>CHONP</li>
                    <li>Monomer: nucleotides made up of a phosphate group PO4^3-, a 5 carbon sugar, and a nitrogenous base</li>
                    <li>Backbone: phosphate and sugar, Rungs: bases (purines/double-rings adenine&guanine, pyramidines/single-rings cytosine&thymine&uracil)</li>
                    <li><em>Pure as gold</em></li>
                    <li>Phosphodiester covalent bond linkage links backbones (sugar/phosphates) together</li>
                    <li>Hydrogen bonding links nitrogenous bases together in DNA (A makes 2 bonds with T, G makes 3 bonds with C)</li>
                    <li><em>AT Garden City</em></li>
                    <li><strong>DNA (Deoxyribonucleic Acid)</strong>
                        <ul>
                            <li>Polymer of nucleotides, stores genetic info and instructions for making proteins, inherited by offspring</li>
                            <li>Structure: double stranded helix with antiparallel complementary (A-T:G-C) strands</li>
                            <li>One strand runs 5' to 3', the other runs 3' to 5'</li>
                            <li>DNA is only built 5' to 3' with nucleotides added to 3' end</li>
                            <li>DNA is very stable and long-lasting</li>
                        </ul>
                    </li>
                    <li><strong>RNA (Ribonucleic Acid)</strong>
                        <ul>
                            <li>mRNA (messenger RNA) - carries message of genetic code from DNA to ribosomes for protein production</li>
                            <li>tRNA (transfer RNA) - translate/transfer mRNA into proteins by bringing amino acids to the ribosome</li>
                            <li>rRNA (ribosomal RNA) - part of ribosome structure working as an enzyme to form peptide bonds between amino acids during protein synthesis</li>
                            <li>Single stranded structure usually, A pairs w/ U instead of T</li>
                            <li>Less stable and degrades faster than DNA quickly after use</li>
                        </ul>
                    </li>
                    <li><strong>ATP (Adenosine Triphosphate)</strong>
                        <ul>
                            <li>Not a polymer</li>
                            <li>Structure: Adenine bonded to 5-carbon ribose bonded to triphosphate chain</li>
                            <li>Unstable b/c 3 phosphates repel each other</li>
                            <li>Primary energy currency — active transport, cell division, etc.</li>
                            <li><strong>ATP hydrolysis</strong> — terminal phosphate removed; releases energy; often couples to endergonic reactions</li>
                            <li><em>BARF: break absorb, release form</em></li>
                            <li>Bonds between phosphates break easily; bonds forming between water and phosphate are more stable → energy output</li>
                        </ul>
                    </li>
                </ul>
                `
            },
            "Unit 2: Cells": {
                tags: ["cell structure", "cell organelles", "prokaryotes", "eukaryotes", "plasma membrane", "transport", "osmosis"],
                content: `
                    <h2 id="h-u2-ch4">Chapter 4: Cell Structure &amp; Function</h2>
                    <h3>Prokaryotes</h3>
                    <ul>
                        <li>Single-celled organisms, lack a membrane bound nucleus with much smaller/simpler cells</li>
                        <li>Ex: Bacteria & Archaea (live in extreme habitats). Despite them both being prokaryotes structurally, archaea are more biochemically similar to eukaryotes</li>
                    </ul>
                    <div class="graph-grid">
                        <div class="note-card-muted graph-cell">
                            <p class="note-card-title">Plasma Membrane</p>
                            <p style="margin:0;font-size:12.5px;">Innermost layer with a lipid bilayer in bacteria or lipid monolayer in archaea with embedded/peripheral proteins and internal pouches calles MESOSOMES to increase SA:V ratio</p>
                        </div>
                        <div class="note-card-muted graph-cell">
                            <p class="note-card-title">Cell Wall</p>
                            <p style="margin:0;font-size:12.5px;">Middle layer which maintains the shape of the cell strengthened by materials peptitoglycan in bacteria or glycoproteins in archaea. Fungi cell wall made of chitin, plant cell wall made of cellulose, animal/proteins have no cell wall</p>
                        </div>
                        <div class="note-card-muted graph-cell">
                            <p class="note-card-title">Glycocalyx</p>
                            <p style="margin:0;font-size:12.5px;">Outer layer which is a gellike, bumpy layer of polysaccharides lying on outside of cell wall. If it's compact its called a capsule, and if diffuse called a slime layer.</p>
                        </div>
                        <div class="note-card-muted graph-cell">
                            <p class="note-card-title">Cytoplasm</p>
                            <p style="margin:0;font-size:12.5px;">Semifluid solution bounded by plasma membrane containing water, inorganic molecules, organic molecules like enzymes/proteins, NUCLEOID which is a non-membrane bound region that contains plasmid and ribosomes</p>
                        </div>
                        <div class="note-card-muted graph-cell">
                            <p class="note-card-title">Plasmid</p>
                            <p style="margin:0;font-size:12.5px;">Single coiled circular ring of DNA</p>
                        </div>
                        <div class="note-card-muted graph-cell">
                            <p class="note-card-title">Ribosome</p>
                            <p style="margin:0;font-size:12.5px;">Protein chefs / site of protein synthesis</p>
                        </div>
                        <div class="note-card-muted graph-cell">
                            <p class="note-card-title">Flagella</p>
                            <p style="margin:0;font-size:12.5px;">Provide motility, found in prokaryotes but the only exception to this is animal sperm cells which use flagella for movement</p>
                        </div>
                        <div class="note-card-muted graph-cell">
                            <p class="note-card-title">Fimbriae</p>
                            <p style="margin:0;font-size:12.5px;">Small bristle-like fibers that sprout from the cell surface and help bacteria attach to surfaces when necessary ("sticky")</p>
                        </div>
                        <div class="note-card-muted graph-cell">
                            <p class="note-card-title">Conjugation Pili / Sex Pili</p>
                            <p style="margin:0;font-size:12.5px;">Rigid tubular structures used to pass DNA from one bacteria cell to another, bacteria reproduce asexually (less variety) but sex pili allows for horizontal gene transfer leading to bacteria variety</p>
                        </div>
                    </div>

                    <h3>Eukaryotes</h3>
                    <ul>
                        <li>Single or multicellular organisms with membrane bound nucleus/organelles allowing for COMPARTMENTALIZATION and larger cells</li>
                        <li><strong>Compartmentalization</strong>: makes eukaryotic cells more efficient, organized, and capable of performing many complex functions at once and creates distinct pH microenvironments</li>
                        <li>Internal membranes increase surface area</li>
                        <li>Ex: Animals, plants, fungi (yeast is single-celled, mushrooms are multicellular), protists (unicellular aquatic amoeba, paramecium, & euglena)</li>
                        <li>Largest human cell is female egg cell, largest known single cell is an ostrich egg</li>
                        <li>Arose after prokaryotic cells</li>
                        <li><strong>Endosymbiotic Theory</strong>: theory about how organelles in eukaryotic cells evolved, suggesting prokaryotes had plasma membranes fold inwards and evenually folds pinched off, creating compartments
                            <ul>
                                <li>One housed DNA forming the first nucleus which was advantageous in protecting and organizing genetic information</li>
                                <li>Energy-producing organelles like mitochondria and chloroplasts evolved when larger prokaryotes engulfed smaller ones capable of aerobic cell repiration and photosynthesis</li>
                                <li>Evidence: protein arrangement of membrane bound organelles is inverted compared to plasma membrane, mitochondria/chloroplasts/prokaryotic bacteria have their own circular DNA & ribosomes, have structurally very similar double membranes, and reproduce the same way (through binary fission)</li>
                            </ul>
                        </li>
                    </ul>

                        <div class="callout" style="margin:14px 0;">
                            <p style="margin:0 0 8px;font-weight:500;color:var(--purple-xl);">ENDOMEMBRANE SYSTEM</p>
                            <p style="margin:0;">Series of intracellular membranes that compartmentalize cell and allows cell to do incompatible functions at once. Organelles of the endomembrane system are interrelated either through physical contact or transport vesicles (includes: nuclear envelope/membrane, ribosomes, rough/smooth ER membranes, golgi, vesicles, lysosomes)</p>
                            <p style="margin:8px 0 0;">Organelles work together to modify, package, and transport polysaccharides, lipids, and proteins both intra and intercellularly</p>
                        </div>
                        <div class="note-card-muted" style="margin-bottom:12px;">
                            <p class="note-card-title">Nucleus</p>
                            <p>Only found in eukaryotes, the command center of the cell, usually found near the center and seperated from the cytoplasm by the NUCLEAR MEMBRANE (double membrane continuous with the rough ER, containing protein channels/pores which allow for transport and permit exchange between the nucleoplasm/cytoplasm). Contains CHROMATIN (unraveled DNA made up of DNA and proteins which condesnses to form chromosomes just before cell division) in a semi-fluid nucleoplasma and NUCLEOLUS</p>
                            <p>Functions: controls all cellular activities, houses the DNA and nucleolus, site of DNA replication and transcription (DNA->mRNA) and post-transcriptional RNA modification</p>    
                            <p>NUCLEOLUS: region, not a organelle/structure. Found within the nucelus, it is a non-membrane bound, dark/dense region of the nucleus where ribosome/protein & rRNA synthesis happens (rRNA joins with proteins to form ribosome subunits). Evidence: removing nucleoli slowed cell's rate of protein synthesis</p>  
                        </div>
                        <div class="note-card-muted" style="margin-bottom:12px;">
                            <p class="note-card-title">Ribosomes</p>
                            <p>The site of protein synthesis composed of rRNA and proteins and a large/small subunit. Made in the nucleolus.</p>
                            <p>ATTACHED RIBOSOMES - found on the rough ER and make proteins destined for export out of the cell / embedded in cell membrane</p>
                            <p>FREE RIBOSOMES - float freely in cytoplasm either alone or in groups called polyribosomes, make proteins for use inside the cell</p>
                            <p>Some cells like pancreatic cells have more ribosomes since they produce secretions that contain insulin which is a protein hormone</p>
                            <p>A ribosome attaches to ER if the protein being synthesized begins w sequence of aminoacids called a SIGNAL PEPTIDE, which then binds to SIGNAL RECOGNITION PARTICLE (SRP) in the cytoplasm which binds to a SRP RECEPTOR PROTEIN on the ER, opneing a channel which causes SRP to leae & protein synthesis resumes and polypeptide fed into the ER. An enzyme inside ER removes signal peptide from the growing polypeptide chain and once complete, large/small ribosomal subunits break away from ER/each other and polypeptide folds into a protein within ER, and once complete the ER membrane forms a vesicle and transports it to the golgi</p>
                        </div>
                        <div class="note-card-muted" style="margin-bottom:12px;">
                            <p class="note-card-title">ROUGH Endoplasmic Reticulum</p>
                            <p>A system of membrane channels/saccules continous w nuclear membrane</p>
                            <p>Studded with attached ribosomes on cytoplasmic side since it has receptor sites for ribosomes</p>
                            <p>Functions: Protein synthesis aand transport (proteins usually excreted out of cell as secretions for use elsewhere), some protein modification/processing begins here (like adding sugar/carbohydrates to protein forming glycoproteins), form transport vesicles to transport products to golgi for further packaging</p>
                            <p>Plasma and pancreatic cells have more rough ER since they produce secretions like hormones and enzymes which are proteins</p>    
                        </div>
                        <div class="note-card-muted" style="margin-bottom:12px;">
                            <p class="note-card-title">SMOOTH Endoplasmic Reticulum</p>
                            <p>Continous system of membrane channels with rough ER but with no ribosomes/receptor sites</p>
                            <p>Functions: Lipid synthesis, detoxification of drugs/poisons, carbohydrate metabolism, forms transport vesicles to transport to golgi/rough ER, stores CA2+ ions in muscle cells</p>
                            <p>Liver and testes cells have more smooth ER since liver detoxifies blood and testes produce steroid hormones which are lipids</p>
                        </div>
                        <div class="note-card-muted" style="margin-bottom:12px;">
                            <p class="note-card-title">Golgi Apparatus / Golgi Bodies / Golgi Complex</p>
                            <p>Consists of flatted curved saccules resembling stack of hollow pancakes</p>
                            <p>Main function: further modify/package protein/lipid products from vesciles from the ER recieved on the cis/inner face, chemical modification like glyocosylation which is when sugar/molecules added to form glycoproteins/glycolipids/etc which directs product to wherever it needs to go next, then is prepared for shipment/packages into new transport vesicles from its trans/outer face</p>
                            <p>Packaged vesicles either fuse w/ cell membrane and are secreted (secretion exocytosis for export out of the cell) or sometimes fo to other cell location</p>
                            <p>Golgi is also responsible for lysosome formation</p>
                        </div>
                        <div class="note-card-muted" style="margin-bottom:12px;">
                            <p class="note-card-title">Lysosomes</p>
                            <p>Membrane-bound vesicles produced by golgi appartus found ONLY IN ANIMAL CELLS</p>
                            <p>Contains digestive hydrolitic enxymes & is highly acidic enabling digestion of certain cell materials, breakdown of proteins, lipids, nucleic acids, carbs, destroying of pathogens like bacteria/viruses, recycling of old/damaged cell parts</p>
                            <p>Plays a role in programmed cell death (APOPTOSIS)</p>
                            <p>White blood cells have high lysosome abundance since they engulf invading pathogens</p>
                            <p>Tay-Sachs Disease - genetic lyosomal storage disease caused by absence of lipid digestion lysosomal enzyme causing lipid brain accumulation and nerve cells die so nervous system deteriorates and usually only lives to 3-4yo.</p>
                        </div>
                    <p style="margin:20px 0 10px;font-family:var(--mono);font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink3);">Energy related organelles</p>
                    <div class="note-grid-2">
                        <div class="note-card">
                            <p class="note-card-title">Chloroplasts</p>
                            <p>Specialized organelles found in ONLY plants / photosynthetic algae</p>
                            <p>Structure: double outer and inner membrane enclosing semi-fluid stroma, contains thylakoid discs stacked in grana stacks which are green b/c of chlorophyll pigment. Contains its own DNA&ribosomes and self-replicates</p>
                            <p>Function: site of photosynthesis (CO2+H2O+solar energy -> C6H12O6 + O2 general equation), evolved from ancient prokaryotic photosynthetic cyanobacteria that were later engulfed by larger prokaryote (endosymbiosis)</p>
                        </div>
                        <div class="note-card">
                            <p class="note-card-title">Mitochondria</p>
                            <p>Specialized organelles found in all aerobic eukaryotic cell which is the site of some reactions involved in aerobic cell respiration</p>
                            <p>Structure: double membrane w/ smooth outer membrane and highly folded inner cristsr membrane enclosing semi-fluid matrix, the folds allow for production/dispersion of a lot of ATP. Contains its own DNA & ribosomes and can self-replicate</p>
                            <p>Muscle cells, nerve cells and any cells w cilia or flagella have high mitochondria abundance since they require a lot of energy</p>
                        </div>
                    </div>
                    <p style="margin:20px 0 10px;font-family:var(--mono);font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink3);">Other eukaryotic organelles</p>
                    <div class="note-grid-2">
                        <div class="note-card-muted">
                            <p class="note-card-title">Vacuoles</p>
                            <p>Membrane bound sac that have many different roles (mostly storage)</p>
                            <p>Plants: have single large central vacuole that takes up most of cell volume, stores water/nutrients/pigments/waste, breaks down macromolecules/damaged cell parts w/ hydrolytic enzymes (like how lysosomes do for animals), and aids in H2O retention to maintain turgor pressure (internal pressure buildup as water moves into cell by osmosis causing cell to stay firm and structured when vacuole pushes against cell membrane/wall - turgid is swell, flaccid is shrink)</p>
                            <p>Animals: smaller more abundant vacuoles that store cellular materials</p>
                            <p>Protists (ex: paramecium): specialized contractile vacuoles that maintain water balance in some freshwater organisms by collecting/pumping excess water that enters via osmosis to prevent bursting</p> 
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Peroxisomes</p>
                            <p>Membrane bound vesicle that encloses digestive hydrolytic enzymes, similar to lysosomes in structure and function but lysosomes have broader digestive function</p>
                            <p>Specific digestive function: breakdown fatty acids and alcohols but this results in hydrogen peroxide production which is toxis, so enzyme catalose in peroxisomes break down to water&oxygen in catalase reaction (2H2O2 --> 2H2O + O2)</p>
                            <p>Liver cells high in peroxisomes</p>
                        </div>
                    </div>
                        <div class="note-card-muted" style="margin-top:12px;">
                            <p class="note-card-title">Cytoplasm</p>
                            <p>Cytosol - matrix made of mostly water w dissolved particles, contains the cytoskeleton</p>
                            <p>Cytoskeleton - cell's infrastructure which maintains cell shape, anchors organelles, assists in movement, directs transport, consisting of a web of protein fibers that move enabling cytoskeleton function</p>
                            <p>CYTOSKELETON COMPONENTS / PROTEIN FIBERS:</p>
                            <ul>
                                <li>Microfilaments / Actin Filaments (smallest): made of actin protein, maintains cell shape, works w myosin motor molecule to enable muscle contractions, aids in cytokinesis, aids in formation of pseudopod false feet helping amoeba move/feed, aids in shortening/extending of microvili in small intestine for nutrient absorption, helps move materials around within cell/cytoplasm through cytoplasmic streaming</li>
                                <li>Intermediate Filaments: made of keratin protein, also helps reinforce cell shape and holds organelles in place</li>
                                <li>Microtubules (largest): made of tubulin protein, enables vesicle movement outward by working with kinesin motor molecule, and vescile movement inwards working with dynein motor molecule, important components of cilia, flagella, basal bodies, centrioles, spindle fibers which all have varied functions</li>
                            </ul>
                            <p>MICROTUBULE STRUCTURES</p>
                            <ul>
                                <li>CILIA: short, numerous hairlike projections from cell surface moving in wavelike motion w/ help of dynein motor molecules. Cross section is 9+2 w/ 2 microtubules in middle and 9 around it. Only in some specialized cells! Function: aids in cell movement/locomotion like in aquatic paramecium, and helps move material along cell membrane like moving mucus-debris in tracheal cells and move egg in fallopian tubes</li>
                                <li>FLAGELLA: long, usually singled or coupled projection from cell surface moving in whip-like motion w. 9+2 microtubule arrangement. Only in some specialized cells! EX: sperm cells flagella used to swim towards egg in fallopian tube, some protists like euglena use to move through water, some bacteria use to move toward/away from taxis/harmful substances</li>
                                <li>BASAL BODIES: 9 triplet arrangement of microtubules all around, forms the base of cilia and flagella anchoring them to the cell</li>    
                                <li>CENTRIOLES: (ANIMAL CELLS ONLY): 9 triplet arrangement of microtubules, determines plane of division where animal cell must divide (plant cells cell plates does the same thing). Centrosomes are group of 2 centrioles</li>
                                <li>SPINDLE FIBERS: 9 triplet arrangement of microtubules which attach to chromosomes to seperate and move them to poles before cell division</li>    
                            </ul>
                            <p>MOTOR PROTEINS: uses ATP hydrolysis energy to work w protein fibers and enable cytoskeleton</p>
                            <div class="note-grid-3" style="margin-top:8px;">
                                <div class="note-card" style="padding:10px;">
                                    <p style="margin:0;font-size:12px;"><strong>MYOSIN</strong> — helps move actin filaments to enable muscle contractions</p>
                                </div>
                                <div class="note-card" style="padding:10px;">
                                    <p style="margin:0;font-size:12px;"><strong>KINESIN</strong> — moves along microtubules to aid in vesicle movement OUTWARD</p>
                                </div>
                                <div class="note-card" style="padding:10px;">
                                    <p style="margin:0;font-size:12px;"><strong>DYNEIN</strong> — moves along microtubules to aid in vesicle movement INWARD, helps microtubules making up cilia and flagella move</p>
                                </div>
                            </div>
                        </div>

                    <h3>CELL SIZE & SURFACE AREA:VOLUME RATIO</h3>
                    <ul>
                        <li>Since cells come in all different sizes, larger SA:V ratios allows for efficient exchange of materials (getting rid of waste/energy and taking in materials)</li>
                        <li>Volume grows faster than surface area as a cell gets bigger so SA:V ratio decreases so smaller cells are more ideal for materials exchange</li>
                        <li>Larger organisms have lower SA:V ratios so lose heat slower and don't need to burn as much energy, so they don't produce heat as fast and have a slower metabolism (ex: when its cold you will make yourself smaller to prevent energy transfer/loss)</li>
                        <li>Adaptations increasing SA: projections in the small intestine, folds like cristae in mitochondria, folds called mesosomes in bacteria, roots of plants, flat thin leaves in plants, flappy elephant ears</li>
                    </ul>

                    <h2 id="h-u2-ch5a">Chapter 5A: Membrane Structure &amp; Function</h2>
                    <h3>PLASMA MEMBRANE</h3>
                    <ul>
                        <li>Common to all cells seperating internal cytoplasm from external cell environment</li>
                        <li>Functions: regulates passage of materials in/out of cell through the selectively permeable lipid byilater, controls cell shape/fluidity through the cholesterol/unsaturated fatty acids in membrane, recongizes/communicates w other cells/molecules thorugh specificity and membrane proteins/carbs, and anchors the cytoskeleton for stability</li>
                        <li>Structure: Fluid mosaic model w/ phospholipid bilayer, protein molecules, carb/sugar chains, and cholesterol
                            <ul>
                                <li>Phospholipid bilayer: made up of phosphate + R group + 1 glycerol + 2 fatty acids, external/cytoplasmic surfaces lined w polar heads and nonpolar tails in between facing inwards</li>
                                <li>Protein Molecules: Float around, can be hydrophillic/hydrophobic depending on the side group charge/polarity. PERIPHERAL proteins are found on the inner membrane surface, and are sometimes enzymes facilitating rxns, ex: G proteins & cytochrome C. INTEGRAL/TRANSMEMBRANE proteins are partially/entirely embedded and generally transport materials and act as molecular receptors to bind to signalling molecules
                                    <ul>
                                        <li>Channel Proteins: integral proteins allowing passage of partiucular molecules/ions thorugh protein membrane channel (cystic fibrosis caused by faulty chloride channel)</li>
                                        <li>Carrier Proteins: integral proteins combining w substance to be transported and changing theior shape selectively which helps it pass membrane</li>
                                        <li>Cell Recognition Proteins: integral glycoproteins helping body recognize foreign substances (ex: organ transplant rejection, antigens, white blood cells attack foreign glycoproteins)</li>
                                        <li>Receptor Proteins: integral proteins binding w specific molecules and allowing cell to respond to signals from other cells (ex: type 2 diabetes cell protein receptor don't bind properly to insulin so they store glucose as glycogen)</li>    
                                        <li>Enzymatic Proteins: carry out metabolic reactions directiy by catalyzing</li>
                                        <li>Junction Proteins: attach adjacent cells & allow signal molecules to pass between cells</li>    
                                    </ul>
                                </li>
                                <li>Carbohydrate (Sugar) Chains: chains existing only on outside of plasma membrane making it asymmetrical, cruical to cell-cell recognition often attaching to lipids/proteins creating glycolipids/glycoproteins.</li>
                                <li>Cholesterol: modify membrane fluidity over temperatures & maintain its own homeostasis, Li+ reduces flexibility at higher temps and at really low temps it prevents membrane freezing</li>
                            </ul>
                        </li>
                        <li>Selectively permeable: some substances can pass, but others can't bc can't get past hydrophobic tails (ex: small nonpolar molecules like gases and hydrocarbons easily pass; ions/charged particles & polar/ionic compounds can't easily pass but w/ protein assistance can. large molecules can't pass</li>
                    </ul>
                    
                    <h3>Passive Transport</h3>
                    <p>Import resources & export waste without using energy</p>
                    <div class="note-grid-3">
                        <div class="note-card-muted">
                            <p class="note-card-title">Passive Diffusion</p>
                            <p style="margin:0;font-size:12.5px;">Net movement of molecules from high -> low concentration down/with concentration gradient (difference in concentrations) until dynamic equilibrium (no net movement, = in both directions) reached and gradient no longer exists w/o using energy</p>
                            <p style="margin:8px 0 0;font-size:12.5px;">Diffusion rate affected by temperature (increases w higher temp bc more molecule movement/kinetic energy), molecule size/mass (smaller molecules move faster so diffuse faster), steepness of concentration gradient (steeper gradient = faster diffusion rate bc think going down a slide), surface area (greater SA = faster diffusion rate bc more membrane space)</p>    
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Osmosis</p>
                            <p style="margin:0;font-size:12.5px;">Diffusion of water across selectively permeable membrane from high water concentration to low water contentation (direction determined by relative solute concentrations)</p>
                            <p style="margin:8px 0 0;font-size:12.5px;">Focuses on solvent/water movement instead of solute since the solute may not be able to diffuse due to size/charge/polarity (nonpenetrating solutes)</p>
                            <p style="margin:8px 0 0;font-size:12.5px;">Placing an movable lever makes osmosis/water push the level up, but if immovable lever placed the level would counteract water pressue equally and opposite like how cell wall acts for plants</p>
                            <p style="margin:8px 0 0;font-size:12.5px;">OSMOTIC (HYDROSTATIC) PRESSURE - min pressure needed to stop osmosis, aka turgor pressure in plant cells but plants won't burst bc cell wall resists water movement after a point</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Facilitated Transport / Facilitated Diffusion</p>
                            <p style="margin:0;font-size:12.5px;">Net movement of molecules like ions/polar molecules that can't go directly through membrane from high to low concentration with the help of channel/carrier proteins creating channels/binding to the molecule which are specific to type of molecule/ion. No energy required</p>
                        </div>
                    </div>
                    
                    <h3>Types of Solutions</h3>
                    <p><strong>TONICITY</strong> - relative solute concentration of nonpenetrating solutes that don't cross membrane</p>
                    <p><strong>OSMOLARITY</strong> - relative solute concentration of penterating and nonpenetrating (ALL) solutes</p>
                    <p>Water always moves from <em>HYPO TO HYPER</em> asusuming no negative/applied pressures</p>
                    <p>Human blood / intracellular fluid is isotonic to our bodycells, but for some animals/protists like paramecium in freshwater environments isn't isotonic so they require regulatory mechanisms like contractile vacuoles pumping out excess water to prevent bursting/buildup and help keep homeostasis</p>
                    <div class="note-grid-3">
                        <div class="note-card">
                            <p class="note-card-title">Isotonic Solutions</p>
                            <p style="margin:0;font-size:12.5px;">When both solute concentratons and water concentrations are equal, so no net movement and water crosses at same rate in both directions</p>
                            <p style="margin:8px 0 0;font-size:12.5px;">Cell placed in isotonic solution won't shrink or swell)</p>
                        </div>
                        <div class="note-card">
                            <p class="note-card-title">Hypotonic Solution</p>
                            <p style="margin:0;font-size:12.5px;">(Low solute high H2O) Solute concentration in solution is lower than solution on other side so hypotonic solution has higher water concentration compared to other side of membrane</p>
                            <p style="margin:8px 0 0;font-size:12.5px;">Cell placed in hypotonic solution would expand since water moves in (animal cells could burst/lyse, but plant cell walls resist bursting)</p>
                        </div>
                        <div class="note-card">
                            <p class="note-card-title">Hypertonic Solution</p>
                            <p style="margin:0;font-size:12.5px;">(High solute low H2O) Solute concentration in solution is higher than solution on otherside so hypertonic solution has lower water concentration compared to other side of membrame</p>
                            <p style="margin:8px 0 0;font-size:12.5px;">Cell placed in hypotonic solution would shrink (animal cells crenate, plant cells plasmolyze where cell membrane pulls away from cell wall which stays rigid)</p>
                        </div>
                    </div>
                    
                    <h3>Water Potential (PSI)</h3>
                    <p>Measures relative tendency for water to leave region, measured in units of pressure called bars/megapascals (MPa) --> 1MPa=10bars</p>
                    <p>Higher water potential means higher tendency for water to move from/leave an area which helps us figure out where water will flow</p>
                    <p>Water always moves from <em>high water pontential to low water potential until water potentials are equal with no net movement (so technically movement can't be based only on solute concentrations)</em></p>
                    <p>Water potential depends on SOLUTE POTENTIAL (PSI S) and PRESSURE POTENTIAL (PSI P) so PSI = PSI S + PSI P</p>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card-muted">
                            <p class="note-card-title">Solute potential / osmotic potential</p>
                            <ul style="margin:0;">
                                <li>Potential for water to move solely based on solute concentrations</li>
                                <li>As solute concentration icncreaes, solute potential decreases since H2O molecules bind to solute and aren't free to do work (ex: pure water has highest solute potential)</li>
                                <li>PSI S = -iCRT (on ref table), where PSI S = solute potential, i=ionization constant which is # of particles the solute makes in water (ex: NaCl makes 2 particles -> Na+ and Cl-, CaCl2 makes 3 particles -> Ca2+ Cl- and Cl-), C=molar concentration (M->mol/L), R=pressure constant (t=0.0831 L*bars/mol*K), T=temperature in Kelvin (C+273)</li>
                            </ul>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Pressure potential</p>
                            <p style="margin:0 0 8px;font-size:12.5px;"><strong>PRESSURE POTENTIAL:</strong>physical pressure on or away from a solution</p>
                            <ul style="margin:0;">
                                <li>Physical pressure on or away from a solution, tendency of water to move in response to pressure (ex: turgor pressure)</li>
                                <li>Pressure potential is negative in transpiration in xylem of plant since this draws water towards the region</li>
                                <li>Pressure potential is positive if cell wall exterts pressure to counter any buildup of pressure inside plant cell due to osmosis inward</li>
                                <li>In most AP bio problems, pressure potential is 0 since its in an open container that exists at atmospheric pressure in animal cells</li>
                                <li>So water movement can be based solely on relative solute concentration if pressure potential =0, but overall water potential is a better measure of net movement than solute concentration in case pressure potential isn't 0</li>
                            </ul>
                        </div>
                    </div>

                    <h3>Active Transport & etc</h3>
                    <div class="note-grid-2">
                        <div class="note-card">
                            <p class="note-card-title">Active Transport</p>
                            <p>Net movement from low to high concentration up and against concentration gradient requiring energy (ATP) and transmembrane protein pumps</p>
                            <p>Important for cell to maintain particular concentrations of substance despite environmental concentrations</p>
                            <p><strong>EX: Sodium-Potassium Pump</strong></p>
                                <ul>
                                    <li>Present in all cells especially muscle/nerve cells to create concentration&voltage gradient needed to drive procveses like impulse travel across neuron</li>
                                    <li>Takes up 1/3 of bodies' energy since Na+/K+ pump works hard to pump 3Na+ out and 2K+ in to maintain levels</li>
                                    <li>3Na+ ions in cytoplasms move to carrier protein, ATP phosphorylates carrier protein releasing energy and changing its shape so 3Na+ ions get released out of cell, protein's changed shape increases affinity for K+ so 2K+ move into carrier protein, protein is dephosphorylized and 2K+ ions released into cell (ADP+P->ATP)</li>
                                </ul>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Bulk Active Transport</p>
                            <p>Transport of large macromolecules like proteins, polysacchardies, nucleic acids into/out of cell</p>
                            <p>Requires vesicle formation and energy</p>
                            <p>EXOCYTOSIS: (exit) internal vesicles made by golgi fuse with plasma membrane to secrete macromolecules out of cell (ex: insulin hormone released by pancreatic cells, growth hormone release by pituitary cels, neurotransmitters by neurons)</p>
                            <p>ENDOCYTOSIS: (enter) cells take in large macromolecules by forming new vesicles from membrane</p>
                            <ul>
                                <li>PHAGOCYTOSIS: "cell eating" cell engulfs large solid material in (ex: foreign particles/pathogens or old red blood cells engulfed by white blood cells)</li>
                                <li>PINOCYTOSIS: "cell drinking" cell takes in small particles/liquid (ex: small substances ingested by blood,kidney,intestinal,andplant root cells)</li>
                                <li>RECEPTOR-MEDIATED ENDOCYTOSIS: form of pinocytosis specific bc it uses receptor proteins to recognize ligands and bring them to cell (ex: fetal blood cells taking in substasnces from maternal blood cells at placenta, body cells take up low-density lipoproteins to help transport cholestrol in blood when they gather near specific receptor sites)</li>
                            </ul>
                        </div>
                    </div>

                    <h3>Cell Junctions</h3>
                    <p>In plant/animal cells, adjacent cells form junctions to behave/coordinate</p>
                    <div class="note-grid-3">
                        <div class="note-card-muted">
                            <p class="note-card-title">Gap junctions</p>
                            <p style="margin:0;font-size:12.5px;">GAP JUNCTIONS - found between animal cells allowing cell-cell communication. Membrane channel proteins join cells together giving cell strength and allowing small molecules/ions to pass. (ex: important in heart muscle/smooth muscle tissue bc allow migration of ions between cells so cell can contract as a unit)</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Plasmodesmata</p>
                            <p style="margin:0;font-size:12.5px;">PLASMODESMATA - membrane-like channels connecting one plant cell to the next, allowing water/small molecules to pass from cell to cell, similar to gap junctions in animal cells but plasmodesmata are lined by cell membrane unlike gap junctions</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Cell wall</p>
                            <p style="margin:0;font-size:12.5px;">CELL WALL - surrounds plasma membrane in plants, porous and permeable, provides support/rigidty, resists excessive water uptake through counter turgor pressure, made of cellulose in plants, peptidoglycan in bacteria, protein/carbohydrate complex in archea, chitin in fungi, not found in animals</p>
                        </div>
                    </div>
                    `  
            },
            "Unit 3: Cellular Energetics": {
                tags: ["metabolism", "energy", "enzymes", "photosynthesis", "cell respiration"],
                content: `
                    <h2 id="h-u3-ch6">Chapter 6: Metabolism: Energy & Enzymes</h2>
                    <h3>ENERGY: the ability to do work & bring change</h3>
                    <div class="note-card-muted" style="margin-bottom:12px;">
                        <p style="margin:0 0 8px;font-size:12.5px;">The ability to do work and bring change.All living systems require energy input to survive & carry out life functions</p>
                        <p style="margin:0 0 8px;font-size:12.5px;">Initial energy source from the Sun either used directly by producers or indirectly through consumption by consumers (Sun->producer->consumer)</p>
                        <p style="margin:0 0 8px;font-size:12.5px;">Flows in one direction through food chain/webs(does NOT CYCLE), energy is converted into different forms, some energy used to do work and perform life processes but most escapes into environment as heat</p>
                        <p style="margin:0;font-size:12.5px;">Ex: solar energy (light energy carried by photos of light from the sun), kinetic energy (energy of motion associated w moving objects like balls, electrons/molecules), potential energy (stored energy whose capacity to do work is not used, chemical energy of bonds/molecules/gradients, and food), thermal/heat energy (unusable form of energy in biological systems that can't be used to do cellular work)</p>
                    </div>

                    <h3>Laws of Thermodynamics</h3>
                    <p>The study of energy transformations that occur in matter</p>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card">
                            <p class="note-card-title">First Law of Thermodynamics (Law of Conservation of Energy)</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Energy can't be created/destroyed but instead transferred from one form to another</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Ex: ball at top of hill has potential E that turns into kinetic E when released/falling, chloroplasts in plant cells capture light E and transform it into chemical E stored in glucose during photosynthesis</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Ex: Cotransport - during active transport of H+, ATP helps move H+ ions against concentration gradient storing them on one side of membrane. during cotransport of sucrose, kinetic E of moving H+ down concentration gradient provides energy to actively transport sucrose against gradient which is then converted to PE at sucrose stored in higher concentration side plant cell</p>
                            <p style="margin:0;font-size:12.5px;">Ex: ATP power motor proteins (kinesin, dynein, myosin) to enable vesicle movement (chemical -> kinetic)</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Second Law of Thermodynamics (Law of Entropy)</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">ENTROPY: meeasure of randomness/disorder in a system</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Energy transfer is not 100% efficient, for every energy transfer that occurs the entropy in universe increases and some energy is lost as heat to surroundings and can no longer be used to do work</p>
                            <p style="margin:0;font-size:12.5px;">Nature tends to increase in entropy but life requires systems to be organized so constant input of energy is needed to keep order/homeostasis</p>
                        </div>
                    </div>

                    <h3>Metabolic Reations / Energy Transformations</h3>
                    <p>Many reaction in biological systems involve energy changes</p>
                    <p><strong>Gibbs Free Energy (G)</strong>: amount of available energy capable of doing work</p>
                    <p><strong>Free-Energy Change of a rxn (delta G)</strong>: tells whehter or not reaction occurs spontaneously</p>
                    <p><strong>Spontaneous RXN</strong>: reaction that occurs by itself w/o energy input (exergonic)</p>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card">
                            <p class="note-card-title">Endergonic Reactions</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Energy is absorbed/needed since products have more free energy than reactants</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">A+B+energy->C so delta G is positive and the reation is not spontaneuous</p>
                            <p style="margin:0;font-size:12.5px;">Gibbs free energy chart goes from less energy reactants to more energy products w/ activation energy (Ea) bump in between</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Exergonic Reactions</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Energy is released bc products have less free energy than reactants</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">A+B->C+energy so delta G is negative and the reaction is spontaneous</p>
                            <p style="margin:0;font-size:12.5px;">Gibbs free energy chart goes from more energy reactants, activation energy (Ea) bump, and less energy products</p>
                        </div>
                    </div>

                    <h3>ATP: Adenosine TriPhosphate</h3>
                    <ul>
                        <li>Energy currency for cells since it is the most accessible form of cell energy bc its unstable phosphate bonds hydrolyze easily, releasing enough usable energy to power cell processes.</li>
                        <li>ATP hydrolysis releases energy b/c bonds between negatively charged phosphates are unstable and break easily, bonds forming between water/phosphates are more stable resulting in more energy output and little input</li>
                        <li>ATP hydrolysis often coupled w energy-requiring rxns, allowing them to proceed to maintain order/life since it released 7.3kcal/mol of energy, making coupled rxns involving ATP overall exergonic/spontaneous</li>
                        <li>Cells couple ATP hydrolysis to energy-requiring rxns by adding a phosphate to make molecules higher in free energy/more reactive which changes shape of proteins so they can do work, and by helping build gradients that store potential energy</li> 
                        <li><strong>ATP Syntehesis/Phosphorylation of ADP</strong>: ADP+P+energy->ATP+H2O, nonspontaneous +deltaG endergonic rxn that requires energy</li>    
                        <li><strong>ATP Hydrolysis</strong>: ATP+H2O->ADP+P+energy, spontaneous -deltaG exergonic rxn that releases energy</li>
                        <li>ATP has higher potential energy than ADP and is less stable</li>
                        <li>Cell Resipiration (exergonic process): energy to build ATP coming from energy in food which is broken down to release energy & build ATP</li>
                    </ul>

                    <h3>Enzymes</h3>
                    <ul>
                        <li>All metabolic chemical reactions need enzymes/catalysts which are proteins speeding up chemical rxn rates without changing itself by lowering activation energy, can be used repeatedly</li>
                        <li>Ribosomes: enzymes made of RNA instead of protein which helps w RNA/protein synthesis</li>
                        <li>Reactions are not random but organized into steps called a METABOLIC PATHWAY which starts w reactant, then intermediates, then end product</li>
                        <li><strong>Activation Enzyme (Ea):</strong> the energy needed to start rxn and cause molecules to react w each other</li>
                        <li><strong>Enzyme-Substrate Complex:</strong> reactants called substrates, enzymes are specific to substrates and often named substrate-ase. General reaction is enzyme+substrate->enzyme-substrate complex->product(s)</li>
                        <li><strong>Active Site</strong>: the part of the enzyme that interacts/binds w substrate & site where chemical change is occuring, shape is complementary to substrate shape but through induced fit model it undergoes a slight shape change</li>
                        <li>Enzymes may carry out degradation (when single substrate is broken down into more than one smaller products involved in catabolic pathway), or synthesis (when smaller subtrates combine to produce a larger product involved in anabolic pathway)</li>
                        <li>Some enzymes need helpers called cofactors if inorganic nonproteins (ex: metal minerals ions like Fe, Zn, Mg, Cu) and coenzymes if organic nonproteins (ex: vitamins)</li>
                        <li>Enzyme activity is affected by: inhibitors are moecules binding to enzymes decreasing activity (sometimes necessary-feedback inihibition which is reversible)
                            <ul>
                                <li>Higher substrate/enzyme concentration increases enzyme activity bc more frequent collisions (to a limit until all active sites are occupied)</li>
                                <li>Higher temperatures increases enzyme activity bc more frequent collisions but too high temperatures rapidly decrease enzyme activity due to denaturation. On the other hand, low temps don't denature, low temps just slow enzymes down a lot</li>
                                <li>pH above/below optimal alters H+/OH- concentration changing R-group interactions changing shape/folding of enzymes (graph looks like a mountain shape at optimal pH)</li>
                                <li>Inhibitors are molecules that bind to enzymes decreasing activity (sometimes necessary-feedback inhibition which is reversible like antibitoics combatting bacteria like penicilin) but sometimes irreversible like poisons</li>
                                <li>Noncompetitive inhibitors - inhibitor binds to allusteric site (opposite active cite) instead of enzyme's active site, causing enzyme active site to change shape preventing it from binding to substrate</li>
                                <li>Competitive inhibitors - inhibitor binds to active site so inhibitor/substrate compete to bind, product may form if substrate binds but no product will form if inhibitor binds</li>
                            </ul>
                        </li>    
                    </ul> 

                    <h2 id="h-u3-ch7">Chapter 7: Photosynthesis</h2>
                    <h3>Overview</h3>
                    <ul>
                        <li>Process capturing solar energy into ATP/NADH into chemical energy which ends up being stored in carbohydrates through net equation: 6CO2+6H2O+solar energy->C6H12O6+6O2 or overall equation 6CO2+12H2O+solar energy->C6H12O6+6H2O+6O2</li>
                        <li>Located chloroplasts in green portions of plants like leaves which contain mesophyll tissue in which cells are specialized for photosynthesis</li>
                        <li>2 sets of rxns: Light dependent rxns and light independent reactions which produce carbohydrates and release oxygen, since carbohydrates produced are chemical energy source, oxygen released as byproduct used for cell respiration and rsies to form ozone shield protecting earth</li>
                        <li>Photosynthetic organisms/AUTOTROPHS (since they produce their own food and feed heterotroph consumers): plants, green algae/protists, cyanobacteria/prokaryotes</li>
                        <li>Raw materials: water taken up through roots, CO2 taken up through stomata/stoma openings on underside of leaves</li>
                        <li>Chloroplast structure/function: double membrane, semifluid strome interior rich in enzymes aand this is where CO2 reduced to form carbohydrate w help from enzymes, stacks of thylakoids forming a stack called granum/grana containing photosynthetic pigments chlorophylls a&b and others, light absorpiton occurs here</li>
                        <li>Endergonic, anabolic process building glucose requiring light energy, inolving redox reactions (reduction of CO2 to form glucose, oxidation of H2O to form O2) and indirect movement of electrons from water to CO2</li>
                        <li><em>REDOX: reduction-oxidation reactions. LEO says GER - lose electron oxidation, gain electrons reduction</em></li>
                        <li>Solar energy (photon is smallest particle/unit of light) converted to ATP/NADPH which is used to reduce CO2 to glucose w help from enzymes</li>
                        <li>1 H atom = 1e +1proton</li>
                        <li><em>Track electrons, energy, atoms, and H+ throughout photosynthesis</em></li>
                    </ul>

                    <h3>Pigments</h3>
                    <p>Plants adapted to capture some of the radiation associated w visible light. If it reflects a color that means it can't absorb that color well, so plants don't grow well in green light.</p>
                    <div class="note-grid-2">
                        <div class="note-card-muted">
                            <p class="note-card-title">Chlorophyll a</p>
                            <p style="margin:0;font-size:12.5px;">main photosynthetic pigment in green plants, reflects dark green</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Chlorophyll b</p>
                            <p style="margin:0;font-size:12.5px;">plays accessory (not as important) role in photosynthesis in green plants, reflects light green</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Carotenoids</p>
                            <p style="margin:0;font-size:12.5px;">found in most plants but predominant in carrot, pumpkins, and fall months when chlorophyll breaks down for winter, reflects orangish yellow</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Phycobilins</p>
                            <p style="margin:0;font-size:12.5px;">mainly found in red algae (not as important)</p>
                        </div>
                    </div>

                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card">
                            <p class="note-card-title">Light Dependent Reactions (LDR)</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Reactions that need light to occur, located along thylakoid membranes, inputs of solar energy, H2O, ADP+P, NADP+ to output O2,ATP,NADPH</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Uses splitting of water, moving electrons energized by solar energy, and formation of H+ gradient to fuel ATP/NADPH production (energy-carrying molecules) with O2 released as a byproduct</p>
                            <p style="margin:0 0 10px;font-size:12.5px;">Photosytems 2 (680) and 1 (700) are collections of pigment molecules responsible for gathering solar energy/light photons to eventually be converted to other usable energy forms for plant, consisting of a pigment complex, reaction complex, and electron acceptor molecule</p>
                            <ol style="margin:0;padding-left:18px;">
                                <li>PIGMENT COMPLEX consists of pigment molecules which capture light energy photons and transfer it to a pair of chlorophyll a molecules at REACTION CENTER</li>
                                <li>REACTION COMPLEX pair of chlorophyll a molecules accumulate energy from other electron molecules, causing the electrons from double bond in pigment to get excited and jump to higher energy levels</li>
                                <li>Instead of releasing energy back to ground state, the excited electrons are captured by ELECTRON ACCEPTOR MOLECULE which receives electrons from rxn center and passes them to electron transport chain (PS80 rxn center for PS2 and PS700 rxn center for PS1)</li>
                                <li>H2O from environment diffuses into inner thylakoid space and gets split & oxidizes (photolysis) H2O->0.5O2+2e-+2H+ which replenishes electrons lost by chlorophyll A at reaction center. The O2 gets released as waste, and 2H+ stay in inner thylakoid and contribute to building of H+ gradient inside thylakoid</li>
                                <li>High energy electrons from chlorophyll which were energized by light are delivered to ELECTRON TRANSPORT CHAIN (series of membrane-bound protein carrier in thylakoid membrane passing electrons between carriers through redox rxns).</li>
                                <li>Electrons move from caarrier molecule to carrier molecule, releasing energy in the process and are low in energy by the end of the chain</li>
                                <li>Energy released by electron transfer goes towards powering a proton pump (active transport protein pumping H+ from low stroma to high thylakoid space across membrane) which enables production of ATP through CHEMIOSMOSIS aka PHOTOPHOSPHORYLATION in photosynthesis</li>
                                <li>CHEMIOSMOSIS: method of ATP production requiring electron transport chain and electrochemical H+ gradient/difference in concentrations and charge to fuel ATP production through ADP phosphorylation, using released energy from electrons moving along ETC to actively pump H+ across membrane. H+ gradient builds up in innner thlyakoid space and ATP is passively transported through ATP synthase into transport.</li>
                                <li>H+ gradient builds up in innner thlyakoid space so ATP is passively transported through ATP synthase into transport, ATP brought to calvin cycle (ADP+P-->ATP as H+ transported passively).</li>
                                <li>Low energy electrons received by PS1 are re-energized by light in the same way as PS2, but exited electrons are replaced by electrons from ETC not from water</li>
                                <li>Reorganized electrons passed to protein carrier ferredoxin</li>
                                <li>Enzyme called NADP+ reductase passes 2 electrons + 1H+ to NADP+ (final electron acceptor) reducing it to become NADPH in stroma which is brought to calvin cycle (NADP+ is oxidized form empty shuttle, NADPH is reduced form full shuttle carrying 2e+1H in rxn NADP+ + 2e- + 1H+ -> NADPH)</li>
                            </ol>
                            <p style="margin:10px 0 0;font-size:12.5px;">Electron flow is noncyclic and some electrons loop around ETC to make more ATP since more ATP needed than NADPH</p>
                        </div>

                        <div class="note-card-muted">
                            <p class="note-card-title">Light Independent Reactions (LIR) / aka Calvin Cycle</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Reactions don't directly requiring light, though they do need byproducts of LDR like NADPH and ATP, located in stroma.</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Can only occur during the day b/c for most plants stomata is only open during day to let CO2</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Inputs of ATP,NADPH,CO2 and outputs of carbohydrate(glucose),ADP+P,NADP+</p>
                            <p style="margin:0 0 10px;font-size:12.5px;">Uses ATP+NADPH from LDR to reduce CO2/other derivatives to produce carbohydrate that can be converted to glucose, recycles ADP+P and NADP+ back to LDR</p>
                            <ol style="margin:0;padding-left:18px;">
                                <li>CARBON FIXATION: CO2 gets fixed/incorporated into organic compound w help of the enzyme Rubisco fixing CO2 (1C) to RuBP (5C) forming short-term 6C intermediate which splits to form 2 3PG/PGA</li>
                                <li>REDUCTION: 3PG/PGA ultiamtely is reduced to form G3P/PGAL through hydrolysis of ATP and reducion of other intermediates by NADPH (NADPH drops off passengers NADPH->NADP+2e+H+. Excess H2O is released here</li>
                                <li>REGENERATION: Some G3P converted to glucose which is used to build complex carbs, but most (5/6 molecules) converted back to RuBP to continue cycle, requriring hydrolysis of 3 ATP molecules</li>
                            </ol>
                            <p style="margin:10px 0 8px;font-size:12.5px;">TOTALS: 1 net G3P/PGAL + regeneration of RuBP requires hydrolysis of 9ATP molecules and oxidation of 6NADPH molecules. Cyclic LDR electron flow needed since more ATP than NADPH needed. From one turn of Calvin Cycle, 1 G3P and ADP+P,NADP+ recycled back to LDR so two turns needed to create glucose.</p>
                            <p style="margin:0;font-size:12.5px;">G3P can also form other molecules</p>
                        </div>
                    </div>

                    <h3>Adaptations / Evolution of Photosynthesis</h3>
                    <ul>
                        <li>Photosynthesis evolved first in cyanobacteria which got engulfed by larger prokaryotes</li>
                        <li>Calvin Cycle occurs dmostly during day and photosynthesis happens in chloroplasts of mesophyll cells</li>
                        <li>Not all plants live in ideal photosynthetic conditions, they may live in hot/dry/low sunlight areas so photorespiration would occur which is when O2 binds w subisco instead of CO2 so sugars aren't made (open stamata loses too much water, close stomata accumulates O2)</li>
                    </ul>
                    <div class="note-grid-2">
                        <div class="note-card">
                            <p class="note-card-title">CAM plants</p>
                            <p style="margin:0;font-size:12.5px;">CAM PLANTS - partition photsynthesis by time so stomata opens at night to take in CO2 and let O2 out so less water evaporation occurs, carbon fixation happens at night and calvin cycle occurs during day (ex: cacti, pineapples, jade plants, succulents)</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">C4 plants</p>
                            <p style="margin:0;font-size:12.5px;">C4 PLANTS - partition photosynthesis by location so stomata takes in CO2 and converted to C4 compound in mesophyll cells deeper in leaf, then back to CO2 in bundlesheath where calvin cycle occurs (ex: corn, sugarcane, crabgrass)</p>
                        </div>
                    </div>

                    <h2 id="h-u3-ch8">Chapter 8: Cellular Respiration</h2>
                    <h3>Overview</h3>
                    <ul>
                        <li>Exergonic, catabolic ell process breaking down glucose from photosynthesis and release energy used to build ATP molecules</li>
                        <li>C6H12O6 + 6O2 (both from photsynthesis)-> 6CO2 + 6H2O + energy (energy released helps build ATP)</li>
                        <li>All organisms carry out cell respiration involving many steps, reactions, enzymes including redox reactions (glucose becomes oxidized to 6CO2, 6O2 becomes reduced to 6H2O)</li>
                        <li>Gradual release of energy in glucose to produce ATP gradually (if not gradual it would become unusable heat) since mitochondria uses energy from glucose breakdown to build ATP molecules through electron transport chain</li>
                        <li>Shuttle busses in cell respiration: NAD+ (empty oxidized form shuttle) + 2e- + H+ -> NADH (full reduced form shuttle carrying 2e- and 1H+), FAD (empty oxidized form shuttle) + 2e- + 2H+ -> FADH2 (full reduced form shuttle carrying 2e- and 2H+)</li>
                        <li><strong>Aerobic Cell Respiration (O2 present):</strong> Glycolysis -> prep reaction/oxidation of pyruvate -> citric acid/krebs cycle -> ETC (chemiosmosis/oxidative phosphorylation)</li>
                        <li><strong>Anaerobic Cell Respiration (O2 absent):</strong> Glycolysis -> fermentation --. alcohol or lactic acid</li>
                        <li>2 ATP from glycolysis, 2 ATP from krebs cycle, 32/34 ATP from ETC so 36/38ATP total</li>
                    </ul>

                    <h3>Aerobic Cell Respiration</h3>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card" style="grid-column:1/-1;">
                            <p class="note-card-title">Glycolysis</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Glyco = sugar, lysis = splitting, Occurs in both aerobic and anaerobic organisms since no O2 necessary in the cell cytoplasm</p>
                            <p style="margin:0 0 10px;font-size:12.5px;">Inputs: glucose(6C), 2NAD+, 2ATP, 4ADP+4Pi. Outputs: 2 pyruvates/pyruvic acids, 2NADH, 2ADP, 4ATP. Net outputs: 2ATP, 2Pyruvates, 2NADH full shuttles</p>
                            <ol style="margin:0;padding-left:18px;">
                                <li>Glucose(6C) gets phosphorylated by hydrolysis of 2ATPs in energy investment step</li>
                                <li>Glucose gets split into 2 G3P/PGAL (3) and each G3P gets oxidized and each loses 2e- and 1H+ to NAD+ ultimately forming 2 pyruvate/pyruvic acid molecules and generating ATP in process through substrate-level ATP synthesis in energy harvesting steps</li>
                                <li>Substrate Level Phosphorylation / Substrate Level ATP Synthesis/Fromation: coupling building of ATP (endergonic) w energy from enzyme-catalized exergonic rxn only generating small amts of ATP, simpler than ATP production via chemiosmosis/photophosphorylation</li>
                                <li>If O2 present, 2 pyruvates enter mitochondrial matrix where rest of cell respiration occurs. If O2 absent, fermentation occurs in cytoplasm.</li>
                            </ol>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Preparatory reaction / oxidation of pyruvate / link reaction</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Located in mitochondrial matrix, process links glycolysis to citric acid cycle by oxidizing the pyruvate product to form acetyla CoA product needed for citric acid cycle</p>
                            <p style="margin:0;font-size:12.5px;">Inputs: 2 pyruvates (3C), 2 coenzymeA (enzyme helped carrier acetyl group to citric acid cycle), 2NAD+. Outputs: 2 acetyl coA (2C), 2CO2 (1C waste product used in calvin cycle in photosynthesis or exhaled into atmosphere in heterotrophs), 2NADH (carries extra electrons/H+ to ETC)</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Citric acid cycle / Krebs cycle</p>
                            <ul style="margin:0;padding-left:18px;">
                                <li>Located in mitochondrial matrix, more CO2 released from organic intermediates, more ATP synthesized from ADP+P through substrate level phosphorylation, electrons/H+ from intermediates transferred to coenzyme carrier molecules, NADH and FADH2 shuttle buses carry them over to ETC</li>
                                <li>Acetyle coA -> coEnzyme A which goes back to prep rxn, 2CO2 released as NAD+->NADH and ADP+P-->ATP and FAD->FADH2 and NAD+->NADH again</li>
                                <li>Citric acid occures twice per glucose molecule since 2 pyruvates form from glycolysis</li>
                                <li>Inputs: 2 acetyl groups carried by coA, 6NAD+, 2FAD, 2ADP+2Pi. Output: 6NADH, 2FADH2, 2ATP, 4CO2, 2coA</li>
                            </ul>
                        </div>
                        <div class="note-card" style="grid-column:1/-1;">
                            <p class="note-card-title">Oxidative phosphorylation / ETC &amp; chemiosmosis (cell respiration)</p>
                            <p style="margin:0 0 8px;font-size:12.5px;"><strong>Oxidative Phosphorylation</strong>: process where NADH, FADH2, moving electrons, and H+ gradients used to create ATP through ETC/chemiosmosis. O2 is driving forceLocated in the inner cristae membrane of mitochondria & plasma membrane of aerobic prokaryotes</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Inputs: 10NADH+2FADH2+lots ofADP+P+6O2 -> Outputs: 10NAD++2FAD+lots o fATP+6H2O</p>
                            <p style="margin:0 0 10px;font-size:12.5px;">If this was decoupled from electron transport, the ETC wouldn't be coupled w ATP synthesis so the energy wopuld be lost as heat (ex: body temp regulation like brown fat in infants/hibernationg orgaanisms)</p>
                            <ol style="margin:0;padding-left:18px;">
                                <li>NADH and FADH2 carry H+/e- to cristae of mitochondria and get oxidized back to NAD+ and FAD which are resused to earlier steps</li>
                                <li>High energy electrons get passed along to molecules of ETC and leave as low energy</li>
                                <li>Protons get dropped of in mitochondria matrix and actively pumped into intermembrane space to form H+ gradient inside intermembrane space, contributing to ATP production and H+ in matrix also contribute to production of H2O from O2</li>
                                <li>Redox reactions allow electrons to get carried across chain (cytochrome molecules are redox carriers) releasing energy at each carrier</li>
                                <li>This energy released is used to power 3 proton pumps to actively pump H+ across cristae from matrix to intermembrane space to build steep gradient</li>
                                <li>ATP synthase provides channel to allow H+ to travel back down to matrix synthesizing ATP from ADP+P through chemiosmosis</li>
                                <li>O2 is final electron acceptor in ETC  which combines w available H+ to form water (0.5O2 +2e- +2H+ -> H2O)</li>
                            </ol>
                        </div>
                    </div>

                    <h3>Anaerobic Cell Respiration / Fermentation</h3>
                    <p>Process producing limited ATP amounts from glycolysis only if O2 is absent. Glycolysis occurs as usual w same inputs/outputs, but ETC can't proceed so NAD+ can't get regenerated. Yields 2ATP each time it happens which isn't much but some ATP can produced in absence of O2.</p>
                    <p>Pros: used for food prep like cheese, yogurt, pickles (lactic acid fermentation), yeasts used to make bread rise (alcohol fermentation), lactic acid fermentation needed in animal cells when muscles work vigorously/rapid energy burst</p>
                    <p>Cons: low yield of only 2 ATPs via substrate-level phosphorylation (during glycolysis), less efficient than aerobic respeication since 2.1% compared to 39% aerobic</p>
                    <div class="note-grid-2">
                        <div class="note-card-muted">
                            <p class="note-card-title">Alcohol fermentation</p>
                            <p style="margin:0;font-size:12.5px;">Occurs in fungi, yeast, bacteria, where pyruvates from glycolysis lose CO2 to become 2 acetaldehydre coupled with 2NADH->NAD+(needed for reuse) to become 2 ethanol</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Lactic acid fermentation</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Occurs in animal muscle cells, some fungi and some bacteria</p>
                            <p style="margin:0;font-size:12.5px;">2 pyruvates becomes 2 lacate coupled w 2NADH->2NA+ rxn for reuse</p>
                        </div>
                    </div>
                    
                    <h3>Metabolic Pool</h3>
                    <div class="callout">Primary pathway making ATP is by breaking down glucose/carbs, but if unavailable bodies may break down fats/triglycerides or proteins to get required energy and can alternatively lead to formation of molecules along pathway leading to ATP production</div>
                    `   
            },
            "Unit 4: Cell Communication & Cell Cycle": {
                tags: ["cell communication", "signal transduction", "ligands", "feedback", "cell cycle", "mitosis", "cell division"],
                content: `
                    <h2 id="h-u4-ch5b">Chapter 5B: Membrane Structure &amp; Function — Signal Transduction Pathways</h2>
                    <div class="callout" style="margin-bottom:16px;">
                        <p style="margin:0 0 8px;">Communication / cell signalling needed to make adjustments if needed to maintain homeostasis, can diffuse locally or travel distances</p>
                        <p style="margin:0;">Evolved millions of years ago in a common ancestor so similar pathways in most organism</p>
                    </div>

                    <h3>Types of Signals</h3>
                    <div class="note-grid-2" style="align-items:stretch;">
                        <div class="note-card-muted">
                            <p class="note-card-title">Autocrine Signaling</p>
                            <p style="margin:0;font-size:12.5px;">Cell targets and sends signal to itself</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Juxtacrine Signaling</p>
                            <p style="margin:0;font-size:12.5px;">Cell sends message to another cell through direct cell-to-cell contact</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Paracrine Signaling</p>
                            <p style="margin:0;font-size:12.5px;">Cell targets and sends nearby cell</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Endocrine Signaling</p>
                            <p style="margin:0;font-size:12.5px;">Cell sends signal/hormone through bloodstream to distant but specific cell</p>
                        </div>
                    </div>

                    <h3>Signal Transduction Pathways</h3>
                    <p>Cells interpret signals once received, basic pathway include signaling, reception, transduction, response.</p>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card">
                            <p class="note-card-title">1. Signaling</p>
                            <p style="margin:0;font-size:12.5px;">Signaling molecules / ligands serve as chemical messengers allowing specific target cells to communicate and respond appropriately. Ex: Steroid/protein hormones, neurotransmitters, growth facts, etc</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">2. Reception</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Receptor of target cells has both shape & charge compatibility w the ligand, ligands bind to protein receptors</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Cell-Surface Receptors - protein receptors embedded in cell membrane if too large to get through membrane (ex: protein hormone like insulin)</p>
                            <p style="margin:0;font-size:12.5px;">Intracellular Receptors - protein receptors located inside cell if small/hydrophobic (ex: steroid hormone, testosterone)</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">3. Transduction</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Where original intercellular signal gets converted into a series of intracellular signals triggering some cellular response</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Cascade of events / conformational changes and secondary messengers activating proteins like the secondary messenger and relaying orignal signal and amplifying it to cause response</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Amplification provides multiple opportunities for coordination/regulation in the cell</p>
                            <p style="margin:0;font-size:12.5px;">Common secondary messenger: cAMP (cyclic AMP) which targets and activates protein kinases which are enzymes phosphorylating and activating other enzymes in cascade</p>
                        </div>
                        <div class="note-card">
                            <p class="note-card-title">4. Response</p>
                            <p style="margin:0;font-size:12.5px;">Cellular responses including changes in gene expression, protein activity, metabolism, passage of substances in/out, division, death/apoptosis</p>
                        </div>
                    </div>

                    <h3>Cell Communication / Signal Transduction Examples</h3>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card-muted">
                            <p class="note-card-title">Peptide Hormone Endocrine Signaling</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Includes most hormones, peptides, proteins, glycoproteins, modified amino acids, all peptide derivative ligands</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Peptides hormones are lipid insoluble so can't pass through cell membrane</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Biinds specifically & reversibly to plasma membrane receptors which activates signal transduction pathway causing cell response</p>
                            <p style="margin:0;font-size:12.5px;">Ex: epinephrine (emergency fight or flight hormone) causing response of higher blood glucose levels</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Steroid Hormone Endocrine Signaling</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Lipids derived from cholesterol, secreted by adrenal cortex above kidneys, ovaries, testes</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Lipid soluble so can pass cell membrane and enter cell via membrane and bind to internal receptor in nucleus/cytoplasm instead of surface receptor</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Hormone-receptor complex binds to DNA and activates certain genes, mRNA produced which moves to the ribosome and synthesizes appropriate protein</p>
                            <p style="margin:0;font-size:12.5px;">Steroid hormones usually slower than peptide hormones bc takes longer to create protein from scratch instead of activating ones alr in the cell. Not as much internal messaging/transduction.</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Cell Communication in the Nervous System</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Adjacent nerve cells/neurons communicate w each other through paracrine signaling by releasing neurotransmitters</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Neurotransmitters - chemical messages stored in vesicles in axon terminal</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Membrane proteins (ex: voltage/ligand gated ion channels) along neuron cell membranes enable electrical messages (impulses) to travel along neurons causing release of neurotransmitters between neurons</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">These signals cause next neuron to become excited resulting in response</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Synapse: the region between neurons (nerve impulses cannot occur here and need to travel across gap as neurotransmitters</p>
                            <p style="margin:0;font-size:12.5px;">Voltage Gated Ion Channels In Neurons - enable/prevent passage of certain ions depending on voltage along neuron membrane, allowing impulses to travel across neuron (ex: Na+, K+, Ca2+ channels)</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Cell Communication in the Immune System</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Immune response to infection is release of chemical immune system protein messengers called cytokines</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Cytokines - affect behaviors and signal immune system to do its job (ex: mast cells important for wound healing/defense releasing cytokines to create inflammatory cascade increasing bloodflow - endocrine, macrophages WBC that destroy pathogens w enzymes releasing cytokines releasing more WBC's (endocrine) and then present antigen on membrane releasing more cytokines to stimulate helper T-cells to initaite defense (juxtacrine/paracrine) which stimulate cells producing antibodies and immune response releasing interferon proteins to alert neighboring cells - paracrine)</p>
                            <p style="margin:0;font-size:12.5px;">Some viral illnesses like COVID cause immune system overreaction</p>
                        </div>
                    </div>

                    <h3>Communication in 3 Body Systems</h3>
                    <div class="note-grid-3" style="align-items:start;">
                        <div class="note-card">
                            <p class="note-card-title">Endocrine System</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Ligands/intercellular primary signaling molecule messengers: HORMONES</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Peptide/protein hormones are large, hydrophillic, w receptor in cell membrane (ex: epinephrine, insulin)</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Steroid/lipid hormones are small, hydrophobic, w receptors in the cell (ex: estrogen, testosterone)</p>
                            <p style="margin:0;font-size:12.5px;">Have receptorsa on various target body cells depending on type of hormone</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Nervous System</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Ligands/intercellular primary signaling molecule messengers: NEUROTRANSMITTERS</p>
                            <p style="margin:0;font-size:12.5px;">Proteins/peptides have receptors in cell membrane of nerve cells</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Immune System</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Ligands/intercellular primary signaling molecule messengers: CYTOKINES</p>
                            <p style="margin:0;font-size:12.5px;">Proteins have receptors embedded in cell membrane of immune cells</p>
                        </div>
                    </div>

                    <div class="callout" style="margin-top:14px;">
                        <p style="margin:0 0 8px;font-size:12.5px;">Intracellular secondary messengers: cAMP (cyclic AMP) which initiate enzyme cascades in cell causing cellular response</p>
                        <p style="margin:0 0 8px;font-size:12.5px;"><strong>PROTEIN KINASES</strong>: enzyes that are a big part of enzyme cascades since they phosphorylate and activate/deactivate other enzymes/proteins in the cascade</p>
                        <p style="margin:0 0 8px;font-size:12.5px;">PHOSPHORYLATE = add phoswphate, PHOSPHORYLATION changes the shaqpe of the protein along cascade to activate/deactive it</p>
                        <p style="margin:0;font-size:12.5px;">Amplification - big response from tiny signal activating hundreds of molecules and speeds up response quickly/efficiently</p>
                    </div>

                    <h2 id="h-u4-ch9">Chapter 9: The Cell Cycle and Cellular Reproduction (Cell Division)</h2>
                    <h3>The Cell Cycle</h3>
                    <div class="note-card-muted" style="margin-bottom:12px;">
                        <p style="margin:0 0 8px;font-size:12.5px;">The life of a cell from formation to division, in between division the cell grows larger (to a limit), organelle # increases, DNA is replicated, cell functions continue</p>
                        <p style="margin:0;font-size:12.5px;">Cell cycle/life spans vary by type and divides at diff rates (ex: embryonic cells divide very fast, bone cells divide slow, nerve/muscle cells don't replicate at all once mature)</p>
                    </div>

                    <h3>Cell Cycle Stages</h3>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card" style="grid-column:1;">
                            <p class="note-card-title">Interphase</p>
                            <p style="margin:0 0 10px;font-size:12.5px;">Phase between active cell divisons, includes the G1, G0, S, and G2 phases</p>
                            <p style="margin:0 0 6px;font-size:12px;font-weight:500;color:var(--ink);">G1 Phase (gap or growth phase 1)</p>
                            <ul style="margin:0 0 12px;padding-left:18px;">
                                <li>Cell recovers from past division, replicates organelles, grows a little in size, accumulates raw materials for DNA replication, carries out function</li>
                            </ul>
                            <p style="margin:0 0 6px;font-size:12px;font-weight:500;color:var(--ink);">S Phase (DNA synthesis/replication phase)</p>
                            <ul style="margin:0 0 12px;padding-left:18px;">
                                <li>DNA copied so daughter cells have complete set of chromoesome after cell divides, proteins associated w DNA replication synthesizes, cell carries out functions</li>
                                <li>DNA is unraveled in form of chromatin (tangled mass of threads) though but it still replicates</li>
                                <li>Sister chromatids remain attached at centromere until they seperate during mitosis. Histone proteins coil/condense replicated DNA into chromosomes. Diploid # is species characteristic number of chromeomses found in all cells as homologous chromomosomes (2n), haploid # is cells containing one chromosome of each kind - gametes like sperm and egg cells </li>
                                <li>Centrosome (microtubule organizes center of cell, each containing two centrioles in animal cells only) replication begins during S phase but ends in G2</li>
                            </ul>
                            <p style="margin:0 0 6px;font-size:12px;font-weight:500;color:var(--ink);">G2 Phase (gap or growth phase 2)</p>
                            <ul style="margin:0 0 12px;padding-left:18px;">
                                <li>Phase between replication and division, cell functions continue, cell synthesizes proteins necessary for divison like proteins that assemble microtubules or form mitotic spindle fibers</li>
                                <li>Centrosome replication finishes here</li>
                            </ul>
                            <p style="margin:0 0 6px;font-size:12px;font-weight:500;color:var(--ink);">G0 Phase</p>
                            <ul style="margin:0;padding-left:18px;">
                                <li>Cell stage enters when it continues to perform normal everyday activities w/o preparing for cell division</li>
                                <li>Most mature adult cells remain in G0 and never divide again but can enter G1 phase if necessary, but mature nerve/muscle cells never reenter cell cycle</li>
                            </ul>
                        </div>
                        <div style="display:flex;flex-direction:column;gap:12px;">
                            <div class="note-card-muted">
                                <p class="note-card-title">Mitotic (M) Phase</p>
                                <ul style="margin:0 0 10px;padding-left:18px;">
                                    <li>Phase where sister chromatids are separated and distributed to 2 daughter cells</li>
                                </ul>
                                <p style="margin:0 0 8px;font-size:12.5px;">Includes mitosis/nuclear division (prophase, prometaphase, metaphase, anaphase, telophase)</p>
                                <ul style="margin:0 0 12px;padding-left:18px;">
                                    <li>Mitosis - continous process arbitrarily divided into 5 phases, aids in growth/development to increase # of cells present (2n zygote -> 8 cell stage-> blastula-> gastrula->embryo->fetus), repair of lost cells</li>
                                    <li>Prophase - Chromatin has condensed into distinguishable chromosomes that is already duplicated composed of 2 sister chromatids held by centromere (count centromeres to get # of chromoesomes). Nucleoli disappear, nuclear envelope begins to disintegrate, spindle fibers consisting of microtubules begin to assembles as centrosomes move away from each other</li>
                                    <li>Prometaphase (aka late prophase) - nuclear envelope continues to fragment allowing microtubule spindle fibers to attach to chromosomes, centromeres develope kinetochromes which are specialized protein complex representing spindle fibers attach location, chromsomes attach to spindle fibers but not yet aligned at center of cell</li>
                                    <li>Metaphase - centromeres now aligned on single plate (metaphase equatorial plate) in middle of cell</li>
                                    <li>Anaphase - sister chromatids seperate away from each other giving rise to daughter chromosomes each w a centromere that move via microtubule track to opposite poles pulled by spindle fibers causing cell elongation so each pole has copmplete equal set of chromosomes</li>
                                    <li>Telophase - spindle fibers disappear/disassemble, new nuclear envelopes reform around each set of daughter chromosomes, chromosomes begin to unravel into chromatin again. Each daughter nucleus contains same # and kinds of chromosomes as original parent nucleus</li>
                                </ul>
                                <p style="margin:0 0 6px;font-size:12px;font-weight:500;color:var(--ink);">Cytokinesis</p>
                                <ul style="margin:0;padding-left:18px;">
                                    <li>Division of cytoplasm splitting cell, resulting in 2 daughter cells w identical DNA to parent, allocates cytoplasm equally and encloses daughter w membrane</li>
                                    <li>Animal Cells: cleavage furrow (membrane indentation) appears between daughter nuclei formed by contractile ring of actin microfilaments forming circular constriction pinching daughter cell in 2</li>
                                    <li>Plant Cells: cell wall prevents furrowing, cell plate formed which involves golgi producing vesicles which eventually fuse into one thin vesicle extending across middle of mother cell, cell plate forms as more vesicles arrive and fuse which releases molecules forming new cell wall strengthened by shuttling of cellulose, space between daughter cells becomes filled w middle lamella cementing adjacent cells together</li>
                                </ul>
                            </div>
                            <div class="note-card-muted">
                                <p class="note-card-title">Checkpoints / Control of Cell Cycle</p>
                                <p style="margin:0 0 8px;font-size:12.5px;">Cell cycle must be regulated for normal cell growth through internal/external signlas influencing cell activity</p>
                                <p style="margin:0 0 8px;font-size:12.5px;">G1 phase (restriction) checkpoint - main important checkpoint, cell remains in G0 until it passes this, ensuring DNA isn't damaged before replication and environemnt is appropriate w enough energy/nutries and growth signals/resources available. Proceed to S phase if passes (Located between G1 and S phase)</p>
                                <p style="margin:0 0 8px;font-size:12.5px;">G2 phase (mitosis) checkpoint - ensures DNA has finished replicating properly and all proteins are made aiding in cell division, DNA not physically damaged, enough energy to divide. If pass it proceeds to mitosis, otherwise it stops until fixed. (located in G2 phase right before end)</p>
                                <p style="margin:0;font-size:12.5px;">M phase (spindle assembly) checkpoint - ensyres chromosomes properly attached to spindle fibers so proper # of chromosomes can be distributed to daughter cells, if not mitosis will not continue (located in between meta and anaphase of mitosis)</p>
                            </div>
                        </div>
                    </div>

                    <h3>External Signals / Factors</h3>
                    <div class="note-grid-3" style="align-items:start;">
                        <div class="note-card-muted">
                            <p class="note-card-title">Anchorage Dependence</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Most cells must contact solid surface to divide, must be anchored</p>
                            <p style="margin:0;font-size:12.5px;">Anchored cell can divide, not anchored cell can't grow/divide</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Density-Dependent Inhibition</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Crowded cells will stop dividing, uncrowded cells may divide</p>
                            <p style="margin:0;font-size:12.5px;">Higher density=no growth/division, low density=cells can divide</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Growth Factors</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Proteins released by cells stimulating division of other cells</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">At least 50 diff growth factors in body</p>
                            <p style="margin:0;font-size:12.5px;">Cell that receives growth factor signal goes on to divide, if not cell won't divide</p>
                        </div>
                    </div>

                    <h3>Internal Signals/Factors</h3>
                    <p>For cell to move past checkpoints, all positive regulators should be on and negative regulators off</p>
                    <p style="margin:16px 0 8px;font-family:var(--mono);font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink3);">Positive regulators</p>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card">
                            <p class="note-card-title">Cyclin Dependent Kinases (Cdk's)</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Enzymes always present in cell in relatively stable amt but only active when bound to cyclin proteins and phosphorylated by other kinases</p>
                            <p style="margin:0;font-size:12.5px;">Kinases - class of enzyme proteins that add P to substrate, changing shape and activating them, providing energy through phosphorylation for processes</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Cyclins</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Proteins made at specific times in cell cycle that activate specific CDKs, encoded by group of proto-oncogenes</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">If bound to cyclinks, CDKs will give signals at cell cycle checkpoints</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">If no cyclins present or bound to CDKs, cell cycle will stop at checkpoint and not proceed</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Cyclin concentrations fluctuate and determine when cdk/cyclin complexes form and bind at specific pts</p>
                            <p style="margin:0;font-size:12.5px;">Active cyclins from previous stage degraded as cell moves to next stage, cyclin concentration increases triggered by external/internal signals</p>
                        </div>
                    </div>
                    <p style="margin:18px 0 8px;font-family:var(--mono);font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink3);">Negative regulators</p>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card-muted">
                            <p class="note-card-title">Retinoblastoma Protein (Rb)</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Tumor-suppresor protein monitoring cell-size halting progression to S phase until cell appropriate size</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Active/dephosphorylated state - Rb binds to E2F transcription factor which blocks production of proteins needed for G1/S transition and Rb slowly phosphorylated by Cdks until inactivated as cell increases in size</p>
                            <p style="margin:0;font-size:12.5px;">Inactive/phosphorylated state - Rb releases E2F which can turn on gene producing proteins necessary for S phase progression</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">p53 and p21</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Tumor suppressor proteins impacting cell division</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">If damaged DNA in cells during G1 detected, p53 halts cell cycle and recruits enzymes to repair DNA</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">If DNA can't be repaired, p53 triggers apoptosis/programmed cell death to prevent duplicating damaged chromosomes</p>
                            <p style="margin:0;font-size:12.5px;">Rising p53 levels produces p21 which enforces halt in cycle dictated by p53 by binding/inhibiting Cdk/cyclin complex activity</p>
                        </div>
                    </div>

                    <h3>Apoptosis</h3>
                    <div class="note-card-muted">
                        <p style="margin:0 0 8px;font-size:12.5px;">Programmed cell death where cell events bring about death induced by caspase enzymes</p>
                        <p style="margin:0 0 8px;font-size:12.5px;">First cell rounds up/dissociates from other cells, nucleus fragments, plasma membrane blisters forming blebs, cell fragments contain DNA fragments which get engulfed by WBCs</p>
                        <p style="margin:0 0 8px;font-size:12.5px;">Cell division & apoptosis are opposing forces that increase/decrease cell # maintaining homeostasis at appropriate cell #</p>
                        <p style="margin:0;font-size:12.5px;">Functions: necessary for development (ex: webbed fingers/toes disappear), prevent abnormal cells from becoming canerous, kill virus-infected cells, prevent tuumor from developing</p>
                    </div>

                    <h3>Adult Stem Cells</h3>
                    <div class="note-card">
                        <p style="margin:0 0 8px;font-size:12.5px;"><strong>Stem Cell</strong>: immature, undifferentiated cell capable of producing many diff types of mature differentiated/specialized cells</p>
                        <p style="margin:0 0 8px;font-size:12.5px;"><strong>Cell Potency</strong>: cell's ability to differentiate into other cell types (totipotent/omnipotent most able to differentiate (ex: zygotes), pluripotent early embryonic stem cells, multipotent umbilical cord stem cells, unipotent least able to differentiate (ex: specialized adult cells))</p>
                        <p style="margin:0 0 8px;font-size:12.5px;"><strong>Differentiation</strong>: process where cells begin to specialize, plays role in morphogenesis causing organism to develop its shape</p>
                        <p style="margin:0 0 8px;font-size:12.5px;">Types of stem cells: early embryonic stem cells, umbilical cord stem cells, adult stem cells, induced multi-potent stem cells w lots of potential</p>
                        <p style="margin:0;font-size:12.5px;">Most adult cells remain in G0 phase and don't need to divide but are still able to divide if needed to replensish</p>
                    </div>

                    <h3>Prokaryotic Cell Division</h3>
                    <div class="note-card-muted">
                        <p class="note-card-title">Binary Fission</p>
                        <p style="margin:0 0 8px;font-size:12.5px;">Duplicate circular DNA before division, rokaryotes elongate until double original size, then pinches/seperates to 2 identical daughter cells (very quick process overall)</p>
                        <p style="margin:0;font-size:12.5px;">2 new individuals formed so for prokaryotes, cell division is like asexual reproduction where offspring are genetically identical to parent</p>
                    </div>

                    <h3>Cancer</h3>
                    <div class="note-card-muted" style="margin-bottom:12px;">
                        <p style="margin:0 0 8px;font-size:12.5px;">Cellular growth disorder resulting from uncontrolled cell division, usually gradual result of accumulating mutations</p>
                        <p style="margin:0;font-size:12.5px;">Regulatory factors usually prevent it from becoming cancerous</p>
                    </div>
                    <p style="margin:0 0 10px;font-size:12.5px;">Cancer cells lack differentation (not specialized, don't contribute to tissue function), immortal (can enter cell cycle indefinite # of times), look abnormal/have abnormal nuclei (nuclei may be unlarged w abnormal chromosome # or extra/deleted gene copies), dont undergo apoptosis unless immune system triggers external signal</p>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card">
                            <p class="note-card-title">Tumor types</p>
                            <p style="margin:0;font-size:12.5px;"><strong>Tumor</strong>: abnormal overgrowth of cells piled on top of each other since cancer cells have no CONTACT INHIBITION controlling mitosis (benign: not cancerous, encapsulated, don't spread/invade neighboring tissue. malignant: cancerous, not encapsulated, invade neighboring tissue, detach/lodge in distant places through metastasis, results from gene mutations)</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Metastasis &amp; angiogenesis</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Cancer cells undergo metasis - additional mutations making benign-&gt;malignant, malignant tumor have potential for metastasis and can spread through body/blood and form new tumors</p>
                            <p style="margin:0;font-size:12.5px;">Cancer cells undergo angigensis: mutations allowing for formation of new blood vessels into tumor receiving nutrients&amp;oxygen for growth but healthy cells become deprived of nutrients</p>
                        </div>
                    </div>
                    <div class="callout">
                        <p style="margin:0 0 8px;font-size:12.5px;">Origin: caused by mutations usually affecting proto-onco genes (ex: cyclins, cdks, growth factors) which are proteins promoting cell cycle/preventing apoptosis which can be mutated to become oncogene promoting uncontrollable cell divison since thye never turn off. or affecting tumor-suppresor genes (ex: Rb, p53,p21) which are proteins inhibiting cellcycle promoting apoptosis but mutation causes no more inhibition</p>
                        <p style="margin:0 0 8px;font-size:12.5px;">Causes: growth factor binds to receptor protein initiating rxn triggering stimulatory pathway whcich begins at plasma membrane turning on protooncogene which promote cell cycle. inhibtory pathway begins w tumor-suppressor genes where products inhibit cell cyle unless mutated</p>
                        <p style="margin:0;font-size:12.5px;">Other causes: telomerase (enzyme regulating telomere - end of chromomsome preserving DNA loss - length) mutation causing unregulated activity allowing uncontrolled cell division in cancer cells w/o preservation</p>
                    </div>

                    <h3>C-words</h3>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card-muted">
                            <p style="margin:0 0 8px;font-size:12.5px;"><strong>Chromosome</strong>: coiled DNA visible at mitosis start, looks like X if double or can be half of an X if single</p>
                            <p style="margin:0 0 8px;font-size:12.5px;"><strong>Chromatin</strong>: uncoiled material making up chromosomes DNA, looks like messy threads</p>
                            <p style="margin:0;font-size:12.5px;"><strong>Chromatid</strong>: one of the 2 identical hales of a replicated chromosome (each half on either side of the centromere are sister chromatids)</p>
                        </div>
                        <div class="note-card">
                            <p style="margin:0 0 8px;font-size:12.5px;"><strong>Centriole</strong>: Organelle in animal cell determining plane of division found inside centrosome</p>
                            <p style="margin:0 0 8px;font-size:12.5px;"><strong>Centromere</strong>: Middle of chromosome joining sister chromatids and attachment point for spindle fibers during division</p>
                            <p style="margin:0;font-size:12.5px;"><strong>Centrosome</strong>: Organelle made of microtubules containg centrioles from which spindle fibers develop in cytoplasm</p>
                        </div>
                    </div>
                    `
            },
            "Unit 5: Heredity": {
                tags: ["meiosis", "sexual reproduction", "genetics", "mendel", "diversity", "genotype", "phenotype"],
                content: `
                    <h2>Chapter 10: meiosis and Sexual Reproduction</h2>
                    <ul>
                        <li>Cell division used for making gametes (haploid (n) reproductive sex cells like sperm/egg) for sexual reproduction in animals from dipolid parent germ cells (2n), reducing the chromosome # in half to prep for fertilization</li>
                        <li><strong>Germ Cells</strong></p>: cells that germinate (give rise to) the gametes</li>
                        <li>Meiosis is 2n parent makes n daughtswhich are sperm/egg that combine w/ fertilization/NO DIVISON to form a 2n zygote which goes through mitosis where 2n parent makes 2n daughters</li>
                        <li>Human diploid = 46 chromosomes in all cells but gametes, Human haplod = 23 chromosomes in gametes</li>
                        <li>Meosis must happen in animals to reduce chromosome # in half so it can be restored in fertilization</li>
                        <li>1 DNA replication & 2 cell divisions (2n-> n+n --> n+n+n+n (same amt of chromosomes but DNA cut in half)</li>
                    </ul>

                    <h3>Homologous Pairs of Chromosomes</h3>
                    <ul>
                        <li>XX female, XY male, Y chromosomes is smaller than X</li>
                        <li>Diploid cells have 2 chromosomes of each type in pairs called homologous chromosomes / homologues</li>
                        <li>Homologues have same length, centromere position, contain genes coding for same traits found in same locations along chromosome, and similar banding pattern when stained in a karyotype</li>
                        <li>Genes may say diff things abt these same traits since one homologue from mother and one from father</li>
                    </ul>
                    <h3>Alleles</h3>
                    <p>Alternate forms of a gene</p>
                    <p>An individual might have identical alleles for a specific gene on both homologues (homozygous for trait) or a maternal allel that differs from the corresponding paternal allel (heterozygous for trait)</p>
                    <p>Gametes produced by meiosis only have one chromosome of each kind derived from either paternal or maternal homologue</p>

                    <h3>MEIOSIS</h3>
                    <p>Reduce chromosome # from 2n->n, cell goes through cell cycle and synthesizes second copy of DNA just like mitotic cells during S phase but after G2 it enters meiosis which consists of 2 stages/cell divisions (meiosis I/division I and meiosis II/divisionII)</p>
                    <p>Main functions: retai species # of chromomsomes from generation to generation by reducing chromeomse $ to half when producing gametes, to increase genetic variability essential for evolution</p>

                    <h3>Interphase</h3>
                    <ul>
                        <li>G1 phase (same as mitosis)</li>
                        <li>S phase (includes DNA replication, same as mitosis)</li>
                        <li>G2 phase (same as mitosis)</li>
                    </ul>
                    <h3>Mitotic Phase</h3>
                    <div>
                        <div>
                            <p><strong>MEIOSIS I</strong></p>
                            <p>DNA replicated before meoisis I so each chromosome consists of 2 identitcal sister chromatids at start of meiosis. Early in meiosis I, homologous chromosomes pair up through synapsis/crossing over forming a tetrad (often exhcange genetic info during this to increase variation)</p>
                            <p>Homologous pairs then align themselves against each other side by side double file on either side of the metaphase plate</p>
                            <p>2 members of a homologous pair then separates and each daughter cell receives one duplicated chromosome from each pairs, DNA not replicated again between meiosis I and mesiosis II</p>
                            <ul>
                                <li>PROPHASE I: each chromosome pairs w its domolgous, synpasis/crossing over occurs here which contributes to differentiation/genetic variability, nuclear envelope breaks apart and spindle apparatus begins to form</li>
                                <li>METAPHASE I: homologous pairs align double file at metaphase plate, ends when homologous pairs begin to seperate. Independent assortment of chromosomes also increases genetic variability</li>
                                <li>ANAPHASE I: homologous chromosomes separate and move to opposite poles of the cell</li>
                                <li>TELOPHASE I: nuclear membrane reforms and process of cytoplasmic division begins</li>
                                <li>CYTOKINESIS I: 2 daughter cells split, producing cells that are haploid</li>
                                <li>INTERKINESIS: similar to interphase between mitotic divisons except DNA replication doesn't occur again since chromsomes are already duplicated!</li>
                            </ul>
                        </div>
                        <div>
                            <p><strong>MEIOSIS II</strong></p>
                            <p>Very closely mirrors mitosis, chrosmoomes allign single file, sister chromatids seperate and move to opposite poles</p>
                            <p>4 daughter cells each contain one daughter chromosome from each pair, each daughter chromosome consists of a single chromatid, daughter cells are haploid. (always count chromosomes based on # of centrosomes present)</p>
                            <ul>
                                <li>PROPHASE II: nclear envelope breaks apart and spindle apparatus begins to form</li>
                                <li>METAPHASE II: sister chromatids align along metaphase plate</li>
                                <li>ANAPHASE II: sister chromatids separate and are called daughter chromosomes as they're pulled to opposite poles</li>
                                <li>TELOPHASE II: nuclei and nucleoli for newly split cells reform</li>
                                <li>CYTOKINESIS II: newly formed daughter cells physically divide resulting in 4 haploid daughter cells</li>
                            </ul>
                        </div>
                    </div>

                    <h3>Genetic Variation</h3>
                    <p>Asexually reproducing organisims have mutations, conjugation via conjugation pili, transformation if cells pick up free pieces of DNA from environment, or transduction when bacteriophage viruses carry portions of DNA between cells. (more favorable in stable environement since lots of offspring and variation not needed</p>
                    <p>SEexually reproducing organisms have mutations and genetic recombination via meiosis (crossing over/independent assortment) and random fertiliziation) (more favaorable in unstable environment bc vartiability gives more change of survival, evolultion, and repdroducition)</p>
                    <p><strong>How Meoisis Brings About Genetic Variation</strong></p>
                    <div>
                        <div>
                            <p>CROSSING OVER OF NON SISTER CHROMATIDS (SYNAPIS): during prophase I nonsister chromatids of a tetrad excvhange genetic material. At synapsis a lattice appears between homologuses holding them together aliging DNA for successful crossing over (occurs at chiasma location), and once crossed over they seperate and are distribtued to different daughter cells. 2-3 crossovers occur per human cjhroosmesoem</p>
                        </div>
                        <div>
                            <p>INDEPENDENT ASSORTMENT OF HOMOLOGOUS CHROSOMOESMES: when they align on metaphase plate, they align/seperate randomly since maternal or paternal homologoue can be oriented towards either pole, causing random mixing of allels into gametes. Organism w 23 chromosme pairs has 2^23 possible comibinations so crossing over (esp if multiple times) causes lots of variation!</p>
                        </div>
                    </div>

                    <h3>Cycle of Life</h3>
                    <p>Life cycle: sequence of events making up reproductive cycle of an organismm</p>
                    <ul>
                        <li>LIfe Cycle for Diploid Organisms like anima/shumas (have no multicellular haploid stage): meoisis occurs in germ cells called gametogenesis (seperamtosgenessis producing sperm in testis or oogenesis in ovaries producing egg)</li>
                        <li>Sperm & egg join in fertilization making a diploid zygote which undergoes mitosis during growth/developpment to become a fetus -> child -> adult where mitosis repairs and rpleaces tissue as an adult</li>
                        <li>Benefit to being diploid: orgs have backup copy of all genes, recessive genes can get masked which is good esp if diseased, extends variability</li>
                        <li><strong>SPERMATOGENESIS</strong>: sperm production in testes from adult stem cell called spermatogonium to germline cell called spermatocyte w alr duplicated DNA, then splits into 2 secondary spermatocyes in meisosis I, 4 sp[ermatids in meosis 2, and 4 sperm result through differentiation]. Process begins at puberty</li>
                        <li><strong>OOGENESIS</strong>: egg prduction in overies, starting from adult stem cell called oogonium, then primary oocye, than splits into 1 secondary and 1 polar body, secondary develpp[s into ootid and polasr body, ootid develops iinto 1 mature egg result, the first polar body sometimes splits into 2 more polar bodies which degrade. The polar bodies are caused by unequal cytoplasm pliting. Process begins prior to birth, and meiosis II only occurs if sperm penetrates the 2nd oocyte). Results in egg + 2-3 polar bodies</p>
                    </ul>

                    <h3>Chromsome Number/Structure Changes</h3>
                    <p>If chromosomes fail to sperate, p[roblem could ensue leading to gain/loss of chromsomes in the next cell line called nondisjunction or extra/missing parts of chromoesomes</p>
                    <p>Primary Nondisjunction: occurs in meiosis I when homologous chromosmes fail to sperate.</p>
                    <p>Secondary Nondisjunction: occurs in meiosis II when sister chromatids fail to seperate</p>
                    <p>Monosomies and trisomies in autosomes/non-sex chromosomes usually lethal. Onl;y 3 viable beoynd birth (trisomy 13, trisomy 18, trisomy 21/down syundrome which is extra copy of chromosome 21)</p>
                    <p>Karyotype - visual display of homologous chromsomes arranged by size, shape, and banding patttern</p>
                    <p>Changes in sex chromsomes number are better tolerated since in reality, both males (XY)/female (XX) only have one funcitoning X chromsomes, females extra X chromsome is called a Barr body</p>
                    <p>Turner Syndrome - female missing second x chromsomes, usually leads to less female charaterissies,no puberty or menstruate, sterile, usually function nromally and normal intelligence</p>
                    <p>Klinefelter Styndrome - male w 2 or more extra x chromsomes, extra X becomes Barr bodies, testes/protesta/facial hair lacking, slow to learn but usually no major cognitive disabilitit,s, increased risk of cancer, can be treated somewhat w testosterone therapy, sterile</p>
                    <p>Polar X Famles (Super females): females w more than 2 x chromsomes, no distnicnt phenotype but usually tall/thin, sometimes learning difficuilties and delayed motor/language fevleopment, fertile but menstrual difficulties</p>
                    <p>Jacob's Syn drome: XYY males, taller than avg, persistent acne, speech, and reading diffufculty, are fertile</p>
                    
                    <h3>Changes in Chromosome Sturcutre</h3>
                    <p>Agernts in environemnt like radiation, certain viruses, or chemical can cause chromsomes to break but sometimes resulting in abnormalities</p>
                    <p>DELETION: when one/both ends of a chromsome breaks off or two simulatneous breaks lead to loss of an internal segment (ex: Williams SYndrome, Cri du Chat Syndrome)</p>
                    <p>DUPLICATON: presence of a chromsomeal srgment more than once in the same chromsome</p>
                    <p>INVERSION: occurs as a result of 2 breaks in a chromomse, internal segfment reversed before re-insertion, genes occur in reverse order in the inverted segment</p>
                    <p>TRANSLOCATION: when a segment from one chromsome moves to non-homologuus chromsome following breakage of two non-homolgous chromosmes and improper resassmbly (ex: Alagille Syndrome, often redposnible for cancers like some luekemia/lympohma cancers)</p>

                `
            },
            "Unit 6: Gene Expression and Regulation": {
                tags: ["DNA", "gene expression regulation", "transcription", "translation"],
                content: `
                    <h2>Chapter 12: Molecular Biology of the Gene</h2>
                    <p><strong>DNA (deoxyribonucleic acid)</strong></p>
                    <ul>
                        <li>A nucleic acid (organic compound) made of nucelotide monomers (phosphate group, pentose sugar, nitrogen base)</li>
                        <li>?Double stranded helix w/ antiparallel strand (3' to 5', 5' to 3')</li>
                        <li>Genetic material and basis of life on Earth, stablely storing info and able to efficiently replicate and undergo mutations for evolution</li>
                        <li>Backbone sugar/phosphates held together by phosphodiester covalent bonds</li>
                        <li>Hydrogen bonding holding nitrogen bases together (2 H bonds between A and T, 3 H bonds between G and C)</li>
                        <li>Purines (double rings): Adenine and Guanine, Pyramidines (single rings): Thymine and Cytosine</li>
                    </ul>

                    <h3>DNA Experiments</h3>
                    <div>
                        <div>
                            <p><strong>Frederick Griffith</strong></p>
                            <ul>
                                <li>Performed transformation experiments with bacteria causing pneumonia, with S (smooth) strain bacteria being virulent/causing pneumonia vs R (rough) strain bacteria being harmless</li>
                                <li>Live S-strain bacteria w capsule are virulent killing mice, Live R-strain bacteria w/o capsule aren't virulent and don't kill mice, heat-killed S-strain bacteria don't kill mice, but suprisingly heat-killed S strain bacteria+live R-strain bacteria combined kills mice since it activates S strain again.</li>
                                <li>Conclusion: R-strain bacteria transformed into virulent bacteria bc bacteria can transfer some factor between bacteria cells, so the virulent S-strain genes were transferred to R-strain bacteria which killed mice</li>
                            </ul>
                        </div>
                        <div>
                            <p><strong>Avery, Macleod, & McCarty</strong></p>
                            <ul>
                                <li>Since chromosomes made of DNA & proteins, their experimentation w enzymes digesting DNA RNA or proteins proved DNA was genetic material not proteins</li>
                                <li>Only enzymes digesting DNA prevented transofrmation</li>
                            </ul>
                        </div>
                        <div>
                            <p><strong>Hershey & Chase</strong></p>
                            <ul>
                                <li>Firmly establish DNA as genetic material by infecting E coli bacteria w bacteriophage viruses composed of either radioactive DNA or proteins</li>
                                <li>Phosphorus-32 and Sulfur-35 tracers used and when shaken, DNA tracers ended inside bacteria cells helping make more viruses but protein tracers remained outside</li>
                            </ul>
                        </div>
                        <div>
                            <p><strong>Franklin & Wilkins</strong></p>
                            <ul>
                                <li>Uncovered DNA structure using X-ray diffraction to produce DNA photos, showing repeatingxray crystallography patterns to James Watson</li>
                            </ul>
                        </div>
                        <div>
                            <p><strong>Erwin Chargaff</strong></p>
                            <ul>    
                                <li>Used chemical techniques to analyze details about DNA nucelotide bases</li>
                                <li>Uncovered amt of each base varies from species but A=T and G=C</li>
                            </ul>
                        </div>
                        <div>
                            <p><strong>Watson& Crick</strong></p>
                            <ul>
                                <li>Created twisted, double helix DNA model w/ 5 carbo deoxyribose sugar-phosphate backbone w antiparallel strands going opposite directions and hydrogen bonded base rangs</li>
                                <li>Complementary base pairings betwee two-ringed purines and single-ring pyrimidines (A with T, G with C) determined from consistent equal spacing between 2 strands of DNA evident from Franklin's xray diffraction</li>
                            </ul>
                        </div>
                        <div>
                            <p><strong>Meselson & Stahl</strong></p>
                            <ul>
                                <li>Determined DNA replicates semiconservatively w/ each parent DNA strand a template for new daughter strand</li>
                                <li>Daughter DNA: one old strand and one new strand</li>
                                <li>Experiment include N-labeled DNA sorted by density between N-15 vs N-14</li>
                            </ul>
                        </div>
                    </div>
                    <p><strong>Horizontal Gene Recombination</strong>: causes variation in prokaryotes (transformation, transduction, conjugation)</p>
                    <ul>
                        <li><strong>TRANSFORMATION:</strong> cell pick up free pieces of DNA from surrounding, either secreted by live prokaryotes or released by deadprokaryotes</li>
                        <li><strong>TRANSDUCTION:</strong> bacteriophages carry portions of DNA from one cell to another</li>
                        <li><strong>CONJUGATION:</strong> two bacteria temporarily linked together often through conjugation/sex pili, and once linked the bacteria passes its DNA to the other</li>
                        <li><strong>GENETICALLY MODIFIED ORGANISMS (GMOs):</strong> transformed bacteria/organisms result in valuable biotech products, like green fluorescent protein gene in jellyfish being transferred to other orgs to make it glow in dark since all orgs have same 4 bases and common ancestor</li>
                    </ul>

                    <h3>DNA Replication</h3>
                    <p>Process of copying an original/template DNA molecule to prep for cell division in S-phase</p>
                    <p><strong>Semiconservative Replication</strong>: each parent DNA double helix strand is template for new daughter strand, supported by Meselson & Stahl experiment</p>
                    <p><strong>BASIC STEPS:</strong> Parent DNA double helix unwinds w help of enzyme helicase breaking hydrogen bonds between bases. Free nuecleotides from the nucleus get paired/connected w nucleotides on parent strands w help of DNA polymerase.</p>
                    <p><strong>RESULT:</strong> Each daughter DNA molecule contains one old and one new strand antiparallel (5->3, 3<-5) both identical to each other and parent</p>

                    <h3>Prokaryotic DNA Replication</h3>
                    <p>Located in cytoplasm, usually moving around bactera's circular DNA molecule/plasmid in both directions beginning at origin of replication, taking 40 min although cell divides every 20 min, producing 2 identical DNA circles (new round of replication begins before previous round complete)</p>

                    <h3>Eukaryotic DNA Replication</h3>
                    <p>Located in nucleus, multiple replication bubbles to speed up process but still takes much longer hours</p>
                    <ol>
                        <li>Replication begins at numerous origin points along linear chromosomes called origins of replication which is the middle of the replication bubble (in chromosomes in the nucleus)</li>
                        <li>Replication bubbles form at these origins which get larger and spread bi-directionally until they all fuse together and meet when replication is complete</li>
                        <li>Replication Fork: Y-shape apparent wherever DNA is being replicated at the end of each replciation bubble</li>
                        <li>Helicase enzyme: unwinds double helix at replicaton forks and separates parent strands, making each strand available as a template for daughter DNA</li>
                        <li>Single Strand Binding Proteins (SSBPs): hold 2 DNA strands apart</li>
                        <li>Topoisomerase Enzymes: lessen tension and relax supercoiling on tightly wound helix in front of replication fork outside the replication bubble by breaking, swiveling, and rejoining DNA strands</li>
                        <li>DNA polymerase: build new DNA polymers binding free nucleiotides to existing DNA pairing AT GC, but can only build in 5' to 3' direction and can't initiate synthesis of the strand, only add to pre-existing chain (PROBLEM SINCE DNA STRANDS MUST RUN ANTIPARALLEL</li>
                        <li>Primase enzymes: construct short initial RNA nucleotide chain primer corresponding to parent DNA since DNA polymerase needs a free 3' end to attach nueecleotides and can't initiate synthesis</li>    
                        <li>Leading and lagging strands get constructed differently (see section below)</li>
                        <li>Lastly, replication bubbles fuse and DNA polymerase checks/corrects any error</li>
                        <li>Telomere Replication: telomerase replaces lost telomere DNA if needed since DNA polymerase can't replicate telomeres (short repeating DNA sequences at ends of chromoesomes), somatic/finite cells have thortening telomeres w/ telmerase rarely activated, immortal cells like stem cells have telmoerase get activated every time cells divide to make cell survive longer</li>
                    </ol>
                    <div>
                        <div>
                            <p><strong>Leading Strand</strong></p>
                            <p>Gets constructed from origin of repication towards replication fork in continuous fashion</p>
                        </div>
                        <div>
                            <p><strong>Lagging Strand</strong></p>
                            <p>Gets constructed away from origin of replication in series of OKAZAKI FRAGMENTS</p>
                            <p>The one closest to origin gets constructed first, but in the direction of the origin (if that makes sense??)</p>
                            <p>Fragments made b/c replication bubble only opens a little at a time</p>
                            <p>All the RNA primers in the fragments get removed / replaced w DNA nucleotides</p>
                            <p>Ligase enzyme: glues lagging DNA Okazaki fragments together</p>
                        </div>
                    </div>

                    <h3>RNA (Ribonucleic Acid)</h3>
                    <p>5 carbon ribose sugar (one extra O), adenine uracil guanine cytosine bases, usually single stranded, sequences/structure determines function</p>
                    <p><strong>Messenger RNA (mRNA)</strong>: carries message from DNA in nucleus to ribosomes in cytoplasm
                        <ul>
                            <li>mRNA CODON CHART: genetic code consisting of 3 base long triplet codons, chart shows all unique combinations of bases coding for certain amino acids, written in 5'->3' direction<li>
                            <li>Universal genetic code making gene trasnfer easy suggesting common ancester</li>
                            <li>Wobble - amino acids often encoded by two or more codons protecting against some mutations</li>
                            <li>Each codon only codes for one amino acid</li>
                            <li>1 start and 3 stop codons indicating where ribosome starts reading mRNA sequence and where it should stop</li>
                        </ul>
                    </p>
                    <p><strong>Transfer RNA (tRNA)</strong>: transfers appropriate amino acid to ribosome for protein synthesis</p>
                    <p><strong>Ribosomal RNA (rRNA)</strong>: makes up ribosome along w other proteins and helps build polypeptides</p>
                    
                    <h3>Central Dogma of Molecular Biology</h3>
                    <p>Genetic info flows from DNA nucleotide base sequence -> mRNA nucleotide base sequence -> amino acid sequence in a protein -> amino acid bonding/interactions determine shape/type of protein made -> proteins made/function result in diff observed traits</p>
                    <p><strong>TRANSCRIPTION</strong>DNA -> RNA (of all types) in the nucleus</p>
                    <p><strong>RNA PROCESSING</strong>pre-mRNA (energy-transcript RNA) -> mature mRNA in nucleus of eukaryotes only</p>
                    <p><strong>TRANSLATION</strong>mRNA -> amino acid sequence in a polypeptide/protein in ribosomes/cytoplasm/roughER, occurs at the same time as transcription in prokaryotes but not in eukaryotes since processing needed</p>

                    <h3>Transcription</h3>
                    <ul>
                        <li>Process where DNA strand getting is template to produce RNA molecule</li>
                        <li>DNA strand getting transcribed called the minus, antisense, noncoding, template stand <em>MAN gets Transcribed</em>. Strand not getting transcribed called plus,sense, coding, nontemplate.</li>
                        <li>DNA molecule is unwinded at region gene needs to be transcribed, then elementary base pairing ANTIPARALLEL to create new RNA strand but adenine on DNA correponds to uracil on RNA</li>
                        <li>NOT the same thing as DNA replication!!!</li>
                        <ol>
                            <li>INITIATION: RNA polymerase binds to a promoter (called TATA box in eukaryotes since less H-bonds) w/ the assistance of transcription factors and transcription is initiated/begins at the start site.</li> 
                            <li>ELONGATION: After bound, RNA polymerase unwinds DNA in the region transcription initated and adds free RNA nucleotides complementary to template strand, elongating the new RNA strand (RNA polymerase also builds 5' to 3' antiparallel so it reads the DNA 3' to 5', but no leading/lagging strand since not all DNA gets transcribed at once)</li>
                            <li>TERMINATION: elongation continues 5' to 3' until a stop sequence / terminator region on DNA is reached causing RNA polymerase to stop transcribing and release the newly formed RNA transcript</li>
                            
                        </ol>
                        <li>Many RNA polymerases can work on same DNA molecule simulatenously to produce proteins faster</li>
                        <li><strong>REVERSE TRANSCRIPTION</strong>: in retroviruses genetric info flows from RNA->DNA so retroviruses use RNA as genetic material and the reverse transcriptase enzyme copies viral RNA genome into DNA which is integrated into host genome and transcribed/translated for viral protein assembly (HIV is ex of retrovirus)</li>
                    </ul>

                    <h3>RNA Processing</h3>
                    <p>Further modify mRNA transcripts (pre-mRNA) before leaving nucleus to be translated into a protein by ribosomes b/c of compartmentalization</p>
                    <ol>
                        <li><strong>Addition of a 5' GTP (guanine) cap</strong>: to protect mRNA from degrading too quickly, assisting w translation initation</li>
                        <li><strong>Addition of a 3' poly-adenine (poly-A) tail</strong>: to protect mRNA from degrading too quickly, easing transition of mRNA through nonpolar nuclear membrane</li>
                        <li><strong>Intron excision (removal) and exon retention/splicing</strong>: Introns/non-protein-coding regions of mRNA are removed/stay in nucleus and exons/protein-coding regions are spliced/joined back together to make up mature mRNA assisted by spliceosome enzymes (made of snRNA) which plays catalytic/enzymatic role and is called a ribozyme since its made of RNA not proteins. In simpler eukaryotes self-splicing occurs w/o spliceosomes.</li>
                        <li>Alternative mRNA splicing - allows more than one diff mature mRNA / protein so several diff proteins can be made from a single gene and intrones are likely not junk and form sRNA's (small DNA molecules) which have roles in regulating gene expression</li>
                    </ol>

                    <h3>Translation</h3>
                    <p>mRNA translated to amino acid sequence in polypeptide/protein in the ribosome, requires ATP energy</p>
                    <p><strong>RIBOSOME</strong></p>
                    <ul>
                        <li>Large & small subunit made of rRNA (produced from DNA template in nucelolus) & other proteins which come together in cytoplasm to read mRNA and form a polypeptide
                        <li>Ribosome either remains in cytoplasm if protein is for in the cell, or goes to rough Er if the protein is for membrane/outside cell.</li>
                        <li>Ribiosome has one biding site for mRNA on small subunit and 3 for tRNA on large subunit (E (exit) site, P (peptide &RNA binding) site, A (amino acid&RNA binding) site)</li>
                    </ul>
                    <p><strong>tRNA (transfer RNA)</strong>: RNA nucleotides in a clover shape with 3' end accepting amino acids</p>
                    <ul>
                        <li>Transfers amino acid to ribosome for polypeptide/protein synthesis</li>
                        <li>Enzymes ensure appropriate amino acids get added to each tRNA molecule based on anticodon found opposite amino acid</li>
                        <li>ANTICODON: sequence of 3 bases on tRNA that are complementary/antiparallel to specific mRNA codon based on the anticodon</li>
                        <li>Genetic code chart specified for mRNA so amino acid is based on mRNA codon bc most likely we dont have an anticodon chart</li>
                    </ul>
                    <ol>
                        <li>INITIATION: translation begins when rRNA in ribosome interacts w mRNA at start codon, mRNA attaches to ribosomal subunit and methitionine is brought to start codon by tRNA initaitior. The start coodn is in the p-site (AUG in mRNA, UAC in tRNA)</li>
                        <li>ELONGATION: polypeptide chain increases in length one amino acid at a time, since each subsequent tRNA arrives at A site and verifying tRNA anticodons matches mRNA codons, then gets polypeptiide chain getstransferred to pamino acid on the tRNA at the A-site, the ribozymes i ribosome use energy to create peptide bonds between polypetide cahin and amino acid, and ribosome translocates alonfgmRNA so that empty tRNA exits from E site and chain is back at P site</li>
                        <li>TERMINATIONL: when a stop codon on mRNA is reached, the codons code for signal proteins called release factors which cut polyppetide from last tRNA and then it begins/continoues to fold into 3d shape w help of chaperron proteins whileas ribosome dissociates</li>
                    </ol>

                    <h3>Gene Expression</h3>
                    <p>Gene is expressed when protein it makes is fully operational</p>
                    <p><strong>Eukaryotic Chromosomes</strong></p>
                    <p>Chromsomes is DNA and proteins, and the proteins function is to package DNA into more condensed form to fit in nucleus (ex: histone proteins) or facilitate DNA/RNA synthesis(ex: RNA/RNA polymerase)</p>
                    <p>EUchromatin is loose and active and Easily accessible (can get transcribed), but HEterochromatin is coiled and inactive and Hard to access (cannot get transcribed)</p>
                    <p>Regulating DNA compaction can control gene expression</p>

                    <h2>Chapter 13A: Regulation of Gene Expression in Prokaryotes</h2>
                    <p>Gene expression makes diff proteins for same gene and diff types of specialized cells, affected by the environment and not all genes are expressed since this wastes energy</p>

                    <h3>Prokaryotic Gene Regulation: The Operon</h3>
                    <p>Gene regulation happens only at transcriptional level through the operon model</p>
                    <p><strong>OPERON:</strong> cluster of structural genes coding for specific proteins on DNA plus the switches/regulator genes that turn structural genes on or off</p>
                    <ul>
                        <li>REGULATOR GENE - codes for a repressor which control whether operon is acrtive or not (active repressor = inactive operon = operon structural genes not transcribed and vice versa)</li>
                        <li>PROMOTER - short DNA sequence which's initial binding site for RNA polymerase to begin transcription, like on switch representing location transcription will begin</li>
                        <li>OPERATOR - short sequence of DNA as binding site for active repressor protein which if bound would not allow structural genes to get transcribed/expressed since repressor prevents RNA polymerase from binding to promoter preventing transcription</li>
                        <li>STRUCTURAL GENES - longer DNA sequences coding for enzymes/other proteins involved in metabolic pathways. All gets transcribed as a unit if no repressor present</li>
                        <li>in a diagram, upstream-->downstream, the regulator gene codes for repressor protein, next to it extra DNA, next to it promoter, next to it operator, next to it structural genes continuing to downstream</li>
                    </ul>
                    <div>
                        <div>
                            <p><strong>Repressible Operon</strong></p>
                            <p>Operon capable of being repressed/turned off which has a regulator gene that codes for an inactive repressor and structural genes that usually code for proteins/enzymes involved in anaboliic pathways helping synthesize/make a certain substance needed by the cell</p>
                            <p>Ex: Trp operon is repressible since its structural genes codes for enzymes making tryptophan amino acid</p>    
                        </div>
                        <div>   
                            <p><strong>Inducible Operon</strong></p>
                            <p>Operon capable of being induced/turned on which has regulator that codes for active repressor and structural genes that code for proteins/enzy,es involved in catabolic pathways breaking down a substance present in cell</p>
                            <p>Ex: Lac operon is inducible, since its structural genes codes for enzymes breaking down lactose</p>
                        </div>
                    </div>
                    <p>Environemnt/cell conditions or needs determine whether structursal genes will get expressed or not for the above operons</p>

                    <h3>Trp Operon</h3>
                    <p>Tryptophan presence/absense influences repressor activity since its a COREPRESSOR causing repressor to become active/bind to operator</p>
                    <ul>
                        <li>Repressible operon involved in anabolic pathways with structural genes encoding enzymes making tryptophan</li>
                        <li>If tryptophan is absent, cell would need operon to be on/active since enzymes making tryp are needed.</li>
                        <ul>
                            <li>Regulator codes for inactive repressor which doesn't bind to operator so structural genes are transcribed</li>
                        </ul>
                        <li>If enough tryptophan is prevent, operon would be off/inactive since enzymes making tryp are not needed</li>
                        <ul>
                            <li>Regulator codes for inactive repressor which binds to tryptophan which changes shape making it an active repressor, binds to operator so transcription does not begin since RNA polymerase can't bind to promoter</li>
                        </ul>
                        
                    </ul>
                    
                    <h3>Lac Operon</h3>
                    <p>Lactose presence/absence influences repressor activity since its an INDUCER causing repressor to dissociate from operator so operon activity can be induced (if lactose absent, active repressor binds to operator preventing transcription, but if lactose prevent, active rrepressor binds to lactose making it an inactive repressor which can't bind to operator so transcription happens</p>
                    <p>Glucose presence/absence influences cyclic AMP levels/activation since if glucose absent, cAMP is made binding to CAP to make it active and helping RNA polymerase bind fully to promoter w high active levels and transcription, and if glucose is present cAMP is not made w low/inactive levels so CAP can't bind to DNA w/o CAMP and RNA polymerase donesn't fully bind w promoter so low transcription levels</p>
                    <p>High glucose = low cAMP</p>
                    <ul>
                        <li>Inducible operon involved in catabolic pathways w structural genes encoding ezymes breaking down lactose</li>
                        <li>If glucose is present but lactose is absent, operon would be off/inactive since enzymes breaking down lac aren't needed since lactose is absent so transcription not necessary</li>
                        <li>If glucose&lactose present, operon would be partially on/active since some lactose available to break down, but cell prefers to break down glucose for energy first so only low transcription of lac operon genes needed</li>
                        <li>If glucose absemt lactose present, operon is fully on/active since lactose needs to be broken down and theres no glucose available for energy so high transcription of lac operon genes needed</li>
                    </ul>
                    <p>Transcriptional operon regulation is beneficial for bacteria since its more energetically favorable</p>

                    <h2>CHapter 13B: Regulation of Gene Expression in Eukaryotes</h2>
                    <p>Eukaryotic gene regulation more complex bc diff genes activated to produce diff proteins in diff cells based on environment<p>
                    <p>Eukaryotic gene regulation/control possible at 5 nuclear & cytoplasmic levels of control:</p>
                    <ol>
                        <li>Modification of Chromatin Structure (nuclear) </li>
                        <ul>
                            <li>Regulating DNA/chromatin compaction is one way of regulating gene expression</li>
                            <li>Euchromatin/active chromatin that is loosely coiled and accesible to be transcribed</li>
                            <li>Heterochromatin/inactive chromatin that is tightly coiled and inacciesble, cannot be transcribed</li>
                            <li>Chemical Tag Modification regulates whether its eu or heterochromatin: histone acetylation is when acetyl groups get added to histone tails making chromatin looser, dna methylation is when methyl groups get added to DNA making chromatin tighter</li>
                        </ul>

                        <li>Transcriptional Control (nuclear, most important)</li>
                        <ul>
                            <li>RNA polymerase binding at promoter region upstream to gene of interest</li>
                            <li>Transcription factors activation/deactivation: general factors required for RNA polymerase to bind but this alone is low transcription, so specific activators (positive contorl mechanisms) r regulatory molecules further promoting transcription, while repressors (negative control mecahnisms) r regulatory molecules preventing transcription</li>
                            <li>DNA control elements: regulatory DNA sequences far upstream from promoter/gene serving as binding sites for transcription factors like enhancers which are binding sites for activators<li>
                            <li>Mediator Proteins: bridge activators to general transcription factora if high transcription rates for a certain gene are needed</li>
                            <li>DNA bending proteins: loop/bend DNA bringing bound activator in contact w mediator proteins</li>
                            <li>repressors bind to enhancers to block activator binding  or interfere w activators themselves or recruiting proteins removing actelyl groups from histones/silencing</li>
                            <li>Transcription factor activation/deactivation caused by signal transduction and protein kinases phosphorylating secondary mesengers to activate or deactivate appropriate factors</li>
                        </ul>
                        <li>Post-transcriptional Control (nuclear)</li>
                        <ul>
                            <li>Alternative mRNA spliciing and controls how fast mRNA leaves nucleus</li>
                            <li>Depending on need/type of cell mRNA can be processed differently and diff intrones can be rmeoved, resulting in diff proteins being made</li>
                            <li>Allows for diff recombinations of genes creating more protein options than genes</li>
                            <li>Also modifies speed at which mRNA leaves nucleus</li>
                            <li>sRNA (small RNA) molecules regulate gene expression since RNA not translarted is used to form sRNA from the introns removed which form doublestranded RNA (dsRNA) which is cleaved to form sRNA</li>
                            <li>sRNA regulates gene expression by altering DNA compaction making some genes inaccessible, by serving as a precursor to microRNA (miRNA) which binds complementary mRNA strands inhibiting translation or by servivng as a percursor to small interfering RNA (siRNA) binding tto enzyme forming RISC which activated complex targets/bonds to specifc mRNAs causing tthme to degrade and not be expressed through RNA interfernece</li>
                            <li>in future sRNA can be used a therapeutic agents potentially suppressing expression of disease causing genes</li>
                        </ul>
                        <li>Translation control (cytoplasmic)</li>
                        <ul>
                            <li>Occurs in cytoplasm affecting when translation begins and how long it continues</li>
                            <li>Presence of 5' GTP cap on mature mRNA allows translation to begin, longer polyA tails on 3' end corresponds to longer translation</li>
                            <li>Life of mRNA critical in gene regulation since it controls levels/functions of many regulatory and chaperone proteins so condition affecting tail/cap can trigger mRNA destrictuion</li>
                        </ul>
                        <li>Post-translational control (cytoplasmic)</li>
                        <ul>
                            <li>Takes place in cytoplasm after protein synthesis as last chance influencing gene expression affecting whether protein is functional/active or not</li>
                            <li>Proteases are digestive enzymes breaking down proteins determining length of time protein is active, and protrases are confined to lysosomses/proteasomes to protecft cell from unw2anted breakdown</li>
                            <li>Protein gets tagged w signalling portein so it can enter lysosome/proteasome and be digested into peptide fragments if needs to be broken down</li>
                            <li>Proteases/proteasomes regulate gene expression by controlling amt of protein product  / time it emains functioning</li>
                        </ul>
                    </ol>

                    <h3>Epigenetics</h3>
                    <p>Changes in gene expression due to chemical tag modification as a result t exposure to enviuronmental factors</p>
                    <p>Ex: female X chromossome can be inactive barr body if tigthyl packed</p>
                    <p>Epigenetic inheritance: transmission of tags to offspring since these environemtnal influences can be passed down</p>

                    <h3>Types of RNA</h3>
                    <p>mRNA (messenger RNA) - brings message encoded by DNA in nucleus to ribioosomes to make polypeptides/proteins</p>
                    <p>tRNA (transfer RNA) - transfers appropriate amino acid to ribosome for protein synthesis</p>
                    <p>rRNA (ribosomal RNA) - component of ribosome that helps it read the mRNA to form/build polypeptides</p>
                    <p>snRNA (small nuclear RNA) - makes up spliceosome and helps it remove introns/splice together exons to form mature mRNA</p>
                    <p>dsRNA (double stranded RNA) - precursor to sRNA's</p>
                    <p>sRNA (small RNA) - can alter DNA compaction in the nucleus, a precursor to miRNA and siRNA</p>
                    <p>miRNA (microRNA) - binds to complemetary mRNA, blocking the sequence preventing translation</p>
                    <p>siRNA - binds w enzym,e to form RISC which cuts up mRNA prventing translation</p>

                    <h2>Chapter 13C: Gene Mutations</h2>
                    <p>Mutation: permanent change to DNA based sequece, can range to good/bad, no effect to complete protein inactivity, mostly occur in somatic/body cells and don't get passed to offspring but can lead to cancer or other diseases. If they're in gametes/germ-line cells they can get passed to offspring/evolution</p>
                    <p>Can have a lot of impacts bc protein enzymes r part of metabolic pathways so a mutation in one enzyme can affect the whole pathway</p>
                    <ul>
                        <p><strong>POINT MUTATION</strong>: substitution in a single DNA nucleotide, may or may not cause amino acid change but usually just one unless it codes for a stop too early (ex; sickle cell anemia point mutation codes for valine instead of glutamic acid)</p>
                        <p><strong>FRAMESHIFT MUTATION</strong>: one or more nucleotides get inserted/deleted from DNA shifting the entire reading frame making it unreadable (insertions or deletons), (ex: cystic fibrosis dleting of 3 bases)</p>
                    </ul>
                    <p>Spontaneous mutations occur for no reason other than abnormalities (ex: change due to transposons or error in DNA replication), induced mutations ae caused by mutagens/caricnogens in the anvironment like DNA base changes. Ames test tests if chemical is carcinogenic. Can also be caused by DNA base changes due to radiation</p>
                    <p>Accumulating mutations can cause cancer like proto-oncogenes mutating to become oncogenes or tumor-suppressor genes mutating to become inactive which both causes unctronlled cell division/cell regulation</p>

                    <h2>Chapter 14: Biotechnology</h2>
                    <p>Combines stuydy/application of living organisms to practical constructive purposes</p>
                    <h3>Reconcombinat DNA Technology</h3>
                    <p>rDNA contains DNA from two or more diff sources, steps include extreacting DNA from donor, vector like plasmids carries from donor to host, enzymes like restirciton enzymes&ligase used to cut gene out of donor into vector, trrewated cells of host organisms to close DNAQ and achieve desire dgene products qucikly, usually bacteria since they replciate quick</p>
                    <p>Resitriction Enzymes: nature's scissors that cut/cleave/recognize specific base seuqences on DNA, occur naturually in bacteria to defend against infection by bacteriphages and used in DNA repair, use to manipulate DNA to create rDNA to help create GMOs and used in gel electrophoresis, 200+ but commonly used are EcoRI and HindIII, they work by recognizing base sequences and cut at specific resitriction sites, and oporutrruding ends have complimentrary base sequences</p>
                    <p>DNA Ligase: natures's glue basting togehter DNA from 2 diff organisms by resestablisihing phosphopdiester bonds between sugars and phosphates of the backbone, also invovled in DNA replciation</p>
                    <p>GMOs - orgs containing recomibuinat DNA (genetically modified bacitera can produce desired protien products, p[romote health in plants, aid w environemtnal concerns, or produce certain organsic chemicals. genetical modified plants can make plants resistant or producew certain huma proteins, genetical modifiy animals can code for growth horomses, gene phraming, or study human gene expression/diseases often using mice)</p>
                    <p>Concerns: unexpected allergenes, mutations, dispruption, consu,ption?</p>
                    <
                    <h3>DNA ANalyisis</h3>
                    <p>Detect presence of viruses in cells, sequence genome, amplify trace amts of DNA at crime scenes, identify victims, paternity tests, used for evolutoonary studies</p>
                    <p>Restriction Mapping (Restriction Enzymes & Gel Electrophoresis): cutting DNA at specific sequences w resitrction enzymes, separating fragments from each other by gel electrophoersis, comparing banding patterns/estimating size since each orgasnism has unique DNA fingerprnt (RFLPs r unieque framgents resulting fro restriction enzyme cutting)</p>
                    <p>STRs (Short Tandem Repeats) - fragments that r more variable region of indivudals's DNA for more distinghuishable results, short recorcurring DNA base sequences</p>
                    <p>DNA ges extracted/treated w restirction enzymes, producing uniqeu collection of diff gramgents, amplified through PCR, run through gel electrophoresis sepetating fragments based on size where - DNA moves towards + electrode and short moves fastest</p>
                    <p>PCR (poluymerase chain reaction) - produce large qunatities of single DNA framgnet in short amt of time, mimics DNA rpelication in a cell, chain reaction, useful for analysis and fouble DNA w each cylce. Requires thermocylcer w low/high temps to break H bonds and then attach primers, heat stable DNA polymerase, primers, free nucleotides</p>
                    <h3>Sanger Method of DNA sequencing</h3>
                    <p>DNA sequencing - determining extra nucleoitde, in Sanger sequencing target DNA gets copied many times making diff length DNA fragments accomplished due to fluorescent chain terminator nucleotides called ddNTPs marking ends of fragments</p>

                    <h3>DNA Microarrays / DNA chips</h3>
                    <p>Allow scientists to measure gene expression and determine whether on/off, can help identify mutations in genome and create an individuals genetic pofile or predict illness/medication response</p>
                    <p>Ex: siamese cats have diff fur colors and diff genes expressed at diff temps</p>

                    <h3>Gene Therapy</h3>
                    <p>Manipulating human genes to treat various disorders, introducing genes using viruses and nonpolar liposomes</p>
                    <p><strong>Ex Vivo Gene Therapy</strong>: cells get removed from body, inserted into cells, then returned back into body (ex: treat SCID, hypercholesterolemia)</p>
                    <p><strong>In Vivo Gene Therapy</strong>: gene gets delivered directly to cells insid body (ex: treat cystic fibrosis, cancer therapy)</p>

                    <h3>CRISPR/CAS9 GENE EDITING TOOL</h3>
                    <p>Gene editing originating from bacteria's defense mechanisms against virusesm stands for clustered regularly interspaced short palindromic repeats</p>

                    <h3>Genomics</h3>
                    <p>Study of genomes/complete genetic makeup (human genome project took 13 yrs making DNA analysis easier, discovering 6mil+ base pairs)</p>
                    <p>Structural genomics - knowing exact base sequenece and num genes in an organism</p>
                    <p>Functional genomics - understanding exact role of genome (both coding & noncoding regions) in cells/organisms</p>
                    <p>Comparative genomics - seeks to compare the human genome w genomes of other organism (not much diff between our seq and other orgs)</p>
                    <p>Human genome 2% is coding DNA, 98% is noncoding but this still plays a role (ex: repettitgivbe DNA elements lijke STRs (short tandem repeats), transposons/jumpinh gernes that move within/between chroomomsomes causing evolution, and iunique noncoding DNA regulatory role)!!</p>
                    <p>Gene: units of heredit that correspond to locus on a chromoeoemcomse, DNA/RNA seq directly encoding functional products like RNA or protein</p>
                    
                    <h3>Proteomics</h3>
                    <p>Study of proteomes/protein makeup of organism which is complex since more protein products, essential to discovery of new/better drugs</p>

                    <h3>Bioinformatics</h3>
                    <p>Use of commputer tech like databases to speed up & develop fields like proteomics and functional/comparative genomics</p>
                    <p>BLAST - computer database used to help study evolutioonarey relaitosnhips between orgs</p>
                    <p>Computer analysis - can help scinetists make sense of the raw data by detecting patterns, etc</p>
                    `
            },

        }
    },
    "AP United States History": {
        units: {
            "Unit 1: 1491-1607": {
                tags: ["Native Americans", "European Exploration", "New World", "Columbin Exchange", "Spanish Exploration/Colonial System"],
                content: `
                    <h2 id="h-apush-u1-11">1.1: Contextualizing Period 1</h2>
                    <div class="note-card-muted" style="margin-bottom:12px;">
                        <ul style="margin:0;padding-left:18px;">
                            <li>Intersection of various indigenous populations in Americas</li>
                            <li>Contact w Euorpeans, enslaved Africans forced to New World brought to Americas</li>
                        </ul>
                    </div>
                    <h3>Contextualization</h3>
                    <div class="note-card">
                        <p style="margin:0 0 8px;font-size:12.5px;">Intersectionality of themes in history, identify/describe broader historical context situated for specific historical development/process</p>
                        <p style="margin:0 0 8px;font-size:12.5px;">DBQs, LEQs, sometimes SAQs through 2-3 sentences abt diff event</p>
                        <p style="margin:0 0 8px;font-size:12.5px;">Historical events understood in short and longterm context of similar events (historical circumstances of event)</p>
                        <p style="margin:0;font-size:12.5px;">Link argument to broader events/processes</p>
                    </div>

                    <h2 id="h-apush-u1-12">1.2: Native American Societies Before European Contact</h2>
                    <div class="note-card-muted" style="margin-bottom:12px;">
                        <ul style="margin:0;padding-left:18px;">
                            <li>Geographic/environmental factors like competition /debates about natural resources fostering America development and regional diversity</li>
                            <li>Diverse complex Indian societies in Americas w/ social structure (some even w ladies in charge) and agricultural innovation (1491-1607)</li>
                            <li>Collisions of cultures between North, South, West, and Plains regions in US/Mexico (ex: Great Basin, Northeast, etc)</li>
                            <li>First migrations into America across Bering Strait in Alaska around 11k years ago, Asian land based migrants from near Siberia (fom Asia to around Chile and Peru)</li>
                            <li>American Indian culture strongly influenced by corn cultivation before 1492 spreading from Mexico to America supporting settlement, developing complex irrigation systems, social diversification, economic development molding Pueblo culture</li>
                        </ul>
                    </div>
                    <h3>Archaic Period</h3>
                    <div class="note-card-muted" style="margin-bottom:12px;">
                        <ul style="margin:0;padding-left:18px;">
                            <li>Period 5000BCE beginning in 8000BCE, hunting/gathering in this region of Great Plains</li>
                            <li>Agriculture based on corn/maize in Americas, squash&beans also importnatn</li>
                        </ul>
                    </div>
                    <h3>Archaic Period: Civilization in South (South/Central Amercica & Mexico)</h3>
                    <div class="note-card" style="margin-bottom:12px;">
                        <ul style="margin:0;padding-left:18px;">
                            <li>Most elaborate early civilizations were here</li>
                            <li><strong>Incas:</strong> largest empire in Americas in Peru</li>
                            <li><strong>Meso-Americans:</strong> people in today's Mexico/Central America</li>
                            <li><strong>Mayans:</strong> strong South Mexico civilization, created a written language, numerical system compared to Arabic numerals, accurate calendar, important trade routes, advanced agriculture</li>
                        </ul>
                    </div>
                    <h3>Archaic Period: Civilization in North America (United States)</h3>
                    <div class="note-card-muted">
                        <ul style="margin:0;padding-left:18px;">
                            <li>Complex civilizations in North had hunting, gathering, fishing</li>
                            <li><strong>Southwest: </strong>complex irrigation systems for farming on dry land, corn cultivation spread to America from Mexico transforming nomads to settled agricultural villages</li>
                            <li>Civilizations/towns had centers of trade, crafts, religious, civic rituals</li>
                            <li><strong>Great Plains</strong>: sedentary farming for corn/maize and other grains</li>
                            <li>Small nomadic tribes still had buffalo hunting</li>
                            <li><strong>Woodland Indians</strong>: tribes from Eastern US with good farming, hunting, gathering, fishing, large corn/grain-based trading networks in Mississippi River Valley. Illinois peak in 1200AD w/ population of 10k and complex of large earthen mounds</li>
                            <li><strong>East of Mississippi</strong>: common linguistic roots (largest language group was Algonquian),  dominated Canada to Virginia</li>
                            <li><strong>Iroquois</strong>: upstate NY tribe w 5 distinct northern "nations": Seneca, Cayuga, Onondage, Oneida, Mohawk (links to Cherokees).</li>
                            <li><strong>Tuscaroras:</strong> further south in Carolinas and Georgia</li>
                            <li><strong>Muskogean</strong>: southernmost east US tribes like Chickasaws, Choctaws, Creeks, Seminoles (matrilineal society escaped from Creeks to avoid native movement to Oklahmoma). Rarely united in opposition to European invaders.</li>
                            <li><strong>Pueblo people</strong>: people in Rio Grande valley in Texas building complex irrigation systems to water cornfield, civilization/culture shaped by corn cultivation spread</li>
                        </ul>
                    </div>

                    <h2 id="h-apush-u1-13">1.3: European Exploration in the Americas</h2>
                    <h3>European Exploration Context</h3>
                    <div class="note-card-muted" style="margin-bottom:12px;">
                        <ul style="margin:0;padding-left:18px;">
                            <li>Europeans unaware of Americas existence before 15th century, but conditions in Europe changed in and interest in oversease exploration</li>
                            <li><strong>Changing Conditions / Reawakening of Commerce</strong>: Bubonic plague decimated/killed Europe, navigation advancements, shipbuilding making long distance travel more feasible, explorers looking for new markets, new trade routes increased w new tech increasing European efforts to explore/conquer New World</li>
                            <li><strong>New Technology Advances</strong>: sextant navigation latitude/longitude instrument helping explorers w sea travel, caravels sail w wind across Atlantic from Europe to Americas by 1450</li>
                            <li><strong>Historical developments</strong>: Europeans were looking for wealth, economic & military competition, desire to spread Christianity</li>
                        </ul>
                    </div>

                    <h3>Exploration/Conquest</h3>
                    <div class="note-card" style="margin-bottom:12px;">
                        <ul style="margin:0;padding-left:18px;">
                            <li>Portuguese expanded overseas starting ~1400 and took leading role in African slave trade</li>
                            <li>Spain undertook Europe's first conquests in Americas</li>
                            <li>Portuguese traders traveled S and E</li>
                            <li>Spain replaced Portugal as leading seafaring nation since they devoted more resources to maritime exploration</li>
                        </ul>
                    </div>

                    <h3>Christopher Columbus</h3>
                    <div class="note-card-muted">
                        <ul style="margin:0;padding-left:18px;">
                            <li>Spanish monarchs Ferdinand II and Isabella I finance Christopher Columbus & built their empire/trade by subsidizing his voyages</li>
                            <li>Explorer from Italy who set sail in August 1492 and reached Bahamas on Nina, Pinta, and Santa Maria after 6 weeks but thought he reached new route to Asia/The Indies and claimed/explored the islands for Spain & called natives Indians/West Indies</li>
                            <li>Demanded tribute from local Taino, Arawak, and Carib people, left 40 men on Hispaniola island (now DR/Haiti) and returned to Spain</li>
                            <li>Life ended in obscurity but his accomplishments made him a hero</li>
                            <li>Name for America came from <strong>Amerigo Vespucci</strong> who was explorer in a later Portuguese expedition to the New World</li>
                            <li><strong>Columbus Day</strong> federal holiday declared in 1934</li>
                            <li>Columbus described Natives as unarmed, timid, and full of terror but still physically capable and have lots of culture in his letter, saying they could be conquered and converted easily</li>
                            <li>Columbus describes island as fertile and beautiful</li>
                            <li>Divine religious mission, also interested in geography and trade as he explored the New World</li>
                        </ul>
                    </div>

                    <h3>More Explorers</h3>
                    <div>
                        <div>
                            <p><strong>Vasco de Balboa</strong></p>
                            <p>Spanish explorer crossed Panama isthmus in 1513, First European to see ocean seperating America from China/Indies</p>
                        </div>
                        <div>
                            <p><strong>Prince Henry the Navigationr</strong></p>
                            <p>Wanted to explore Western coast of Africa (not interested in finding sea route to Asia), wanted to establish Christian empire in Africa and aid wars against the Moors of Northern Africa. THis empire/dream was not achieved but some of his mariners went as far south as Cape Verde on Africa's west coast</p>
                            <p>Portugal's "Heathen lands" of the New World was divided w Spain after Prince Henry's death, with most of New World going to Spain, and Africa/Asia/South American lands going to Portgual</p>    
                        </div>
                        <div>
                            <p><strong>Ferdiand Magellan</strong></p>
                            <p>Employed by Spanish, found the Strait of Magellan at the southern end of South America</p>
                        </div>
                        <div>
                            <p><strong>Bartholomeu Dias</strong></p>
                            <p>Rounded Southern tip of Africa in the Cape of Good Hope</p>
                        </div>
                        <div>
                            <p><strong>Vasco de Gama</strong></p>
                            <p>Proceeded all the way around the Cape of Good Hope to India</p>
                        </div>
                        <div>
                            <p><strong>Pedro Cabral</strong></p>
                            <p>1500 fleet of explorers bound for India but blown off coast westward and ended up on Brazilian coast</p>
                        </div>
                    </div>

                    <p>AFTERMATH: New World considered a source of wealth, Spanish claimed most of New World except Brazil bc of Columbus, Spain established substantial American empire by mid-sixteenth centru</li>

                    <h2>1.4: Columbian Exchange, Spanish Exploration, and Conquest</h2>
                    <h3>Columbian Exchange</h3>
                    <p>Exchange of People, lIvestock, food, diseases</p>
                    <p>EFFECTS:</p>
                    <ul>
                        <ul>Diseases to new world like influenza, measles, chickenpox, smallpox, typhus, mumps whicjh killed 90% of nativees</ul>
                        <ul>New food crops and domestic livestock introduced to new world like sugar, bananas, cattle, sheep, pigs, horses</ul>
                        <ul>Corn/maize brought to Europe and later squash, pumpkins, beans, potatoes, tomatoes, peppers</ul>
                    </ul>

                    <h3>Spanish Conquistadors (GOD, GOLD, GLORY)</h3>
                    <p>Values/motivations of Spanish conquistadors/conquers spread across New World except Brazil, tried to enslave Indians and find gold in New World</p>
                    <p>Known for military brutalitty, achievement, and greed which was repeated throughout history, killing natives through warfare and disease</p>
                    <p><Strong>Ordinances of Discovery</strong>: 1570s laws banning brutal military conquests but continuing colonization of New World</p>
                    <p>Riches from gold/silver in mines making them rich, established elements of European civilization changing landscape/social structure, created profitable agricultural economy</p>
                    <p>Catholic Church: Catholicism was the only relgion allowed in new territories, goal to convert natives w/ priests/friars accompanying colonists after Conquistador era, presidios (military bases) often near missions, spread through South/Central America, Mexico, and South/Southwest US,</p>
                    <p>Spread of language / religion to New World (Catholicism spread by Spanish to New World, Portuguese spread to Brazil, Spanish in Americas</p>
                    <p>Racial hierarchy: Spanish immigrants & natives contact led to intermarriage and mixed race called mestizos</p>
                    <p>Labor System: natives were European labor source, Indians sold into slavery and disease/war also hurt them</p>
                    <p>Lasting effects: Spanish invaders killed/invaded/enslaved/infected natives and forced culture onto them and also intermarried/adopted some of Native culture</p>
                    <p>Some tribes either tried to preverve their traditions or chose to flee instead of accept enslavement, some waged war or responded to European w violence like in the Pueblo Revolt / Pope's Rebellion</p>
                    <div>
                        <div>
                            <p><strong>Hernando Cortes</strong></p>
                            <p>Spanish Cuban gov official w little success, led military expedition into Mexico but met w Aztec strong resistance instead of gold</p>
                        </div>
                        <div>
                            <p><strong>Francisco Pizzaro</strong></p>
                            <p>Conqeurred Peru from 1532-1538 revealing to Europe the wealth of Incas and opening way for advances to South America</p>
                        </div>
                        <div>
                            <p><strong>Hernando de Soto</strong></p>
                            <p>Search for gold, silver, and jewels in New World mostly unsuccessfully, led several expeditions through Florida and was the first man to have crossed Mississippi River (1539-1541)</p>
                        </div>
                        <div>
                            <p><strong>Francisco Coronado</strong></p>
                            <p>Traveled north from Mexico to New Mexico to search for gold/jewels unsuccessfully, opened Southwest US to Spanish settlement</p>
                        </div>
                    </div>
                
                    <h2>1.5: Labor, Slavery, and Caste in the Spanish Colonial System</h2>
                    <p>Inrersection of Indians in Americas, contact w Europeans, and Trans-Atlantic Slave trade bringing Africans to New World/Americas and diff opinions</p>
                    <p>Spanish Empire laid foundation for Trans-Atlantic Slave trade</p>
                    <p>Encomienda System - effects on native populations </p>
                    <p>Caste System: Exploration of Spanish spreading caste system/slavery to Europe,Africans,Natives as a result of Columbian Exchange</p>

                    <h3>Labor&Slavery</h3>
                    <p>Spanish explorers invaded Canary Islands for sugar and enslaved slaves to work on sugar plantations for hard labor/unsafe conditions/grueling heat, sugar used to produce alcoholic beverages/wine for trade, Spanish claimed lands to spread Christianity to natives</p>
                    <p>CANARY ISLANDS: naval base used by Europeans to raid villages and capture Africans for slavery/sugar plantation labor since Portuguese/Spanish settlers found heat/labor excessive, Africans sold warring group members to Europeans</p>
                    <p>1482 Elmina Castle - Portuguese used enslaved Africans to built, held captured Africans, trade gold for humans</p>
                    <p>Treaty of Tordesillas - divided New World into spheres of influence between Spain and Portgual which affected native ppl/resources badly</p>
                    <p>African slaves used to produce sugar in Cuba & Hispaniola, w first Africans arriving in 1501, many natives dying from disease/warfare from European contact</p>
                    
                    <h3>Caste System</h3>
                    <p>Spanish system w Spanish first (Sango Puro - pureblood Spanish 1st, Criollos - Spanish born in colonies 2nd, Mestizos - mixed/interracial Spanish 3rd)</p>
                    <p>Other Europeans second, Natives third, Africans last</p>
                    <p>Social hierarchy/patriarchy outlining Spanish colonization and family status measured by service to expand Spanish empire</p>
                    <p>Spanish exploration expanded to US and Philipines</p>

                    <h3>Encomienda System</h3>
                    <p>Force Natives to embrace Christianity and serve as unpaid Spanish laborers replaced by a further reaching system</p>
                    <p>REPARTIMIENTO SYSTEM: replaced encomienda system, made Native towns supply free labor pool for Spanish Overlords, law by 1575</p>

                    <h2>1.6: Cultural Interactions Between Europeans, Native Americans, and Africans</h2>
                    <p> Europeans and Natives different views on religion, gender, family, land, power. Europeans believed they were civilized and believed Native Americans/Africans were uncivilized heathens. European ideals of Christianity, monagamy/two parents in a family, patriarchy w women focused on domesticity, and male dominited government<p>
                    <p>Christian/European missionaries imposed views onto others, Natives either forcefully or voluntarily converted and often merged their traditional religion w/ Christianity, Africans did same developing creolized Christianity</p>
                    <p>Creolized Cultures b/c of conflicts/compromise and mutual misunderstandings in interaction</p>
                    <p>Natives wanted to maintain indigenuous practices through treaties / military resistance w settlers</p>
                    <p>Europeans wanted New World/Africa for silver, gold, riches, slaves, Catholic converts, labor pool but Natives/Africans tried to rebel, escape, and resist since they knew the land better</p>
                    <p>MAROON COLONIES / MAROON COMMUNITIES: African communities of former slaves, often joined Native communities like in the Virgia/NC Great Dismal Swamp as a refuge</p>
                    
                    <h3>European Migration, Settlement, Conflict -> COLONIZATION</h3>
                    <p>European groups competed over land, resources, and conquest of natives</p>
                    <p><strong>St. Augustine, Florida</strong>: first permament settlement in North America by SPanish in 1565</p>
                    <p><strong>Jamestown, Virginia</strong>:first British permanent settlement in 1607</p>
                    <p>Colonies development/progress relied on free labor and eventually all British colonies instituted slavery</p>
                    <p>Conflict between Europeans led to Seven Yrs War (aka French and Indian War) in 1756-1763 securing British dominance in New World</p>

                    <h2>1.7: Causation in Period 1</h2>
                    <p>Make hitorically defensible claim and effects of voyages and how they impacted Europeans, American Indians, and Africans</p>
                    <p>CAUSATION: events caused by prior events</p>
                    <p>-Traditional African religions usually polythesitic but merged w Christianity</p>
                    `
            },
            "Unit 2: 1607-1754":{
                tags: ["Colonization", "British colonies", "Transtlantic trade", "slavery", "mercantilism"],
                content: `
                    <h2>2.1: Contextualizing Period 2</h2>
                    <p>Europeans came to New World for land, resources, conquering natives which resulted in difgferences in environment, economics, culture, and demographics</p>
                    <p>Europeans viewed Natives as uncivilized and needed salvation, British were prominant foreign settlers by 17th century imposing their ideass on Natives & control of transatlantic slave trade / enslaved Africans</p>   
                    <p>Indentured servitude and slavery co-existed but became racially different</p>
                    <p>Chesapeake region relied more on slavery (class disparity, cash crops needing labor) than New England religious colonies (mixed economy like fishing, manufacturing lumbering)</p>
                    <p>Virginia Company - profit motive enocuraging immigration</p>
                    <p>Cutlrual differences in landf use between natives and europeans</p>

                    <h2>2.2: European Colonization</h2>
                    <p><strong>Seperatists</strong>: opposed Church of England, some went to Holland but thought morals there were too loose, others came to New World</p>
                    <p><strong>Puritans</strong>: came to New World seeking pure church better than the Church of England, embraced Calvinism not Catholicism</p>
                    <p><strong>Indentured Servants</strong>: Europeans who wroked for people who paid their way to New World, often for 7 yrs before indenture complete recieving land/money for service</p>
                    <p><strong>Enslavement/Enslaved</strong>: Africans brought to New World against their will, purchased in African west coast and sold to europeans, brought to caribbean/Americas and endured life-long bondage through the transatlantic slave trade</p>

                    <h3>Early Settlers / Explorers (in canada, mostly French)</h3>
                    <ul>
                        <li>Jacques Cartier sailed St. Lawrence River in 1530s in Canada</li>
                        <li>Samuel de Champlain established Quebec in 1600s, known as Father of New France which was settled by fur traders, Catholic Missionaries, soldiers of the King</li>
                        <li>Small group of Protestants called Huguenots eventually made their way to Canada</li>
                        <li>Not friendly but better relations w Natives and French and they developer fur trading routes  / intermarriage more than English/Dutch which was an advantage</li>
                    </ul>

                    <h3>Dutch in New World (17th century)</h3>
                    <ul>
                        <li>Henry Hudson explored NYC/Manhattan Island and river named after him</li>
                        <li>Dutch traded for beaver pelts and created settlements in Albany</li>
                        <li>New Amsterdam established in 1625, tense relations w Natives and was overtaken by British in 1664 who renamed in New York</li>
                        <li>Did not venture much past NY so were eventually vovertaken</li>
                    </ul>

                    <h3>British in New World (starting in ~1606 in 17th centruy)</h3>
                    <p>England's population growth caused people to seek new places to live, minorities sought refuge</p>
                    <ul>
                        <li><strong>(1601) The London Company</strong>: joint-stock company that received a charter from King James I to establish colonies in North America</li>
                        <li><strong>(1607) Jamestown</strong>: first permanent British colony led by Captain John Smith but it was unsuccessful, 2/3 of population died from starvation, disease, drought, swamps, difficulty growing crops</li>
                        <li>Strained relationship w natives - they were used as labor for tobacco growing, then indentured servants used instead, the African indentured servants by 1619</li>
                        <li><strong>Pocohontas</strong> - Chief Powhatan native's daugher who saved John Smith from execution supposedly, who later married John Rolfe who sustained colony by harvesting tobacco which was a very lucrative crop leading to need for labor</li>
                        <li>1662 - enslaved Africans did labor on tobacco plantations, law passed in Virginia making children born of a slave mother also slaves regardless of father</li>
                        <li><strong>1619 House of Burgesses</strong>: first legislative body of Virginia Colony</li>
                        <li><strong>(1620) New England coloy</strong>: New England/Massachusetts settlement group led by William Bradford, w/ charter granted by London Company</li>
                        <li>Mayflower landed in Cape Cod/Plymouth Rock, called Pilgrims for their pilgrimage to the new world, signed the Mayflower Compact establishing representative government/social contract (NO WOMEN SIGNED IT), survived starvation and weather with help of Natives (1621 first Thanksgiving, 1691 Plymouth Colony became part of Massachusetts Bay Colony</li>
                        <li>(1629) Massachusetts Bay Colony formed - John Winthrop and other Puritans want to establish colony devoted to Godly principles, calling it city upon a hill w/ thriving towns by 1640 and profitable industries like lumbering, fishing, shipbuilding, etc. Supposed to be place for religious freedom but 2 residents (Roger williams/anne huthinson) banished to rhode island for criticizing religious establishment/authority</li>
                        <li>(1692-1693) Salem Witch Trials - accusations, political instability, religious fervor w/ trials resulting in executions</li>
                        <li><strong>(1632) British Southern Colonies</strong> King Charles I granted Calvert family charter to found colony of Maryland for Catholic sanctuary / religious tolerance</li>
                        <li><strong>1660s</strong>: Carolina became English colony through charter from King Charles II which eventually split between North and South</li>
                        <li>All mid-Atlantic and Southern colonies relied on slave labor to develop economies w/ plantation-based agricultural economy</li>
                        <li>British different from European counterparts bc colonies established their own legislative bodies oftentimes, came for religious freedom, were economicall self-suffiecient esp bc of tobacco</li>
                    </ul>

                    <h2>2.3: The Regions of British Colonies</h2>

                    <h3>New England British Colonies</h3>
                    <p>Natural population increase (not due to migration) by 18th century, mostly occupied by cliquish Puritans, mixed economies w lumbering, fishing, but agriculture not as profitable, etc</p>
                    <p>Profitable reason so most taxed, MERCANTILISM benefited the crown so colonists questioned why they were not represented, women mostly relegated to domestic sphere</p>
                    <p><strong>Mercantilism</strong>: benefit mother country through gold and silver, colonists had to send their profits to England</p>
                    <p>Social classes developed where wealthy owned industries and poor worked for wealthy</p>

                    <h3>Middle British Colonies</h3>
                    <p>Most diverse colonies, Maryland Catholic haven, New York (formerly New Amsterdam) immigrant haven, Philadelphia established by Quaker William Penn who wannted to ally w Natives</p>
                    <p>Demographics: Scots-Irish, Germans, Quakers, etc</p>
                    <p>Great Wagon Road - road transporting ppl, food, supplies, produce, newspapers, etc throughout Middle Colonies as a major part of other road intersections</p>

                    <h3>Southern British Colonies</h3>
                    <p>Relied on intense hot long dreadful conditioned slave labor for profitability, harvest/cultivation of crops like tobacco, rice, and indigo especially in Virginia and also the Carolinas</p>
                    <p>(All British colonies even in other regions relied on slave labor, but southern labor was most intense)</p>

                    <h3>Crown vs Colonists</h3>
                    <p>Colonies were moneymakers for the Crown/British</p>
                    <p>British imposed series of taxes and acts like Navigation Acts promoting only English trade in 1660&1663 and Molasses Act taxing foreign molasses of 1733</p>
                    <p>Colonists involved/fought in wars against French and Spanish like King William's War (1689-1697), Queen Anne's War (1702-1713), and French and Indian War/Seven Yrs War (1756-1763)</p>
                    <p>Colonists protested against this, overthrew Dominion of New England, salutary neglect allowed colonists to be independent and resist British monarchy's control</p>

                    <h2>2.4: Translatlantic Trade</h2>
                    <h3>Slave Trade</h3>
                    <p>16th-19th century singling out primarily West Coast African (first men, then women, and later children) creating an idea of Black inferiority to justify capturing/enslavement</p>
                    <p>Portuguese enslaved African as early as 1481, didn't end until 1869</p>
                    <p>Dutch trading starting 1612 ended 1872</p>
                    <p>British trading started in 1640, coloniies began in 1619</p>
                    <p>Traders would capture young men from warring clans/enslaved from previous wars, a caboceer would keep watch over captives for a fe3w months as they were taken to caves/baracoons where they lived until slave ships set sail for Transatlantic voyage</p>
                    <p>Triangular trade: ships left west europe for Africa w/ goods, traded goods like weapons, gunpowder, textiles, pearls, rum for slaves which could take weeks-months, slaves would make agricultural products like sugar, cotton, coffee, tobacco, rice which was brought back to Europe</p>
                    <P>Slave ships overpacked to make profit bc they knew they could lose up to 50% of them while crossing to America</p>
                    <p><strong>Middle Passage:</strong> most treacherous part of voyage taking about 2 months from Africa->America w 1 in 4 slaves dying</p>
                    <p>20-30 million forcibly sold into slavery, 12 million brought to Americas, 2-3 men for every woman which reduced adult male population, many died in voyage and tried to jump overboard</p>
                    <p>Portuguese, Spanish, Duthc, British, and French all had major trading companies</p>
                    <p>When the new US was formed, Constityution made provisions to continue to engage in slave trade, saying it would continue for 20 yrs, creating Fugitive Slave Law and the 3/5 comproimse to appease the South to count for population</p>
                    <p><strong>Slave Codes / Code Noir</strong>: control slave population by forbidding literacy, legalized marriages, and restricting movement</p>

                    <h3>Slave Resistance / Rebellion</h3>
                    <p>Slave resistance through slowing down work, stealing food, breaking tools, feigning illness, poisoning food  </p>
                    <p>Rebellions scared white ppl leading to laws and punishments passed for ppl who escaped or encouraged rebellion</p>
                    <p><strong>(1739) Stono Rebellion</strong>- led by "Jemmy" an Angolan near Charleston, South Carolina</p>
                    <p><strong>(1800) Gabriel Prosser</strong> Richmond VA rebellion</p>
                    <p><strong>(1822) Denmark Vesey</strong> Charleston, most notorious South Carolina rebellion</p>
                    <p><strong>(1831) Gabriel Prosser</strong> Hampton Roads, VA </p>
                    <p><strong>(1839) Amistad</strong> New Haven, CT w many dying and not able to return to homes</p>

                    <h2>2.5: Interactions Between American Indians & Europeans</h2>
                    <p>Interactions between European rivals and American Indian populations leading to alliances and conflicts over land, resources and political boundaries</p>
                    <p><strong>King Philip's War / Metacom's War</p> British conflict w Indians over land, resources, and boundaries in New England</p>

                    <h3>The Spanish</h3>
                    <p>Imperial Order built on economic exploitation, religious conversion, and social hierarchy including enslavement and intermarriag, called their Western Hemisphere holdings "New Spain" and sought alliances to divide the Natives (NAtives had similar motivsations)</p>
                    <p>Spanish accomodating some aspects of Native culture in Southerwest after ressitance to Spanish colonizng efforts esp after Pubelo Revolt</p>
                    <p><strong>Spanish Southwest</strong>: Spain's North American colonies were largerly defensive buffer against British?French into Central/Sotuh America so they had low colonial populations/military resources in NOrth America</p>
                    <p>Less Spanish colonization in Southwest led to more Native resistance since they were stronger</p>
                    <p><strong>Pueblo Revolt</strong>: Native outbreak resistance stopping Spansih colonization of New Mexico for nearly 20 yrs also leading to interactions between Native groups (trade, access to horses, military)/p>


                    <h3>The French</h3>
                    <p>Prioritized trade esp fur trade over conquest, left a smaller footprint in terms of population/subjugation, Catholic missionaries was a secondary policy, needed native cooperation and limited women led to interracial marrying, collaboration and a more co-equal relationship in diplomayy, social and cultural interaction/diffusion</p>
                    
                    <h3>The Dutch</h3>
                    <p>Dutch colonial holdings even smaller than French exclusivelty driven by commerce, trade relationships w American Indians was a rpirority, almost no effort at religious conversion</p>
                    
                    <h3>The British</h3>
                    <p>Colonial priorities on territorial acquisition, expansion, and redevelopment even in relgious based colonies, conversion of natives was less of a priority since Natives weren't meant to be incorporated into English colonial society, so they wanted to exterminate them from their territory leading to series of wars</p>
                    <p>Campaigns of extermination waged by colonists against entire populations, w disease being distadvantage for Indians, competiton over food and resources, mutual distrust, colonial growth needing more settlment land</p>
                    <p>Ex: Metacom's / King Philip's War</p>
                    <p>Indian alliances only out of convenicce, ex: to ally w one group to neutralize another leading to patterns of relative peace then conflict</p>
                    
                    <h2>2.6: Slavery in the British Colonies</h2>
                    <p>Are childrens slave by birth?</p>
                    
                    <h2>2.7: Colonial Society & Culture</h2>
                    <p>Pluralism / intellectual exchange bc of different European religious and ethnic groups, enhanced by first Great Awakening and European Enlightenment ideas</p>
                    <p.Anglicization experienced by British colonies over time, developing more indpeendent communities based on English models and spread of Protestant evangelocalosm</p>
                    <p><strong>Push-Pull Theory of Immigration</strong>: factors pushing Europeans like overpopulation out of Europe, pulling them into America causing population explosion in 1680-1770 (due to natural increase, new arrivals like Sootch-IRish/German/English, and longer lifespans)</p>
                    <p>Mostly Anglo-Saxon w lots of diversity meaning no dominating faith, self-government/salugtary neglect as a result of distance from the crown and tradition, aspirational society since immigrants were lower class looking for better future in New World</p>
                    
                    <h3>Great Awakening</h3>
                    <p>Religious revival leading not only to democratizing changes in religion but also politics</p>
                    <p>Challenged authority by placing emphasis on the indivudual</p>
                    <p>Purtian original groups (Anglicans & Congregationlists) changed by Great Awakening's enthusiasm, itinerancy of traveling religion, socially leveling force</p>
                    <p>Consequences: religion and politics became too interlinked, Great Awakening was anti-elisitst and anti-hierarchiscal, led to birth of new religious grpups like Baptist, Methodists, Episcopal preventing monopoly of rleigipous power</p>
                    
                    <h3>Enlightenment</h3>
                    <p>After the Great Awakening, believed reason was key to undersatanding universe, questioned established religious practices and believed in Natural Law to improve society</p>
                    <p>Changes in society like Great Awakening and Enlightening brought by the printing press spreading ideas to more people</p>
                    <p>John Locke - philosopher w ideas against absolutist rule in favor of Natural Rightsa & the Social Contract influencing colonial resistance values/ideas</p>

                    <h3>Colonial Resistance</h3>
                    <p>Colonists were disstasified over issues like territory, defense, self-rule and trade, and diverging interests of European leaders led to mistrust and resistance, w self-government, evolving ideas of liberty, the Enlgihtenmnet, and more independence/diversity</p>
                    <p>British colonies charters varied between joint-stock (rpviately held for-profit corporate), royal (government property of the crown) or proprietary (single individual managed as they saw fit) but this was not driven by colonists</p>
                    <p><strong>Mercantilism</strong>: economic philosophy/policy built around idea of maxcimizing profit saying nations should develop colonies to extract resources and sell them finished goods</p>
                    <p><strong>Trade & Navigation Acts</strong>: passed by England to control colonial trade and prevent colonies from producing goods even if its cheap so that England could make profit, created resentment among colonists esp since they were not being defended against Indians but Enlgnad believed they were being strenfgthened but thought colonies were expensive</p>

                    <h2>2.8: Comparison in Period 2</h2>
                    <p>just writitng stuff idk</p>
                   `
            },
            "Unit 3: 1754-1800":{
                tags: ["American Revolution", "nation", "early government"],
                content: `
                    <h2>3.1 Contextulaizing Period 3</h2>
                    <p>Context is looking at change/continuity/similarities before or within this unit/period</p>
                    <h3>Ex: Context for Declaration of Independence</h3>
                    <ul>
                        <li>Enlightenment thought: John Locke, Natural Law, Jean Jacques Rousseau, the Social Contract</li>
                        <li>Cost of 7 Yrs War (1754-1763) leading to taxation (Stamp Act of 1765, etc) provoking argument of taxation w/o representation</li>
                        <li>Sons of Liberty, Committees of Correspondence, Boston Tea Party (1773), Intolerable Acts (1774)</li>
                        <li>Second Continental Congress meets in aftermath of battles at Lexington, Concord, Bunker Hill</li>
                        <li>Olive Branch Petition and England's rejection</li>
                        <li>Thomas Paine, Common Sense</li>
                    </ul>

                    <h2>3.2: Seven Years' War / French and Indian War</h2>
                    <p>Intensifying colonial rivalry between Britain and France, British colonies expanding into French-Indian trade networks</p>
                    <p>British defeated France which expanded its territorial holdings but needed revenue which set stage for control over colonies to raise revenue</p>    
                    <p>4 wars between England and France from 1689-1763 w/ England making gains in Each, and the French and Indian War was the columniation of competing claims in Ohio Valley</p>

                    <h3>Albany Plan of Union</h3>
                    <p>THINK OF THE SNAKE: JOIN OR DIE POLITICAL CARTOON BY BENJAMIN FRANKLIN</p>
                    <p>Plan to unite colonies, rejected by British bc they didn't want to make colonies powerful, rejected by colonies since they don't trust each other</p>
                    
                    <h3>American Indians</h3>
                    <p>REALPOLITIK (political realism) where they shifted alliances to whoever could benefit them most so started w French but shifted to British by end of the war</p>

                    <h3>Treaty of Paris of 1763</h3>
                    <p>Britain wins, France loses all North American continental posessions, England gains Canada, North America from French and Florida from the Spanish and has full control over eastern US but had to keep peace and manage disputes between Natives and colonists</p>
                    <p>Considerable monetary cost to British leads to debt and need to raise revenue, turning to colonists and ending salutary neglect thorugh taxing goods in colonies since England wanted more colonial subordination and sharing of imperial expenses</p>
                    <p>Didn't recognize Native land claims leading to Pontiac's Rebellion since natives couldn't shift their alliances between British and French anymore</p>

                    <h3>Proclamation of 1763</h3>
                    <p>Imperial attempt to keep peace in east US by forbidding colonial settlement west of Applachian, reduced cost more than having to keep military presence and eased native resistance</p>
                    <p>Colonials were angry bc they helped w war effort and earned right to the western lands</p>

                    <h2>3.3 Taxation Without Representation</h2>
                    <p>British attempted to collected taxes w/o colonial representation or consent which united colonies and led to resistance for their rights and Enlightenment ideas</p>
                    <p>Coalition War - partnership between multiple nations/groups collaborating to achieve common strategic objectives</p>

                    <h3>Imperial Goals>
                    <p>British wanted to: reduce Empire expenses, intiatie new taxation policies, integrate colonial America to Empire and show colonial responsibilities, practice mercantilism by reducing smuggling and colonial manufacturing</p>
                    <p>VIRTUAL REPRESENTATION: Parliament legislate on behalf of colonists</p>
                    <p>Series of laws/acts to have colonists pay their fair share as British EMprie members:</p>
                    <div>
                        <div>
                            <p><strong>Proclamation of 1763</strong></p>
                            <p>Stabilize British relations w Natives by forbidding colonial settlement west of Applachian through Procl,amation Line of 1763</p>
                        </div>
                        <div>
                            <p><strong>Sugar Act</strong></p>
                            <p>Taxed sugar, molasses, and textile and restricted exports and tigthtened anti-smuggling laws</p>
                        </div>
                        <div>
                            <p><strong>Currency Act</strong></p>
                            <p>Regulate paper money issuance, prevented creation of new paper bills which caused currency shortage</p>
                        </div>
                        <div>
                            <p><strong>Quartering Act</strong></p>
                            <p>British laws passed in 1765 requiring colonists to house British soldiers to reduce costs for Crown</p>
                        </div>
                        <div>
                            <p><strong>Stamp Act</strong></p>
                            <p>Colonists paid for troop protection requiring taxed paper for legal documents, newspapers, and playing cards</p>
                        </div>
                    </div>

                    <h3>Colonial Unity</h3>
                    <p>Colonists were angry about being taxed without representation using Great Awakening and Enlightenment ideals to argue for the social contract and consent of the governed, leading to suspicion/shared grievances allying 13 colonies</p>
                    <p>Colonial indpeendece Patriot movement led by activists/leaders like Benjamin Frankin , British/loyal colonist movement contrasted it</p>
                    <p>Groups created all focusing on philosophy, discussions of liberty and governance, embodying working class presence and diff levels of society, more direct physical action like desctruction of propeerty, tarring, feasthering</p>
                    <p>Women important to boycott movement success, producing handmade alternatives to British goods</p>
                    <div>
                        <div>
                            <p><strong>Committees of Correspondence</strong></p>
                            <p>US legistlativer bodies/organizations aiming to facilitate rapid exchange of info and unity among colonies against British, connecting towns through letters and sharing news</p>
                        </div>
                        <div>
                            <p><strong>Stamp Act Congress</strong></p>
                            <p>Meeting in NYC to formally protest taxation w/o represntation and petition repeal of tax to assert colonial rights</p>
                        </div>
                        <div>
                            <p><strong>First Continental Congress (1774)</strong></p>
                            <p>Meeting in Philadelphia bringing together 12 colonies (except Georgia) to unify against British abuse, organized in respone to Coervice Acts, colonists wanted to coordinate peaceful resistance to restore relaitons w British</p>
                        </div>
                        <div>
                            <p><strong>Sons of Liberty</strong></p>
                            <p>Secret decentralized colonist organziaiton to oppose British tacxation like Stamp Act</p>
                            <p>Began collecting/storing weapons and supplies, creating local shadow governments, and establihing intelligence networks for colonial mobilization</p>
                        </div>
                        <div>
                            <p><strong>Nonimportation Agreements</strong></p>
                        </div>
                        <div>
                            <p><strong>The Minutemen</strong></p>
                            <p>Semi-regular militia</p>
                        </div>
                        <div>
                            <p><strong>Boston Masssacre</strong></p>
                            <p>Example of public defiance as public satements or propoganda victories, British soldiers fired into protestors as a result of tension, killing 5 civilians</p>
                        </div>
                        <div>
                            <p><strong>Boston Tea Party</strong></p>
                            <p>Example of public defiance as public statements or propaganda victories, Sons of Liberty protested tea sale monopoly of the British East India Company through the tea act</p>
                        </div>
                    </div>
                    <p>Some colonists were still loyal to the Crown, other were Patriots, producing bandages/supplies for Army and some traveled w Army as camp followers tending to wounded and giving support (esp women)</p>
    
                <h2>3.4: Philosophical Foundations of American Revolution</h2>
                <h3>Enlightenment</h3>
                <p>Enlightenment ideas (emphasis on reason, science, testing, rationality, logic, questioning religion) made American political thinkers emphasize individual talent over privilege, religion strengthened American view of themselves/liberty</p>
                <p><strong>John Locke</strong>: Enlightenment thinker emphasizing Natural Law / Rights granted NOT BY GOV, by God, nature, or reason</p>
                <p><strong>Jean Jacques Rousseau</strong>: The Social Contract between gov and governed for gov to protect natursal rights</p>
                <p>Divine right of kings for absolute rule was illogical / against natural order of universe, a good gov would give ppl access to their natural right</p>
                <p>Thomas Paine's Common Sense & Declaration of Indpenednce was ideas resonating in history/ideals in US</p>
                
                <h3>Great Awakening 1730s-1740s</h3>
                <p>Influenced colonial thought politically since diversity in religion led to diversity in poliotical thought, and socially since it was anti-hierarchical and anti-elitist</p>

                <h3>Classical Republicanism</h3>
                <p>CLASSICAL REPUBLICANISM: nation of virtuous civic-minded citizens w collective good in their minds/deeds and not tyrannized as a result</p>
                <p>Colonists embraced New World idea opposing tyrannical European Old World which was evolution of Puritan "City on a Hill" ideal</p>
                <p>King/Parliament were taking away rights and British gov was corrupt, leading to colonial paranoia and distrust</p>
                <p>Many colonists hesitant to take final step and declare permanent break w Britain</p>

                <h3>Timeline/Background</h3>
                <ul>
                    <li>April 1775 - Lexington & Concord</li>
                    <li>May 1775 - Second Continental Congress meet</li>
                    <li>June 1775 - Battle of Bunker Hill</li>
                    <li>July 1775 - Olive Branch Petition</li>
                    <li>August 1775 - Royal Proclamation of Rebellion</li>
                    <li>Oct 1775 - Prohibitory Act - Britain forbids trade</li> 
                    <li>Jan 1776 - Publication of Thomas Paine's Common Sense - Paine arrives in colonies in late 1774 and frustrated by Biritish actions, put together reasons for breaking away from England in a pamplet mass produced and consumed (divine right of kings was outdates and parliaments was insensitive to colonial needs, england was using the colonies w/o colonial benefit, american rights were being systematically taken away)</li>
                    <li>June 1776 Second Contiental Congress debated independence and approved a draft declaration by Jefferson, Adams, Frankflin, Livingston, and Sherman designed to get colonists to join revolution</li>
                </ul>

                <h3>Declaration of Independence</h3>
                <p>Structure: opens w Locke and Rousseau's ideas of natural rights, social contract, consent of the governed, then moves into a list of colonial grievances concluding with separation as a solution</p>
                <p>Does not declare independence for swomen, slaves, or Natives  but they would use Declaration's reasoning to claim rights for themselves going forwards</p>

                <h2>3.5: The American Revolution</h2>
                <p>Despite loyalist (pro-British 1/5) and non-aligned (2/5) opposition and british advantages, Patriot (antibritish colonial 2/5) cause succeeded bc military actions, George Washington's leadership, assistance from European allieces, and colonists's commitment/resilience</p>
                <p>Conflict between these groups (Britsh v Colonial, Loyalist vs atriot) explained why war took 9 yrs</p>
                <p>Causes & consequences more important than the battles themselves</p>
                <p>British advantages: industry, empire, army, navy compared to colonial disadvatnages of no industry, underfinanced, undersupplied, untrained military</p>
                <p>Colonial advantages: war fought on colonial soil on colonial terms, highly motivated, easily identifiable enemy, ability for rapid movement, washignton's leadership, foreign assistance from Franco-American Alliance of 1778, british faced challenges like difficulty coordinating/communiciating, vast terrirotiry, and asymetrail warfare bc big heavy contentional war equipment wasn't suitable</p>
                <p>Great Britain wanted to divide and conquer, control cities/coast and crush continental army, US wanted guerilla war to avoid major battles, hit and run, draw british inland, control countryside and control time/places of battles</p>
                <p>NY, Philadelphia - Washington/US win by not losing through stalemate in North, French alliance using realpolitik since enemy of enemy=friend, war in South was internal American civil war betwween Loyalists vs Patriots and inability of British to keep peace here leads to their failure in revoluitioon</p>
                <p><strong>Treaty of Paris</strong>: British frustrations since their military victories were irrelevant, Southern disorder and British pursuit of US forces over the entire region brought undecided to Patriot, Treaty of Paris recognized US, gave them fishing rights, compensate loyalists, Missisipi River as western boundary, British promise to evacuate the Great Lakes</p>
                
                <h2>3.6: The Influence of Revolutionary Ideals</h2>
                <p>Increased awareness of inequalities in society motivated individuals/groups to call for abolition of slavery, women's rights, future indpendence movements like in France/Haiti/Latin America & greater political democracy in new state/national governments</p>
                <p><strong>Social Levelling:</strong>: anti-aristocratic, pro-egalitarian, distrustful of distant authority movement as a result of revolution, leads to decline in indentured servitude</p>
                <p>Abolition was considered more as an actual political position (VT 1777, PA gradual abolition starting in 1780, by 1800 all of Northeast except NJ were legally free states</p>
                <p>Disestablishment - elimination of official state supported religions, no faith was dominant enough to control secular state power. freedom of religion was a right</p>
                
                <h3>Articles of Confederation</h3>
                <p>Government - emerging ideas of limited power, rejection of monarchy, emphasis on civic/public virtue, euqality, and anti-defence</p>
                <p>Loose network tying states together only when necessary</p>
                
                <h3>Women's Rights</h3>
                <p>Patriot women picked up on messages of liberty, emerging as activists and they were essential for British good boycotts during/before the war, had to maintain farms/househol;ds during war and supply troops through orgs, engaged in espionage, becampe camp followers and some even served in military</p>
                <p>Freedom messages led to American women's movement for rights in society, leading to Republican Motherhood philosophy saying women had large societal role to raise next generation of male citizens so they needed more education/intellectual access (roles are still patriarchal but status elevated)</p>
                <p>Some women's suffrage or at least calls for women to be given right to vote</p>

                <h3>Global Revolutions</h3>
                <p>French Revolution - overthrow over monarchy and rejection of divine right and democratic ideas spreading like the American Revolution</p>
                <p>South/Central America - decolonization and independence in 19th century drew heavily on American Revolution ideas, such as SIMON BOLIVAR revolutionary leader</p>
                
                <h2>3.7: Articles of Confederation</h2>
                <p>New state constitutions gave power to legislavtive branch and maintained property qualifications for voting/citizenship</p>
                <p>Articles of Confederation - unified states creating limited central gov but difficulties led to calls for a stronger central gov</p>
                <p>State prioritized fear of tyranny so they constrained exeutcive p[ower, legislature branch most important, constained executive power to avoid king</p>
                <p>Successes included: prosecuting Revolutionary War, giving ex-colonists form of national citizenship, get states to cede Western land claims to federal gov</p>
                <p>Overall unsuccessful since US was weak new republic in globally strong imperialist monarchies, not able to regulate foreign commerce, national debt and challenges raising revenue, unable to make Britain to leave military installationns, not able to regulate foreign commerce</p>
                <p>National gov was too loose, leading to Congress not being able to control states raising or lowering taxes and printing money leading to inflation/unstable economies</p>
                <p>2 MAIN PROBLEMS: issues w currency/debt, arguments on political equality/republicanism limits (ex: more conservatism, in PA radical leveling state constitutuion of 1776 replaced by centralziing power doc)

                <h3>Northern Ordinance</h3>
                <p>Created by Congress as settlers moved westward, which promoted public education & protection of private property & ban slavery in Northwest</p>
                <p>Allotment of western land to be opened for settlement, set up township system and admission process, allowed settlers/states to enter Union as a fully equal states, eliminating problem of colonies for ex-colonies, resourcing schools, and proviso that slavery was NOT allowed</p>
                <p>Created Ohio, Indiana, Michigian, Wisconsin, Illinois</p>

                <h3>Shays Rebellion</h3>
                <p>Farmers led by Daniel Shays prevent coutrys from foreclosing bc of lack of paper currency, unable to be stopped by federal gov w/o military, 4 farmers killed by state milita sent in</p>
                <p>Exposed overall weakness of the Articles and showed the federal gov needed to be stronger to prevent similar situations occuring in US</p>
                <p>Realizes too much democracy in independent state model was just as bad at too little democracy in colonial system --> revision</p>

                <h2>3.8: The Constitutional Convention & Debates over Ratification</h2>
                <p>Diff structure/function of federal gov neogitated/collaborated/compromised through delegates from states during Constitutional Convention</p>
                <p>Articles gave too much power/autonomy to state and barely any national power 1781-1788</p>
                <p>James Madison - stronger central power, asking Washington for approval< compromising national and local authority through representation based on # of people in states, national gov shd have authority in cases needing uniformity like trade or vetoing state laws, checks and balances</p>

                <h3>Compromises</h3>
                <p>Betwen slave statess and free states, regulation of slavery, allowing for prohibition of international slave trade after 1808, between Federalists and anti-Federalists over structure of gov</p>
                <div>
                    <div>
                        <p><strong>Representation in Bicameral Legislature</strong></p>
                        <p>Large vs small states --> led to 2 legislative bodies: the Senate and House of Representatives where eacxh state got 2 senators per state, but representatitves were proportional to the population as measured by the census every 10 years. Together both could pass laws</p>
                    </div>
                    <div>
                        <p><strong>Executive Branch (Electoral College)</strong></p>
                        <p>How to elect presidents? --> Led to each state electing "Electors" in Nov who represent their state in the Electoral College in Dec, and the num of electors for each state = # senators + # house members for that state. Winner takes all format for that state popular vote.</p>
                        <p>Controlled voter fraud, informed votes, distributed voting power between large and small states, has modern implications</p>
                        <p>538 total members, 270 votes needed to win</p>
                    </div>
                    <div>
                        <p><strong>Central vs State Power (Federalism)</strong></p>
                        <p>Bill of Rights representing individual rights and restricting federal gov power</p>
                        <p>9 out of 13 states needed for Constitutional ratification leading to divisions and factions between Federalists and Anti-Federalists</p>
                        <p>Small states wanted stronger gov for protection, Massachusetts demanded Bill of Rights</p>
                        <p>Federalist Leaders like James Madison, Alexander Hamilton, and John Jay wrote essays called Federalist Papers for NY Newspapers explaining rationale for gov structure and ratification. Believed Bill of Rights would actually limit ppl's rights</p>
                        <p>Anti-Federalist Leaders: George Clinton, Patrick Henry, Samuel Adams, George Mason, Richard Henry Lee, John DeWitt raising questions about Constitution, Bill of Rights, and protection of state power. Believed governed must have explicit protection from the gov</p>
                        <p>Media used by both federalists and anti-federalist, constitution ultimately ratified by required 9 followed by remaining 4 by the time of first election</p>
                    </div>
                    <div>
                        <p><strong>Slavery (3/5 Compromise)</strong></p>
                        <p>SOuthern states wanted representation and wanted their massive slave population to count so compromise is that they counted as 3/5 ofa vote</p>
                        <p> Representatives/taxes apportioned to states adding 3/5 for every non white person, gave much more power to Southern states</p>
                        <p>Protected slave trade in the Constitution itself</p>
                    </div>
                </div>

                <h2>3.9: Constitution</h2>
                <p>Changes in gov bc of Constitution, delegates from states participated in Constitutional Convention creating limited central gov (federalist) but seperation of powers through 3 branches</p>
                <p>Federaslism: State power included schools, intrasdtate commerce, public safety, anything not specifically given to nation gov. National gov handled money, foreign affairs, mail, war, international/interstate trade. Both can tax</p>
                <p>Both govs have 3 branches/sections: Executive (president nationally, governor locally), Legislature (Senate/House nationally, General Assembly locally), Judicial (Supreme/Federal Courts nationally, State Court/state law locally)</p>
                
                <h3>Separation of Powers / Checks and Balances</h3>
                <p>Legislative Branch: main job is to make laws, so it could impeach president, judgets, approve treaties, override vetoes, make amendments/rulings</p>
                <p>Executive Brasnch: main job is to implement laws, so it could appoint judgets and veto laws</p>
                <p>Judicial Brnach: main job is to interpret laws so it could overturn laws and executive orders</p>

                <h3>Continuity & Change</h3>
                <p>CHANGES: federal power more supreior to state w/ power to tax, new court system, regulation of trade, foregin affairs, diff representation, easier to amend Constitution</p>
                <p>CONTINUITIES: still republic/democratic gov, some ppl still denied rights, bill of rights was too general so not known whegther it applied to slaves, natives, or women, slavery was protected until 1808</p>

                <h3>Fugitive Slave Clause</h3>
                <p>Prevented slaves from escaping from labor to another state</p>

                <h2>3.10: Shaping a New Republic</h2>
                <p>French Revolution: war between France and Britain led to challenges to US over issues of free trade and foreign policy, competition intensified conflcits, US gov forged diplomatic initiaitves to deal w British/Spanish presence in North America as US settlers migrated beyond Appalachians</p>

                <h3>George Washington's Cabinet</h3>
                <p>THomas Jefferson - Secretary of State (dealt with Foreign Affairs), Alexander Hamilton - Secretary of Treasury (dealt w US economy), Henry Knox - Secretary of War, and Edmund Randolph - Attorney General</p>

                <h3>French Revolution</h3>
                <p>At first US aligned w French since they wanted to overthrow King Louis XVI, but Reign of Terror and France's declaration of war on other European nations raised questions causing divided US and even divided Washingotn's Cabinet</p>
                <div>
                    <div>
                        <p>French supported US in American Revolution (ex: Battle of Yorktown), French ideas of democratic reform opposed to monarchy</p>
                        <p>Thomas Jefferson supported French Revolution, leading to formation of Republican societies</p>
                    </div>
                    <div>
                        <p>French not supported bc Reign of Terror was too radical, and economic trade was affected</p>
                        <p>Alexander Hamilton opposed French Revolution, and merchants agreed since they fearing economic trouble</p>
                    </div>
                </div>

                <h3>Neutrality Proclamation</h3>
                <p>Washington wanted to be uninovled, not taking Britain/France's side by staying neutral, telling citizens to not get involved and not give aid in any form</p>
                <p>Protect vulenerable new nation</p>
                <p>Contributed to growing political divide within Cabinet and public, new political parties forming w/ foreign policy being just one factor (Federalists led by Hamilton, Democratic-Republican led by Jefferson/Madison bc of diff positions on gov and foreing policy and economic policy)</p>
                <p>During GW and JA's presidnetial administrations, lesaders created institutions and precendents putting Constitution principles into practice</p>
                <p>Loose vs Strict Cosntruction / interpretation of Constituon</p>

                <h3>Financial/Economic Problems</h3>
                <p>National economy had war debt, creditors wanted payment, limited trade</p>
                <p><strong>Hamilton - Secretary of the Treasury</strong>: report on Public Credit(1790), National Bank (1790), Manufactures (1791), wanted more manufacturing/industrial society instead of agricultural, wanted national gov to assume state debts, sell national bonds, create BUS to print money/collect tax/pay interest/offer loans (is this constitutional? is it necessary and proper?) and raise revenue through excise/whiskey taxes on luxury items, tariff on imported goods</p>

                <h3>Washington's Farewell Address</h3>
                <p>POLITICAL PARTIES: Federalists led by Hamitlon/Adams w/ loose Constitutional interpretation (strong fed gov) and favored Hamilton's economic plans while Anti-Federalists/Democratic-Republicans/Jeffersonians/Republicans led by Jefferson/Madison strictly interprested coinstuittution (strong satate rights/gov) and opposed Hamitlon's plan</p>
                <p>GW steps down after 2 terms voluntarily since he is not a king, after administrating through French&Indian War, Continiental Congress, Continental Army Commander, Constitutional Convention</p>
                <p>Warned against factionism/political parties seperating US, foreign affairs, avoid political connection only commerical relations w foreign nations,demonstrated US was not a monarchy</p>

                <h2>3.11: Developing an American Identity</h2>
                <p>Changes in American culture alongside reigoonal variations from 1754 (start of French&Indian War) -1800 (election of Jefferson), expressed through art, literature and architecture</p>               
                <p>CONTINUITIES: Slavery protected through 3/5 compromise. slve trade, and fugutivie clause showing how not all Americans included in frteedom/gov</p>
                <p>CHANGES: Common Sense, Sons of Liberty and Declaration of Independnece showed how US no longer viewed themselves as British</p>
                <p>CHANGESL Hamilton's Fnancil Plan and Constitituion replacing Articles showed how stornger national gov was comm,ited to more commerce, less agriculture</p>
                <p>In art, use of Revolution heroes was common depicting themes of liberty/freedom, Americans no longer viewed themselves as British subjects</p>

                <h2>3.12: Movement in the Early Republic</h2>
                <p>Natives evaluated/adjusted alliances w Europeans, other tribes, and US to limit migration of white settlers and maintain control of tribal lands/resources, British alliances w Natives led to tensiosn between US and Britain</p>
                <p>DIPLOMATIC CONFLICTS: Britain still occupied West and impressed sailors, Spain resitrcted US use of Mississipi River, Natives confliced over settlers moving west, Battle of Fallen Timbers</p>

                <h3>Jay Treaty w/ Great Britain</h3>
                <p>British forces would leave sites they still occupied on US, US pledged to repay pre-revolution debts to British merchants, commisssion met to settle boundary between Canada/US and British seizure of American ships/sailors, kept US out of a European War</p>
                
                <h3>Pinckney's Treaty w/ Spain (1795)</h3>
                <p>US gained free access to use Mississippi River for shopping, gained free use of port at New Orleans, and gained disputed territory north of Florida</p>
                
                <h3>Treaty of Greenville w/ Western Confederacy (1795)</h3>
                <p>Ended Northwest Indian Wars/Battle of Falled Timbers that had continued since the Treaty of Paris 1783, ceded disputed Ohio territory to US, new boundary drawn to designate land north/west of treaty line for Native settlemtn</p>

                <h3>Western Movement</h3>
                <p>Conflicts led to land, opportunity, and safety opening up in the west for settlers encoiuraging western migration</p>
                <p>Hamilton's Financial Plan -> Excise Tax on whiskey which Western PA farmers restricted since Western farmers distilled surplus grain crops into whsikey</p>
                <p>Diff needs/lifestylres in Western settlements</p>
                <p>Slavery expanded west/south</p>

                <h3>Whiskley Rebellion</h3>
                <p>Whiskey rebels engaged in violence towards tax collecter, GW had to choose whehter to do nothing or to use federal action/force in a state</p>
                <p>Negotiaters not successful, Washington/Hamilton led 12k milititrra troops into PA to enforce tax and stop rebellion adn rebels dispersed before force arried</p>
                <p>Demonstrated strength of new federsal gov</p>

                <h3>Slavery</h3>
                <p>Expansion of slavery west/south and rising antislavery led to regional slavery differences in opinions</p>
                <p>Constitutional protections of slavery through 3/5 compromise, protection of slave trade until 1808, and fugutive clause, but regional divide over the isssue</p>
                <p>Northern states again slavery, migration west added to sdlave power as slave holders migrated west and established plants adding to legislative power</p>
                <p>Southern States restrict maunmission and state gov permission needed to manumit slaves (manumit = end slavery), some states made manumitted ppl to leave the state</p>
                
                <h3>Lord Dunmore's Proclamation (1775) & Philipsburg Proclamation (1779)</h3>
                <p>Freedom to enslaved ppl willing to join British, approx. 30k fled toi British

                <h2>3.13: Continuity & Change in Period 3</h2>
                <p>Briths attempts to assert tighter control over US colonies leading to Revolution spreading ideals w diff forms of government, internal migration/competiton intensified regional conflict</p>
                `
            },
            "Unit 4: 1800-1848":{
                tags: ["Jefferson", "Jackson", "War of 1812", "2nd Great Awakening", "Slavery", "Sectionalism"],
                content: `
                    <h2>Contextualizing Period 4</h2>
                    <p>Development over US democracy and national cukture, innovations in tech/agriculure/commerce acceleration economy, interest in foreign trade and expansion spurring gov/private inititatives</p>
                    <p>Context to US rpeublic development from 1800-1848: Territorial Expansion, War w Great Britain, Technology, Transportation and Manufacturing, New Political Parties</p>
                    <p>NAPOLEONIC WARS (1803-1815) - context for impressment of sailors and trade interference</p>
                    <p>New tech/trasnportation context for Market Revoljtion and growth of urban areas and manufacturing</p>
                    <p>Expansion of democracy and slavery growing in south  but ending in north leading to new political parties (Democrats ands Whigs) and debates over slavert</p>
                
                    <h2>The Rise of Political Parties and the Era of Jefferson</h2>
                    <p>Issues like tariff, federal gov pwoers, and Euoprean relations dfebatesd by national poliitical parties</p>
                    <p>Constitututon gave a little less power to states</p>

                    <h3>Adams Presidency</h3>
                    <p>XYZ Affair - French attempt to receieve bribe from American diplomats involved in treaty neogitaitons to address their seizure of US ships</p>
                    <p>QUasi War - undeclared naval war between US and France sparked by French  seizure of US ships marking first seaborne conflict for US Navy</p>
                    <p>Growth of Democratic-Republican party</p>
                    <p>Alien and Sedition Acts - claimed to violate Bill of Rights by Democratic-Republican opponents who responded w state resolutions to counter the federal laws, it restircted rights of immigrants and supressed gov criticism (Jefferson and Madison)</p>
                    <p>Viriginia Resolves (1799) - counter to federal gov power made by Democratic-Republican Party (madison) - the law is against locke's social compact and bill of rights</p>
                    <p>Supreme Court decisions established determining meaning of Constitution and asserted that federal laws took precendence over state laws</p>

                    <h3>Marbury v Madison</h3>
                    <p>Election of 1800 - transfer of power from Federalist to Democratic-Republican when Jefferson won, but Adams appointed Midnight Judges to keep some Federalist power in the courts</p>
                    <p>John Marshall was a Supreme Court Chief Justice & Secretary of State, William Marbury appointed Justice of Peace in DC but his commission was never received</p>
                    <p>Marbury sues Madison to try to get his job, Marshall is judge establishing judicial review power for supreme court</p>
                    <p>Marshall sides w Marbury, showing loose construction of consititution and political division over intepretation and powers</p>

                    <h3>Lewis & Clark Expeditions</h3>
                    <p>Following Lousiiana Purchae US gov sought influence/control through exploration and diplomacy</p>
                    <p>explore 8k miles and document ppl, land, and vegetation in new Lousiana territorty</p>
                    <p>Verified potential benefits of Lousiana Purchase, political rivsrly still existed</p>

                    <h3>Lousiaina Purchase</h3>
                    <p>France sells Lousiana Territory to US for 15$ million, Jefferson buys</p>

                    <h2>4.3: Politics and Regional Interests</h2>
                    <p>Missouri COmpromise - congressionla comprosimise only temporarily stopped conlfict, regional interests often trumped national concerns</p>
                    <p>Expansion of slavery in west/south b/c of cotton growth (cotton gin) and northern ending slavery causing SECTIONALISM</p>
                    <h3>Missouri Compromise</h3>
                    <p>Proposed by Hernry Clay since slave and free states qwere equal (11 each) and Missouri had applied for statehood</p>
                    <p>Compromise had Missouri enter as a slave state, Maine enter as a free state, line drawn at 36-30 line of Louisiana territotry to determine status of future states</p>

                    <p><strong>Dred Scott v Sandford (1856)</strong>: slave owners entitlted to keep their property in any state</p>
                    <p><strong>Kansas Nebraska Act (1854)</strong>: slavery decision in new states by popular soveringty</p>

                    <h3>Secrtionalism</h3>
                    <p>Temproary amnagement of issues like through Henry Clay's Missouri Compromise but political debate over slavery intensifiied</p>

                    <h3>Henry Clay's American System</h3>
                    <p>WOuld these policies benefit agriculture or industry or favor diff regions differently?</p>
                    <p>Democratic-Republican War Hawk from War of 1812 and Kentucxky House of Rep who contirbuted Missouri Comproise and Americna System</p>
                    <p>1. Bank of US, 2. Strong protective manufacturing tariff. 3. Federal gov funding of internal improvements like roads, canals, railroads</p>
                    <p>Speech to senate given supporting American System by Clay</p>
                    
                    <h3>Era of Good Feelings</h3>
                    <p>After War of 1812, there was new nationalism, new manufacturing efforts, and limited Federalist oppision to Democratic-Republicans</p>
                    <p>Tariff of 1816 - protective tariff protecting new American factories, made impoorts more expensive to encohrage buying US products</p>
                    
                    <h2>4.4: America on the World Stage</h2>
                    <p>US wanted to claim territory, create global presence, and rpomote foreignt rtrade</p>

                    <h3>War of 1812</h3>
                    <p>US war agfain st Britain caused by Britain impressment of US sailors, supporitng Native resistance, and restricting US trade, failed diplomatic ngoatioon and eocnomic embargo</p>
                    <p>Federalists opposed war (esp New England merchants since they didn't want trade w Britain to be disrupted), Democratic-Republicans supported war</p>
                    <p>HARTFORD CONVENTION (DEC 1814) - federalists proposed constitutitonal changes and some suggested secession</p>
                    <p>War ends w Treaty of Ghent being signed, then the Battle of New Orleans then news of vicotry and news of treaty arriving (fighting continues past treaty bc slow spread of info)</p>
                    <p>As a result, Jackson is hero of war even tho treaty was before hios victory</p>
                    
                    <h3>Treatyt of Ghent</h3>
                    <p>US signers include Adams, Bayard, Clay, Russel, Gallatin</p>
                    <p>US restore possessions to tribes, tribes stop hostitility w US, all possessions from either party restored along w prisoners</p>
                    <p>EFFECTS: New nationalism, rise of Jackson, decline of Federalists, international respect</p>

                    <h3>Monroe Doctrine</h3>
                    <p>Diplomatic effort for US to control Western hemisphere through military actions, native removal, and diplomacy</p>
                    <p>COntext: American nationalism after War of 1812, newly independent Lagtin American countries vulnerable which was seen as potneital for expansion by European powrrs</p>
                    <p>Monroe wanted US to not interfere in European internal affairs but inedepenednent nations in western hemisphere shd remain independent and not be targets for colonization</p>
                    <p>US military not strong and we were not able to back up Monroe Docgtrine, but it highlight tradition of siolation from European affairs which was continued by future presidents</p>

                    <h2>4.5: Market Revolution - Industrialization</h2>
                    <p>Entrepreneurs create market revoltuion in production/commerce where producer-consumer relationships changed as manufacturing got more organized</p>
                    <p>Regional Economic Specialization: manufacturing in north, breadbacket (grain/livestock) in west, plantatio/cash crops in South, with cotton, food, and products being trasnported through regional interdependence</p>
                    <p>NEw tech like canals, railroads, cotton gin, power loom, steel plow, etc allowing for efficient production and regonal specilaization</p>
                    <p>Caused by new tech, transportation, and regional specialization leading to production increase, economic gain, and labor conflicts</p>

                    <h3>Lowell Factor (1823)</h3>
                    <p>Lowell System of production in MA from raw cotton to finished cloth in one factory w young single women as labor force</p>
                    <p>Lowell girls - young women 15-30 from rural areas w/ bad long hour work conditions and they organizsed/protested this through earliest labor movement</p>
                    <p>Harriet Robinson - Lowell Girl speaking out for women's suffrage & went on strike</p>

                    <h3>Transportation</h3>
                    <p>Transportation develpment supporte by legislation and judicial systems lnking north and midwest especially not as much in South</p>
                    <p>Canals like Erie Canal, better national roads, railroads</p>
                    <p>Robert Fulton steamboat (1807) fast transport</p>
                    <p>Railroasdfs cheap, easty to build, location doesnt matter, fast, critical for transpiritntg goods, raw materials, and food</p>
                    <p>Transportration boom started w canals but focused on railraods</p>
                    <p>North had more infrastructure development</p>

                    <h2>4.6: Market Revolution - Scoiety and Culkture</h2>
                    <h3>Immigration / Migration</h3>
                    <p>International migration to industrial north cities, many Americans move west devwloping new communities along Ohio and Mississipi Riversa</p>
                    <p>1 million mostly catholic IRISH immigrants escaping 1845 Potato Famine, german poloitical refugees and farmers looking for opportunity</p>
                    <p>Nativism: opposition, Know-Nothing Party of late 1840s whio wanted to restricti immigration</p>
                    <p>Effets: demographic concentration in cities, leading to new polticial parties and influences</p>

                    <h3>Changing Gender/Family Role</h3>
                    <p>Diff domestic ideals, growth of cities, middle class, chagning role of women</p>
                    <p>Early 19th century women - traditional rtepublican motherhood, cult of domesticity, seperate spheres of home and work life BUT THESE NORMS DID NOT FIT MANUFGACTURTING</p>
                    <p>Women began working outside home (ex: Lowell Factory Girls) and families hired domestics, leading to lesiusere time adn finished clothes</p>

                    <h2>4.7: Expanding Democrsacy</h2>
                    <p>Transition to more democracy by giving sufgfrage to ALL ADULT WHITE MEN instead of just property-owners, accompanied by growth of political parties</p>
                    <p>UNIVEERSAL WHITE MALE SUFFRAGE  - 1820-1850 reegardless of property ownership since more ppl moving to US</p>
                    <p>New parties emerge based on Hamilton vs Clay's Financial Plans</p>
                    <div>
                        <div>  
                            <p><strong>Alexander Hamilton (1790)</strong></p>
                            <p>Bamk of US, Assumption of debts, Tariff, federal excise tax, federal bonds</p>
                            <p>Federalist</p>
                        </div>
                        <div>
                            <p><strong>Henry Clay's American System (1832)</strong></p>
                            <p>Bakn of US, tariff, funding internal improvmeents</p>
                            <p>Democratic-REpublican</p>
                    </div>
                    <p>ERA OF GOOD FEELINGS: all major condidates were Democratic Rpeublican in the Election of 1824</p>
                    <p>12th Amendment: if no majority reached in Electoral College vote, House of Reps would decide election (Jackson had more popular and electroal votes than other candidiates but not majority)</p>
                    <p>Final result of 1824 election: Clay gave support to Adams, who won and Adams appointed Clay to be Secretayr of State later</p>
                    <p>Jackson claimed a CORRRUPT BARGAIN w Clay and Adams conspiring to further his own political chances and challenged Clay's party ideology, campaigning all 4 yrs to defeat Adams in 1828</p>
                    <p>Era of Good Feelings ended since political identity of Democragtic-Republicans wasd challenged and Jackson changed political campaaigning</p>

                    <h3>2nd Party System: Whigs vs Democrats</h3>
                    <div>   
                        <div>
                            <p><strong>Democrats (Jackson)</strong></p>
                            <p>Power of common man, democracy. Similar to Democratic-Republican ideas.</p>
                        </div>
                        <div>
                            <p><strong>Whigs (Clay)</strong></p>
                            <p>Similar to Federalist ideas</p>
                        </div>
                    </div>

                    <h2>4.8: Jackson & Federal Power</h2>
                    <p>Politivcal parties rising disagreed abt federal power and role in BUS, tariffs, and internal improvements</p>
                    <p>Jackson: elected in 1828, man of ppl wanted universal white male suffrage, believed in strict construction, supreme federal power, nationalism</p>
                    <p>Internal Improvements: west expansion through roads/cancals, Clay proposed tariffs used to fund them, opposed by Jackson who vetoed Maysville Road Bill (money form local sources not fed gov)</p>
                    <p>Bank of US: Jackson felt it favored wealthy and was uncosnsitiautional, vowed to kill it by veoting renewal of charter and ordering removal of federal funds (1837 financial panic after destruction of BUS)</p>
                    
                    <h3>Nullification Crisis</h3>
                    <p>Tariff of 1828 (aka Tariff of Abominations) designed to significiantly raise tariff and hurt John Q Adams releection</p>
                    <p>Tariff favored North but hurt South, signed into law by Jackson as president but protested by South</p>
                    <p>Jackson's vice Calhoun authored "The SOuth Carolina Expositon and Protest" to state ideals of nullificiation</p>
                    <p>SC nullified tariff, Jackson threatened to use military force to enforce law</p>
                    <p>Tariff of 1833 - enacted as compromised between SC and Calhoun/Jackson</p>

                    <h3>Whig Party</h3>
                    <p>Opposed Jackson, supported national bank, protective tariffs, federal support for internal improvemnets, felt that Jackson was overextending power</p>
                    <p>Overall Jackson: destoryed BUS, enforced tariffs, did not support internal imporvmenets which led to Whig oppsiton</p>

                    <h3>Expansion</h3>
                    <p>Westward expansion beyond Applachian met w Native resistance, wars, and federeal efforts at control/relocation</p>
                    <p>Internal Improvmeents: West settlers needed to move goods from west to sell in eastern market, eastern manufacturers needed to ship to westerrn customers. National Road (1st national highway), turnpikes (state gov projects funded w tolls) and Erie Canal (connecting NY to Great Lakes/trade) were new projects</p>
                    <p>Spread of cotton cultivation pushed plantations west for more land, pressure to remove natives to open up more land</p>
                    <p>Natives/Cherokee where acculturating tribes and becoming soverieng but resisted move, through 1836 Protest Peitition where they prevented rmeoval from GFeorgia, Black Hawk's War federal troops forced Natives out of NorthWest</p>
                    <p><strong>Indian Removal Act of 1830</strong>: supported by Jackson resulting in 60k Natives displaced from Southast to Oklahmoa on 5k mile Trail of Tears w 1/4 of them dying on the way</p>


                    <h3>American System</h3>
                    <p>Federal$/ private funds used to finance internal improvmenets needed to connect the country and allow shipping to international markets, but Jackson questioned its ocnsititotonality</p>
                    
                    <h2>4.9: The Development of An American Culture</h2>
                    <p>New National cvulture combinming Ame3rican, European, and regional cultural influences like liberal social ideas, romnatic beliefs, etc influence literature art and philosophy</p>
                    <p>American Language (Noah Webster) - created American spellinfg textbooks used in schools, 1st American dicitionary, moved away from English tradiitonal spelling and added distinictly American words</p>
                    <p>Architecture: combined georgian and grweek classical arcitecture when constructing federal and state buildings</p>
                    <p>Art: HudsonRiver School was NY based artists, George Caitlin painting Natives, John Trumbull painting Reolvutionary War and spirit scenes</p>
                    <p>Music: infuences by Africna Ameircans, banjo, Stepher Foster, Dan Emmett (ex: Oh! Susanna) creating American-style music</p>
                    <p>American Literacy Romanticism: expressed man's feelings and ideas besides religion ex: Nathanial Hawthorn, Walt Whitman, Edgar Allen Poe, introducition of mystery genre. Reginal lirterature included Knickerbockers which were NY authors,</p>
                    <p>Transcendentalism: founded by Ralph Waldo Emerson, influenced by German Romanticist philosophers w each person possessing inner light and diviinity and perfection could be reach w action/will</p>
                    <p>Civil Disobedience - right of indiidvidaul to not comply to unjust/immoral laws influneced Gandhi and MLK</p>
                    <p>Newspapers and Magazines like NY papers</p>

                    <h2>4.10: Second Great Awakening</h2>
                    <p>Democratic/individualistic beliefs and repsonse to rationalism/societal changes caused by makret revolution contirbuted to national revival called Second Great Awakening among Protestants</p>
                    <p>Causes: self-improvmenet, self-reliance, self-detemrination, reaction to raitonalism and declining church attendane, amintain moral fiber in US w societal changes</p>
                    <p>CHARLES G FINNEY: preacher whose sermons were emotional w emphasis on individual conversion, pure lifestyle, theology of perfection, no alchochol or nonreligious entertain,ment</p>
                    <p>Western Frontier - few churches in west states so concern abt lack of moral fiber, new roads constructed in west faciilitating travel of preachers w camp meetings and circuit riders</p>
                    <p>New Theology: Methodist & Baptist denominations, doctrine of free will and indidualism/self-detemination, indiidual conversion for all</p>
                    <p>Spiritual Egalitariansism: diff ppl all spiritually equal leading to greater Protestant relgiious diversity and more interest in missionary work including women/African Americans having more roles in church hierarchy</p>

                    <h2>4.11: An Age of Reform</h2>
                    <p>VOluntary organizaitons, response to rationalism, societal changes leading to reforms</p>
                    <p>UTOPIAN COMMUNITIES/HUMAN PERFECTABILITY: ex: Brook Farm a transcendalitst utopian writer/intellectual community, New Harmony communa society of scientists,scholars,educators pursueing perfection, and Oneida Community espousing complex marriage and selection of parents</p>

                    <h3>New Religious Movements</h3>
                    <p>Church of Jesus Christ of LAtter-Day Saints or Mormons: founded by Joseph Smith, ostracized for their beliefs, migrated west to utah to freely practice</p>
                    <p>Unitarianism: onenness of god, right of conscience,d ignity of every human, use of demoratic process within individual congrgation</p>

                    <h3>Temperance Movement</h3>
                    <p>Fight against alcohol and its affects, supposrted by reformers like the American Temperance Society first aiming to limit then totally get rid of alchocol w middle class women most active, and this was also political</p>
                    <p>Results: Maine Law in 1851 prhoubiting manufacturing/sale of ahlcohillic bevegeraes w 12 states folliwing, less consumption of alcholo, contyinued into 20th century resulting in 18th Amendment PRohibition</p>

                    <h3>Asylums / Mentally Ill / Prisons</h3>
                    <p>Dorothea Dix: worked to improve institutitons for mentally ill first in MA and then thorughout US, peittionted for beter treatment facilities</p>
                    <p>Prison reform changing from punishment to rehabilitation to reduce reutrn to prison, taught job skills, and access to religioua and self improvement services</p>

                    <h3>Education Reform</h3>
                    <p>Horace Mann: founder of MA Board of Ed, worked to establish state-supported public schools through taxes and universal public educaiton, professional training for teaxchers in normal schools</p>
                    <p>Public schools aid in social stability by teaching values through textbooks and prepare students to work in industyr/economy</p>
                    <p>Prepare for higher education, state tax-suppoted college like UGA and UNC</p>

                    <h3>Abolitionist  / Antislavery</h3>
                    <p>Grew esp in north, African American population grew along w resitricitons against their rights</p>
                    <p>Second Great Awakening led quesitoning of slaveries morality, gradual emancipation in Jorthern States but some northern state govs still restrictied rights</p>
                    <p>Free African American pop grew, abolition/activism incrased</p>
                    <p>Quakers - questioned morality of slavery, ideals of liberty spread amongst slaves & free</p>
                    <p>Emancipiation in North (immediate in VT and MA, Free in PA and NJ)</p>
                    <p>Still faced restrictions on rights like discirmiantion in employment, difficulty pruchasing land or voting</p>
                    <p>Slavery incompatible w Christianity, used moral suasion to end slavery (women became active)</p>
                    <p>Transatlantic movement to outlaw slavery since it ended in British Empire in 1833</p>
                    <p>Journalism like William Lloyd Garrison spreading abolitionism/emancipation/citizenship for african americans</p>
                    <p>Frederick Douglass - escaped slavery from Maryland, autobiography, abolitionist believed in working within polticial system to end slavery</p>
                    <p>AA abolitionists included Sojourner Truth/Isabella Baumfree former slave from NY w mother experience, David Walker calling for immdeidate abolition and not working within poltical system</p>
                    <p>Underground Railroad: secret routes w safe hiding places including many Quakers, Harriet Tubman was escaped slave & kmajor conductor returning south to bring ppl to freedom</p>

                    <h2>4.12: African Americans in Early Rpeublic</h2>
                    <h3>South</h3>
                    <p>Slaves/free in south created communities to protect families, antislavery efforts mostly unsucessful slave rbelleions</p>
                    <p>3.5 million slaves on plantations, cotton primary crop, periodic allotment of food and lcothing, could not marry creating distinct ceremonies, free/slaves could marry but children followed mothers status, family ties imprtaont</p>
                    <p>Resistance like working slow, taking food, breaking tools, feigning illness, running away</p>
                    <p>AA culture developed like oral tradition, storytelling folk tales, language and certain words, arts, food/cooking methods</p>
                    <p>Sales, seperarion, violence, threatened families, fictive kin/married abroad to cope</p>
                    <p>Religion: most converted to Christianity since eternal rest in heaven adn justice, preachers important to community, spirituals music exprtessed sorrow but someitimes instructions on running away</p>
                    <p>Could be self-emancipated if pruchased their own freedom or through slavewodners (Children of slaceowner or wills upon their death), limited civil rights and had to constalty self identify to whites</p>
                    <p>Slave Revolts - obtain emancipation (ex: Gabriel Prosser's Cosnpiracy of 1800 to end slavery by attacking Richmond, Virginia and holding Gov James Monroe ransom to neogtiate freedom but plot was revealed and conspirators were executed. Denmark Vesey 1822 - free AA who planned mass slave revolt but this was revealed further resitricting AA rights. Nat Turner revolt preacher felt called to free his people but he eventually surrendered and was executed)</p>

                    <h3>North</h3>
                    <p>in the NORTH freedom gained through immediate or gradual state laws or birth</p>
                    <p>Racially segregated urban communiyirs, low paying jobs/employment, seprrate churches like Baptist and Methodist churches such as African Methodist Episcopal Church and mutual aid societies, fraternal organizaitons like Prinece Han Masons, segregated schools or private schools w no higher education, racial vioelcen and segreattion, limited voting and property rights and even residency</p>
                    <p>Activbe in antislvaery societies, participatied in Underground railroad, fought against African colonization efforts bc wanted to live in US, petitiotns advocating for civil rights</p>
                    
                    <h2>4.13: The Society of the South in the Early Republic</h2>
                    <p>Most leaders argued slaves were part of way of life even tho most didn't own slaves, society reliant on agriculture not industrialization bc of climate/soil and crops like rice, indigo, and tobacco (cotton later in 1793 after invention of cootton gin which fed textile factories in North)</p>
                    <p>Georgapy, rivers, and land perfect for agirucltural rprcuts/transdport alongside inventions like steam engine used in Missisispii River</p>
                    <p>Cotton & slavery intertwined w/ heavy workload all year and violence for maintaining fear, sllavery part of social hierarchy and identity w wealthy whites at top, then merchants, then whites w/o slaves, then free AAs, then slaves</p>
                    <p>Southern cities grew w cotton, slaves used for albor/maintainenace in cities as well, paternalism where wealthyplanted were caretakes for wives, children and slavesa and felt slavery ebeenefited slvaes</p>

                    <h3>Westward Expansion of Slavery</h3>
                    <p>East lands depleted and new fertile land west opened up as reuslt of Indian Removal Acxt of 1830, planters moved west to increase profit</p>
                    <p>Large plantations established in fertile Mississipi Delta, new slave states formed, Cotton Belt in deep south w lots of slaves</p>
                    <p>Internal slave trade grew as price of slaves increased and popualtion of slave in South increased due to birthrate increase</p>
                    <p>Conflict over expansion of slavery polticially: attempts to resolve like Missouri Compromise, additional new territory in Mexican Cession compromised through Wilmot Provisio, increasing conflict</p>

                    <h2>4.14: Causation in Period 4</h2>
                    <p>US developing modern democracy and new national culture, Americans sought to define nation's democratic ideals and change society to match them, transition to more participatiory democracy, inspired by relgious and intlelectual movements</p>
                    `
            },
            "Unit 5: 1844-1877":{
                tags: ["manifest destiny", "compromise of 1850", "mexican-american war"],
                content: `
                    <h2>5.1: Contextualizing Period 5</h2>
                    <p>US expansion, more interconnected world, debate over rights/ciitzenship for African Americnas and women</p>

                    <h2>5.2: Manifest Destiny</h2>
                    <p>Desire for natural/mineral resources and economic opportunity/religious refuge led to Westward expansion</p>
                    <p>Manifest Destiny: American supreirority allowing annexing western lands to Pacific Ocean</p>
                    <p>More land opportunities w Louisiana Purchase, depleted soil in East, easier travel bc improvement, economic opportuniuties which also attracted European/Asian immigrants</p>
                    <p>Great Lakes Region: settlement increased after forced removal of Natives, opportuntiies in lead/iron ore mining, aggressive land sales by federal gov, Scandianvian/German immigranted gravitated to midwest fomring communtieis and opporutnity to own land</p>
                    <p>Oregon Trail: Webster-Ashburton Treaty in 1842 settled boundary between US and Canada, Oregon Treaty signed in 1846 making 49th parallel northwest border, Oregon Trail provided route to Oregon country lasting 6-8 months westward</p>
                    <p>Settlers migrated self-sufficiently as familiers, gender roles expanded as women helped w travel as partners leading to female suffrage in some western states like wyoming</p>
                    <p>Writers like John OSullivan and Horace Greeley addvocating for annexation of Texas and western lands to spread capitalism and democracy</p>


                    <h3>California Gold Rush</h3>
                    <p>California - Gold discovered at Sutter's Mill in 1848, 49ers settlers from US Europe and Asia to get rich quick (young single men)</p>
                    <p>Lawlessness leading to vigilante groups, racial conflict, businessmen became rich which filled demands like shiplines, storeowners, hotel owners, tentmakers, SF and LA grew in population</p>
                    <p>Other gold/silver strikes including Pike's Peak in Colarado, others in Nevada, Idaho, Montana, Black Hills, etc</p>

                    <h3>Mormon Migration</h3>
                    <p>Migrated to Utah from Illinois after leadfer Joseph Smith was killed, sought refuge in the Great Salt Lake area to practice religion freely</p>
                    <p>Denied admission to Union until religious practice of poylgamy was outlawed</p>

                    <h3>Natives</h3>
                    <p>Settlers came into contact w natives, hunted buffalo which was their primary food source to make room for settlers/railroadfs, sacred lands promised to native through treaties were taken</p>

                    <h3>Homestead Act 1862</h3>
                    <p>Families sought land, homestead act offered by fed gov during civil war promised 160 acres for $10 if fasmily could improve land after 5yrs, attracted urbaners, immigrants, and former slaves leading to Great Plains pop growth</p>

                    <h3>Foreign Relations / Diplomacy</h3>
                    <p><strong>JAPAN:</strong> Commodore Matthew Perry sent on mission  by Millard Fillmore to open Japan for trade w war ships, leading to Treaty of Kanagawa 1854 Japan opened for trade w first treaty w modern western power</p>
                    <p><strong>CHINA:</strong> Treaty of Wanghia 1844 first diplomatic agreement between US and China, Treaty of Tianjin 1858 opening up more Chinese ports to US, Chinese Education Mission brought Chinese male students to study in US</p>
                    <p><strong>LATIN AMERICA:</strong> Attempts at expansion like the Ostend Manifesto (secret document by American ambassador to Spain calling for Spain to sell island of Cuba or have it seized to protect American interesrts wjich would result in American dlavery expansion, but plan was unsuccesful), The Filibuster Movement (americans try to take power in Latam countries w/o gov consent and extend slavery, Nicaragua taken by William Walker who proclaimed himself president but ewas deafeaed and executed)
                
                    <h3>Transcontinental Railroad</h3>
                    <p><strong>Pacific Railroad Act (1862)</strong>: charted Central Pacific and Union Pacific Railroad comopanies to construct railroad spanning content linking West and East coast and financing gov subsidies and indidisual investments</p>
                    <p>UNION PACIFIC - employed Civil War veterans, African Americans, European immigrants</p>
                    <p>CENTRAL PACIFIC - employed settlers, Asian/Chinese immigrants, Natives</p>
                    <p>Completed in Utah in 1869, cut travel time to only 6 days, followed by additoonal rail lines</p>
                    <p>Effects: pacific trade, coastal cities in California connected to Asia for trade, immigration from Asia, cities along line grew to major trade/business hubs (ex: chicago as a rapid transit economy linking goods to people, gateway between west and east markets)</p>
                    
                    <h2>5.3: Mexican-American War</h2>
                    <p>US victory in Mexican-American war added large territories in West, causing conflict/interaction w Mexican Americans and Natives and raising questions about slavery</p>
                    <h3>Texas War for Independence 1836</h3>
                    <p>American settlers revolted against Mexican restrictions (imposing of Roman Catholicism, outlawing of slavery, US settlers were slaveholders)</p>
                    <p>Battles of Alamo and Goliad - Americans killed<, Battle of San Jacinto - swift victory & Texas independence after reciving aid from East/p>
                    <p>Originally Texas was its own country as Lone Star Republic w Sam Houston first president but citizens wanted annexation into US</p>
                    <p>James Polk - Democratic president elected in 1844, ran on westward expansion, Texas entered as slave state in 1845 (tension/conflict over advancing slavery into the west)</p>
                    <p>Discrimination against non-white and they couldnt testify in court, charged extra fees, etc</p>

                    <h3>Mexican-American War (1846-1848)</h3>
                    <p>President Polk wanted to purhcase California, sending ambassador to purchase but Mexico refused to make sale angry after annexation of Texas</p>
                    <p>Dispute over southern border of Texas, US troops sent by Polk to protect border, war declared after Mexican army attacked US troops</p>
                    <p>Spot Resolutions - proposed by Lincoln in House of Reps to show exactly where troops were attacked on Mexican/Texas soil</p>
                    <p>Whigs opposed war since it was just land grab to spread slavery</p>
                    <p>US victtory but they would face each other agasin in the civl war</p>
                    <p>Texas Spanish was white and of importance social position, Mexcians were those of Spanish and Indian origin</p>

                    <h3>Bear Flag Revolt</h3>
                    <p>California - John Fremont enocuraged US settlers to rebel against Mexican rule, declaring independecnce from Mexico, Navy sent to reinforce claim and Bear Flag Republic was declared making it independent but US military occupied</p>
                    <p>White was those who claimed Spanish descent or married to American settlers, Mexicans where ppl of Spanish and Indian descent</p>

                    <h3>Treaty of Guadalupe Hidalgo (1848)</h3>
                    <p>Westrn lands owned by Mexico granted to US (CA, NM, AZ, NV, UT - $15 million)</p>
                    <p>QUestion whether land would be free or not (abolitions opposed spread of slavery, trying to pass Wilmot Proviso to prohibit slavery in new territiroeies but didn't pass)</p>
                    <p>Gadsden Purchase 1853: land purchased for a railroad line for $10 mil</p>

                    <h3>Natives in West</h3>
                    <p>The Comanche: refused reservation life, believed they were guaranteed buffalo hunting grounds, powerful and extensive trade network</p>
                    <p>Red River War 1874 - all Natives not settled on reservations considered hostiled and removed from South Plains, after conflicts last bands were sent to Fort Sill</p>
                    <p>California: Native communities destroyed and killed, orphans sold as slaves</p>
                    <p>Utes and Paiutes pushed out of Rocky Mountains by settlers</p>
                    <p>Navajo: those who didn't comply and move to reservations called hostile and forced to march by gunpoint in the Long Walk (forced marches to Bosque Redondo reservation 1863-1866)</p>

                    <h2>5.4: Compromise of 1850</h2>
                    <p>Mexican Cession led to debates over slavery and political parties</p>
                    <p>FREE SOIL PARTY (1848) - free men, free soil, lands of mexican cession free from slavery, land for working men, prohibit plantations from buying vast tracts of land, end slvaery in DC</p>
                    <p>Election of 1848: MArtin Van Buren (Free Soil) vs Zachary Taylor (Whig) elected president vs Lewis Cass (democrat who advocated for popular soverignty allowed citizens of a state to decide issue of slavery via ballot)</p>

                    <h3>Compromise of 1850</h3>
                    <p>New territories and sectional balance between California (pop boom bc of Gold Rush, large enough to enter Union in 1850, peititiooned to enter as a free state but some of it below Missouri COmpromise line), Utah, and New Mexico</p>
                    <p>Henry Clay's Compromise: California enter as a free state, popular soveriengty to decide slave or free in NM and UT, Fugitive Slave Law saying slaveowners could go in Northern states to reclaim slaves (room for corruption and bounty hunters), slave trade outlawed in DC but not slavery itself</p>
                    <p>Underground Railroud now extended to Canada, Vigilance Committes formed to protect escapees from slavery, states enacted personal libertyy laws</p>
                    
                    <h2>5.5: Sectional Conflict-Regional Differences</h2>
                    <p>anti-Catholic nativist movement arose to limit political power of new immigrants from Europe and Asia (mainly Ireland and Germany) settling into ethnic communitiesa</p>
                    <p>Immigration bc: freedom from aristocraxy, political instability, state chrushes in Eruope, and opporutnity to own land through the Homestead Act</p>
                    <p>Irish Immigration: came through chain migration w men first then families, came bc Catholic land rights revoked by the British and potato famine, as well as economic opportunitiy in urban cities</p>
                    <p>Immigrants faced challenges: competitions ww AAs for lowskill bad jobs, discrimination, looked down on, leading to self-help through societies/unions like the Ancient Order of the Hibernians to help those in need, Molly Maguieres miners union, Tammany Hall rewarding them for patronage, Catholic schools founded</p>
                    <p>German immigeation: 1848 uprooted farmers and political refugees, traveled as farmers to German Triangle (missori, ohio, wisconsion), settled first in cities then west to urban/rural area engaging in middle calss trades</p>
                    <p>Supported public schools, disdianed for drinking bear on the sabbath, formed their own enclaves, innovastions like Kentucky rifle and wagon</p>
                    <p>More immifgration included Chinese for Gold Rush & worked on Central Pacific Railroad, Jewish iommigration from Europe to noprthenr urban areas escaping religious persecution, and swedish immigration as opportunity to own land settiling in rural northwest</p>

                    <h3>Nativism:</h3>
                    <p>Anglo-Protestant Americans: fearful of Catholic presence and influence of pope, diff languages and values, feared they'd bring violence from home country, corruption and competiton</p>
                    <p>Know Nothing/The American Party: anti-immigrant, anti-catholic, worked to slow immifgration andf deport paupers, spread thrpough most of cities in north</p>

                    <h3>Regional Differences / Slavery</h3>
                    <p>Northern manufcaturing/textiles economy relying on frtee labor like women, immigrants, and children. Old Northwest was more agricultural but still industrial, connected to east through roads/canals/railroads w Great Lake cities becoming important markets. Southern agircultural economy relying on slave labor and cotton gin/production which spread westward.</p>
                    <p>Slavery defenders based arguments on radcial doctrines, view slavery was positve, and belief that slavery protected by constitution, w Calhoun saying it was a Necesasary Good, duty to keep them in their place, pseudoscience, provided housing/clthoing unlike immigrant factory workers, said they were cursed</p>
                    <p>Religions split over slavery (Baptist and Methodist denominations), Bible scriptures misued to support slavery</p>
                    <p>Southern states said they had right to maintain slavery under 10th amendment and foguht federal gov threats</p>
                    <p>Second Middle Passage - 1.5 mil slaves sold from upper south to deep south/west growing the internal slave trade</p>
                    <p>Slave Codes - strictly regulated enslaved AAs to prefent slave revolts</p>

                    <h3>Free Soil</h3>
                    <p>Northerns did not oppose slavery in principle but believed it undermined free labor market, expansion of slavery would limit opportuntiies for free labor as plantation owners would be able to purchase large tracts of land leaving less desirable land for working men, becoming free soil party</p>
                    <p>Free-soil movement arising potraying expansion of slavery as incompatible w free labor</p>

                    <h3>Abolitionism</h3>
                    <p>AA and white abolitionists present moral arguments against slavery, helped them escape</p>
                    <p>Frederick Douglass, William Lloyd Garrison: cotninued to influence opposition to slavery w speeches using moral/Christian ideas to argue against slavery. Increased AA activism assisting enslaved ppl who ran away by hiding them or spiritng them to safety to continue journey to Canada. Vigilance committies watched for slave catchers/hunters</p>
                    <p>Traveling plays, dramas, narratives, and media potrayed slavery to get sympathy (such as Uncle Tom's Cabin by Harriet Beecher Stowe)</p>

                    <h3>Anthony Burns Case</h3>
                    <p>Burns escaped from Virginia and became preacher/tailor in Boston but arrested/clubebed/jailed by bounty hunters and cost $40k to return him to Virginia</p>
                    <p>Riot ended in death of an officer, mob surrounded jail</p>
                    <p>His freedom later purchased by abolitionists and he returned to worka gainst slavery</p>

                    <h3>John Brown's Raid (1859)</h3>
                    <p>Planned and led a raid on the federal arsenal in Harper's Ferry w AA and white forces in order to start a mass slave revolt in the state of Virginia, crushed by Virginia militia, arrested amd hanged becoming a martyr</p>

                    <h2>5.6: Failure of Compromise</h2>
                    <p>Courts/leaders tried to resolve slavery like through the Kansas-Nebraska Act and Dred Scott decision but failed to reduce conflcit</p>
                    <h3>Kansas-Nebraska Act 1854</h3>
                    <p>Devised by Stephen Douglas, split Nebraska territory into Kansas and Nebraska w/ Popular soverignty determining status</p>
                    <p>Led to Bleeding Kansas: figfht to move into territory, mini cil war between proslavery and antislavery temporoary settlers to try to win majority and settle causing illegal voting</p>
                    <p>2 diff govs established: Lecompton Constitution protected slaveowners whether state consittution was passed w or w/o slavery. Federal gov recognized proslavery gov</p>
                    <p>Gag Rule: slavery debates tabled 1836-1844 w hearted debates (ex: Brooks and Sumner fought where Brooks from South felt his relative was dishonored)</p>

                    <h3>Dred Scott v Sanford 1857</h3>
                    <p>US Supreme Court Case, Dred Scott slave who sued for his freedom after landowner's death bc he was taken to Minnesota which was free and he lived there. Court ruled he was still slave</p>
                    <p>Court/Chief Justice said slaves and AAs were not citizens and not eligible to sue in court, slaves were private property which could be borught anywhere in country and remian enslaved and could not be reguated by gederal gov</p>
                    <p>Ruled Compromise of 1820 unconsituttioonal, showed growth of Slave Power of the South</p>

                    <h3>New Political Parties</h3>
                    <div>
                        <div>   
                            <p><strong>The Liberty Party</strong></p>
                            <p>Demanded limits on slavery, prohibit internal slave trade/expansion, no women or racial equality, short lived</p>
                        </div>
                        <div>   
                            <p><strong>The Republicn Party (1854)</strong></p>
                            <p>Formed as result of Kansas-Nebraska Act, Slave Power of South was greater threat to liberty than immigration, poor whites had no hope of advancement, free laborers had no opporuntitty if labor by slaves spread to west. Party not allowed in South, composed of Whigs, Free Soilers, Know Nothings, and Democrats from North and West. Wanted to end slavery but didn't support abolitionism, John Fremont represented in 1856 election.</p>
                        </div>
                    </div>

                    <h3>Lincoln-Douglas Debates</h3>
                    <p>Illinois Senate race in 1856 between Lincoln and Douglas who debated over slavery, Lincoln used logic and folksy stories, Douglas supported popular sovieringty and Freeport Doctrine</p>
                    <p>Freeport Doctrine - slavery wiuld not exist where ppl voted it down (answer to Dred Scott decision)</p>
                    
                    <h2>5.7: Election of 1860 and Secession</h2>
                    <p>Lincoln's victory in Election of 1860 achieved w/o any Southern electroal votes, so most slave startes voted to secede from Union precipatintg Cvil War</p>
                    <p>Caused by: Compromise of 1850, Kansas Nebraska Act, Dred Scott v Sandford, Lincoln-Douglas Debates, John Browns Raid on Harper's Ferry</p>
                    <p>Democratic candidates Douglas (N, Popular Sovieerngty/freeport doctrine) and Breckinridge (S, slavery/states rights), Republican Linocln (freesoil, nonextension of slavery), and Constitutional Union Party John Bell (constitutitonal, missouri compromise w new states above free and below slave)</p>
                    <h3>Crittenden Compromise</h3>
                    <p>Amendment applying Missouri Comrposmise coast to coast as federal protection of slavery, but Lincoln rejects since N/S coestiestnece not possible</p>
                    
                    <h3>Southern Reaction</h3>
                    <ul>
                        <li>SC secedes followed by 5 other states: Buchanan doesnt believe Constitution justifies any action (Dec 1860)</li>
                        <li>Creation of Confederatre States of America under President Jefferson Davis (Feb 1861)</li>
                        <li>Attack on federal Fort Sumter in SC marking start of Civil War in April 1861</li>
                    </ul>

                    <h2>5.8: Military Conflict in The Civil War</h2>
                    <p>Union & Confgerderacy mobilizing for war, Confederacy initiatve at first but Union ultiamtely succeedded bc improvements in leadership, strategy, and resources</p>
                    <p>1861-1865 caused by slavery and states vs federal power causing increased sectionalism and lincoln's victory in election of 1860. Many casualities much more than Revoltuion despite being half the length</p>
                    <h3>North vs South</h3>
                    <div>
                        <div>   
                            <p><strong>Union (North)</strong></p>
                            <p>Abraham Lincoln, capital in DC</p>
                            <p>Larber urban indisturialized cities w factories and railraod</p>
                            <p>Strenghts/Weaknesses: industrialized, larger population bc of immigration, extensive railroads, strong gov. Less unified tho and lacked military leadership</p>
                            <p>ANACONDA PLAN: block South's coastal access, take mississpi river and split Confederacy into half</p>
                        </div>
                        <div>
                            <p><strong>Confederacy (South)</strong></p>
                            <p>Jefferson Davis, capital in Richmond VA</p>
                            <p>Large rural plantations, cash crop agriculture w/o trnapsotrtion systems</p>
                            <p>Strenghts/weakenesses: experienced military leadership, defensive war at home, more motivated/unified, less resoruces and weaker governtment</p>
                            <p>WAR OF ATTRITION: win by not losing</p>
                        </div>
                        <div>  
                            <p><strong>Border States</strong></p>
                            <p>Slave states that didn't secede but were still part of Union (Delware, Mryland, Kentucky, Missouri, soon West Virginia)</p>
                        </div>
                    </div>
                    <p>Trajectory of War: ppl predicted quick war but early defeats and rotating generals waear on North, by middle/end south plays offense and north able to defend/adjust and gain advantaje giving it endurandce to finish war</p>
                    <p>Events: 1st Battle of Bull Run realizing war will be long in Jul 1861, Battle of Antietam and the Emancipation Proclamiation, Gettysburg followed nby Gettsyburg Address, Vicksburg w North controlling Misssipi, Sherman's March to Sea w scooarched eartyh and total war crippling asouthern industries, Surrender at Appomattox courthouse</p>
                    <p>War opens doors for AAs able to enlist but fought in segrgated units and manual labor (contrabands=enslaved who escaped to suppoort union), women took on roles in absence of men like factories/nurisng in N and nursing/plantations in S</p>

                    <h2>5.9: Government Policies during Civil War</h2>
                    <p>Sectionalism causing divide over slavery</p>
                    <p>Emancipation Proclamation- reframed purpose of war and prevent confederacy from getting diplmoatic support from Europe. Foloowwed Battle of Antietam. Designed to sound like legal document. Declared freedom for slaves in Confederacy w/o freeing slaves and dind't apply to border states. Singigifcant by acting as rally cry for abolitionists and enslaved and Europe opposeds slavery so remiands neutral. (Critcs said it emanncipated for the union not abolished and did it too late. Defense was uncertain about right to emancipate) North needed this to win</p>
                    <p>Gettysbuyrg Address - among other sppeeches tyhat Lincoln sought to reunify country and protrry struggle against slavery aa fulfilment of Americna democratic ideals. Union victory but most casualities, stops Confederate invasion of North. Dedicates military cemetary, using word nation instead of unon, wants to preserve union and unite declariaiton and consittution. Paved way for 14th and 15th amendments</p>
                    <p>13th amendment abolished slavery, 14th and 15th gave AAs citizenship, equal protection under laws, voting rights</p>

                    <h2>5.10: Reconstruction</h2>
                    <p>ALtered relations between states and federal gov, debates over citizenship especialy for minotries like AAs and women, ulitmately failed bc of Southern resistancew</p>
                    <p>PRESIDENTIAL RECONSTRUCTION (1865-1866) - grasdual citzenship for AAs (13th Amendment abolishing slavery, Freedmen's Bureau giving needs and education to slaves and poor whites in South), south never left union so guaranteed readmission after civil war (10% plan needing 10% of southern state population to pledge loyalty to union)</p>
                    <p>Johnson: pushed for SOuthern elections and allowing reps back in Congress</p>
                    
                    <h3>Black Codes</h3>
                    <p>Southern states forced support the 13th Amendment, Black codces limited African American rights in the south (couldnt own gun, hunt, fish, couldnt be unemployed, forced to sign long term labor contracts which was basically enslavement)</p>

                    <h3>Johnson v Congress</h3>
                    <p>Repubkicans unhappy w Johnson's Souther sympathies = vetos</p>
                    <p>He vetoed empowering Freedmen's Bureau w authority to enforce and press charges, and vetoed Civil Rights Act of 1866 giving birthright citizenship (except Indiasn) ending Dred Scott decision</p>
                    <p>Efforts by radical & moderate Republicans to change balance of pwower between Congress & presidency to reorder race relations</p>

                    <h3>Congressional Reconstruction (1867-1870)</h3>
                    <p>radical rpeublicans, more abrasive less forgiving apporach</p>
                    <p>Full & immmediate citizenship, South seceded and readmission requires full compliance, growing fear that if democrats gain control of congress the acts will be overturned so they wanted to build these rights into consittution</p>
                    <p>14th Amendfment 1868 - birthright and equal citixenship under law</p>
                    <p>Reconstruction Act of 1867 - divide confedercy into 5 military districts</p>
                    <p>Johnson's Impeachment - fvilate tenure of office act, avoids remove by one vote = lame duck president</p>
                    <p>Grant wins election of 1868 = 15th amendmnet in 1870 of male suffrage</p>
                    <p>AAs taking advantage of new opoirutnities like education, being elected to senate. Women opposed 15th amendment that introduced race not sex into contistuuioton, influential in abolishing slavery. NWSA (National Woman Suffrage Associaiton) created by Susan B Anothony and Elizabeth Cady Stanton</p>
                    
                    <h2>5.11 (NO VIDEO FOUND)</h2>
                    <h2>5.12: Compariosn in Period 5</h2>
                    <p>Reconstruction ended slavery, changed relationships, and led to new citizenship debates,</p>
                    <p>Jim Crow Laws in 2nd reconsutrction and KKK</p>
                    <p>Plessy v Ferguson: seperate but equal, segragtion</p>
                    `
            },
            "Unit 6: 1865-1898": {
                tags: ["westward expansion", "gilded age", "middle class", "industrial capitalism"],
                content: `
                    <h2>6.1: Contextualizing Period 6</h2>
                    <p>Context of Civil War: Westward expansion (sectional tension over slavery, market revolution), Civil War (north-industrialized infrastructure, south-sagriculture dependent on slave labor), Gilded Age (gov support industries, production, and monopolies)</p>
                
                    <h2>6.2: Westward Expansion: Economic Development</h2>
                    <p>Building of railroads, discovery of mineral resources, and gov policies promoted economic growth creating communities and commercial activity opening up actives. Improved agircultural mechanization increased production and decreased prices</p>
                    
                    <h3>Transcontinental Railroad</h3>
                    <p>"Iron Horse" railroad system connecting east and west US coasts, increasing settlement of Great Plains and stimulating trade leading to rise of cities</p>
                    <p>Central Pacific Railroad Company (W to E, Asian/Chinese immigrants), Union Pacific Railroad Compay (E to W, European/Irish/German immigrants)</p>
                    <p>GOv gave incentives to cultivate west: Homestead Act 1862 gave 160 acres of land to ppl who improve/worked land for 5 years, Railway Acts of 1862 and 1864 was contract between Central and Union pacific for transcontinental railway system w gov bonds and land</p>
                    <p>EXODUSTERS: AAs who moved west to escape segregation</p>
                    <p>Old vs New immigration for settlers</p>
                    <p>Improved machinery like reaper, barbed wire, steel plow making farming more efficient, surplus of food w lower prices</p>
                    <p>CHALLENGES: Natural challenges w differences in land resources/fertilty, soddies were sod homes made of dirt bricks, nature diseasters and conflict w natives, manmade cycle of debt, railroad exploitation and dependnency leading to unfair pricing, bonanza farms which were massive single crop</p>
                    <p>RESPONSE TO CHALLENGES: Granger Movement creating safe space and education for farmers, Farmer's Alliance educate communities of fiancnes of famring, Granger Laws to regulate crop transport, storage pirces, and other fees</p>

                    <h3>Court Cases</h3>
                    <p>Farmers victims of industry and financial instituttions</p>
                    <p>Munn v. Illinois (1877) - allowed states to regulate industries that affect common good, upheld Granger laws and other measures against railroad companies</p>
                    <p>Wabash v. Illinois (1886) - states could not set rates on interstate commerce, Congress passed Interstate Commerce Act in 1887 failing to regulate rairlaod rates, too much power until Roosevelt</p>

                    <h2>6.3: Westward Expansion: Social & Cultural Development</h2>
                    <p>Migrants moved to rural and boomtowns in West for opportuntities in railroad, mininig, farming, and ranching industries to achieve self-sufficiency and idenependecen promoted by gov but increased after Civil War</p>
                    <p>CAUSES: Myths of West like William Cody's Buffalo Bill's Wild West Show w cowboys and trick riding, Safety Valve Theory that West would be avalabel to make money during tough economic times</p>
                    <p>RAILROAD: Transcontinental raildroad connecting country, other industries boom to keep up w demand like iron/coal/lumber/steel, new towns/communities along lines and accessible growing cities, time zones created (Eastern, Central, MOuntain, Pacific)</p>
                    <div>
                        <div>
                            <p><strong>Farming Industry (FARMERS)</strong></p>
                            <p>Homestead Act 1862: 160 acres for improving land, Morill Act 1862/1890: fed gov distributes land to states seeking to establish agricultural colleges, Hatch Act 1887: agricultural experiment stations to troubleshoots and improve farming based on local conditions</p>
                        </div>
                        <div>
                            <p><strong>Mining Industry (MINERS)</strong></p>
                            <p>Start in CA, move east to NV, CO, AZ, UT, and ID w/ boomtowns emerging around discovery of natural resources, but could disapeasr just as quick</p>
                            <p>Comstock Lode 1880 - $270mil in gold, $400mil in silver</p>
                        </div>
                        <div>
                            <p><strong>Cattle Industry (RANCHERS)</strong></p>
                            <p>Urbanization led to demand for beef, beef transported from Midwest to coasts via railroads</p>
                            <p>Long drive - overland transport of cattle ready for sale leading to overgrazing and barbed wire going from open range to fenced in rnaches</p>
                            <p>Crisholm Trail - major cattle route San Antonio TX to Kansas</p>
                        </div>
                    </div>

                    <h3>Natives</h3>
                    <p>Treaties vioated w US govenrment, Native resistance responded w miltary force, confined to reservations and denied their tribal soverignty but preserved culture despite US promiting assimilation</p>
                    <p>Settlers move West for economic opportunity, mining/ranchers/farming put pressure on Natives and US gov breaks compromises</p>
                    <p>SAND CREEK MASSACRE (1864) - Colorado, US Army descend upon Cheyenne and Arapaho tribes w 150+ killed including women and children</p>
                    <p>BATTLE OF LITTLE BIG HORN (1876) - Custer's Last Stand, discovery of gold/resources forcing Natives off land, Custer overhwlemed and killed, US army sent to disband Sioux,Cheyenne, and Arapaho gsathering</p>
                    <p>Battle of Wounded Knee (1890) - Ghost Dance Movement gave natives hope for life/lands but US Amry goes into Dakotas and kills/massacres 200+ natives</p>
                    <p>Effects: decimation of bison populatiomn which was natives food source but railroad expansion/trade of buffalo hides led to their decimation, Helen Hunt Jackson Century of Dishonor (1881) - relation between natives and US document inspiring assimilation policies&boarding schools instead of preservation, Dawes Severalty Act (1887) -gov attempt at assimilation breaking up reservations into private farms and giving path to citizenship</p>
                    <p>Closing of Frontier - 1890 revealed no longer distinuguishable boundary marking frontier, identity shaped by challenges, success and failures on the frontier (Frontier Thesis)</p>

                    <h2>6.4: THe New South</h2>
                    <h3>New South</h3>
                    <p>Henry Grady - South done apologizing for Civil War, allowed sefgregation, diversify Sotherhn economy balancing agriculture w indstruialization through imporved railways/factories/COCACOLA, seek economic prosperity like North</p>
                    <p>New South - agriculture based on sharecropping and tenant farming contuing to be primary economic activity in South,l indsutrialization of some of South</p>
                    <p>Inequalities/Old South still shown through sharecropping (exchanging labor for share of crops systematically controlling AA economic oportunity), Jim Crow laws segrgating white and AA, controlling vote through polltaxes, literacy tests, and grandfather clause</p>

                    <h3>Plessy v Ferguson</h3>
                    <p>Supreme Court decision upholding racial segregation through seperate but equal, marking end of Reconstruction political gains and increasing discirmination/violence afgain</p>
                    <p>Upheld constitutitonality of Jim Crow segegration</p>
                    <p>RESPONSES TO RACIAL INJUSTICE:</p>
                    <div>
                        <div>
                            <p><strong>Booker T Washington</strong></p>
                            <p>Gradual change through proof and earned respect, vocation/trade roles</p>
                            <p>Tuskegee Institute (1881) - focus on vocational skills based on community needs</p>
                        </div>
                        <div>
                            <p><strong>W.E.B. Du Bois</strong></p>
                            <p>Immediate change through education/positions of power to dissolve laborer image and protect self through politics/laws</p>
                            <p>NAACP (1909) - National Association of the Advancement of Colored People, political and legal support</p>
                        </div>
                    </div>

                    <h2:6.5: Technological Innovation</h2>
                    <p>Technological innovations and resources used to increase good production</p>
                    <p>INDUSTRAILIZATION: result of technology advancements and efficiency, jobs and competitive companies leading to new markets&industries, opporutntities for minority groups</p>
                    <p>New technologies: telephone by Alexander Graham Bell in 1876 making communication easier and providing jobs to women, lightbulb in 1879 by Thomas Edison making efficient lighting and more efficient way to transmit electrici/electric powered products, car by Henry Ford in 1896 making travel easier/accessible leading to new markets and mass prodsuction strategies</p>
                    <p>MASS PRODUCTION: assembly line process where people mastered specialized job, Taylorism-scientiffic management increasing efficencey, interchangeable generic identical parts mostly</p>
                    <p>New markets: highways/paved roads, motels, gas stations, auto body shops, garage and drivewa. New oppurtities for women as garment trades, education, fiancnial independence, typists, switchboard operators, etcy</p>

                    <h2>6.6: Rise of Industrial Capitalism</h2>
                    <p>Businesses made use of redesigned financial and managrement structures, marketing advances, growing labor force, and businesses wanted to increase profit/production by consolidationg corporations into large trusts and holding companies to concentrate wealth</p>
                    <h3>Capitalism</h3>
                    <p>Competition and desire to be better fueling improvements/innovation, private ownership owned by one person making decisions</p>
                    <p>Somewhat based on Social Darwinism (based on Natural Selection justifying social classes)- doctrine of Laissez faire w little/no gov regulations and business succeed or fail based on ability to adapt</p>
                    <p>Appeal: we like to know who/what is best and competiton does inspire improvmenet, free will allows consumers to control cost/value but dangers include unfair compeititon bc unequal resource access and starting lines</p>
                    <p>Monopoly: business dominates/controls all aspects of market for a specific good</p>
                    <p>Trusts: group of busiensses work together to achieve same level of contorl as a monopoly</p>
                    <p>Monopolies and trusts controled market fully which is natural outcome of things but stifled competiton</p>
                    
                    <h3>Andrew Carnegie</h3>
                    <p>Carnegie Steel Company (VERTICAL INTEGRATION) - owning all means of production for a good</p>
                    <p>Philanthropy/Gospel of Wealth - donated 90% of his wealth to public libaries, halls, universiites, believed wealthy should give back to commutiies
                    <p>Pragmatic justification - if vast majority of ppl become poor and rich dont soldify a middle class, who will conitnue to make the rich, rich?</p>
                    
                    <h3>John D. Rockefeller</h3>
                    <p>Standard Oil Company (HORIONTAL INTEGRATION) - merging of companies that produce similar products</p>
                    <p>Philanthropy included the Rockefeller Center & University of Chicago</p>

                    <h3>Cornelius Vanderbilt</h3>
                    <p>the Commodore, shipping/railroad industry, philanthropy included Vanderbilt University</p>
                    
                    <h3>Captains of Industry vs Robber Barons</h3>
                    <p>Captains of Industry - their success was positivre for the country through honest wealth, indsutry, and innovations giving back to commuities</p>
                    <p>Robber Barons - success hurt country through dishonest wealth, exploitation, monopolies, and corruption</p>
                    
                    <h3>6.7: Labor in the Gilded Age</h3>
                    <p>Workers' wages increased while goods' prices decreased, gave access to new goods and services, standard of living improved but gap between rich and poor grew. Industrial workforce & child labor increased</p>
                    <p>Capitalism - demand for labor attracting immigrants and labor</p>
                    <p>Social Darwinism - people get what deserve, justiying profit at workers expensive</p>
                    <p>Mass production/Taylorism - labor doesn't need to be skilled, creating dispensable workers</p>
                    <p>Led to urbanization, improved living standard, employment&wages leading to more leisure time, expansion of public education, attracting new waves of immigration from east/south europe</p>
                    <p>Changing culture like amusement parks, sporting events, news paper circulation, new ways to shop like department stores and catalogs</p>

                    <h3>Gilded Age</h3>
                    <p>Adding superficial value to something on the outside but not inside (Mark Twain)</p>
                    <p>Typical workers work long hours, dangerous conditons, low wages, including child labor which leads to lack of education</p>
                    <p>Triangle Shirtwaist Fire 1911: deadliest NYC workplace disaster before 9/11, fire resulting in deaths of 146 ppl esp women/girls w/o spinrkler system, only one fire escape and operating elevator w locked stair exit doors</p>
                    <p>Labor/management battle over wages and condiitons led to local and national worker unions and confrontation</p>

                    <h3>Labor Unions (ex: Knights of Labor, American Federation of Labor AFL)</h3>
                    <p>Bread & Butter issues: higher wages, less hours, safer conditons. Organization of workers led to power in numbers</p>
                    <p>Strategic collective bargaining through small group fo represenatives, boycotts and refusal to buy goods/services, strikes and refusal to work</p>
                    <div>
                        <div>
                            <p><strong>Knights of Labor</strong></p>
                            <p>Inclusive of race/gender/skill means more difficult to please, changed system to make politics/law for economic change, advocating against child/female labor, worked owned factories and inspection of work places</p>
                        </div>
                        <div>
                            <p><strong>American Federation of Labor (AFL) 1887</strong></p>
                            <p>Samuel Gompers, exclusive smaller less diverse workforce w only white male skilled workers to easier to please, focused on economic instead of political changes, no problems w capitalism, expected fairer conditoons for his workers</p>
                        </div>
                    </div>
                    <p>Changes in public perception through Haymarket Strike/Riot in 1886, Homestead Strike in 1892, Pullman Palace Strike in 1894</p>
                    <p>Haymarket Strike/Riot 1886 - peaceful meeting at Haymarket Square in Chicago, pipe bomb deotnated in crowd causing violence and unions blamed by public for violence</p>
                    <p>Homestead Strike 1892 - Carnegie Steel Plant where Henry Frick manager pushes workers to continue production despite unsafe working conditions, stocks up steel to outlast protest, Pinkerton private securitty hired to squash protests & PA state milita leading to violence</p>
                    <p>Pullman Palace Strike 1894 - skilled workers strike at multiple locations, Panic of 1893 leads to dramatic wage reduction to retain profit, troops sent in to end strikes</p>
                    <p>Unions viewed by public as anti-capitalist messing w natural order of business, un-American and mostly immigrant, violent and disruptive to production</p>

                    <h2>6.8: Immigration & Migration in the Gilded Age</h2>
                    <p>Expanding industrial workforce, cities attract immigratns from Asia, south/east Europe, and AAs from South to escape poverty/persecution and seek economic growth/social mobility leading to cultural neighborhoods</p>
                    <p>1882: more than 2k immigrants arrived each day from south/east europe and asia w/ little experience w democracy and education</p>
                    <p><strong>Assimilation/Americanization</strong>: settled in urban areas and the west, more difficulty assimilating than previous generation, created ethnic neitgborhoods to maintain culture</p>
                    <p>Ellis Island & Angel Island established</p>
                    <p>Immigrantds were "birds of passage", cheap labor and part of changing urban landscape, changed consumer culture</p>

                    <h3>New vs Old Immigrants</h3>
                    <p>Gilded Age brought different wave of immigrants.</p> 
                    <p>OLD IMMIGRANTS: before Civil War, North/west europe, mainly Protestant but many German/Irish Catholics, highly literate, spoke English, skilled artisans. Migrated bc of market revolution, cheap land, assimilation, and accumulation of wealth</p>
                    <p>NEW IMMIGRANTS: after CivilWar, South/East europe, Catholic/Jewish/Greek Orthodox, low literacy and relativelty unskilled. Migrated bc of industrial revolutoion, urbanization, more migrants, difficulty assiialate, AAs migrate out of South</p>

                    <h2>6.9: Responses to Immigration in the Gilded Age</h2>
                    <p>Debate over assimilation/Americanization accompanying growth of international migration, compromises negotiated between culture brought vs US cultures, Social Darwinism justifying success of social hierarchy, women like Jane Addams worked in settlement houses to help immigrants adapt</p>
                    <p>SYMPATHIZERS: settlement houses like Jane Addams's Hull House for social reforms esp women, poor immigrants neighborhoods. Political machines provided services for immigrants but excluded groups like Chinese and AAs</p>
                    <p>NATIVISTS: Social Darwinism w/ survival of fitted applied to poor immigfrants and justify wealth and status. Workers feared job competiton, language barriers made difficult immigrants unions (orgfanized labor) but this led to immigrants being used as strike breakers, gov restrictions and banning of criminials,poor,polygamists,alcoholics,ppl w illness from coming into US (EX: CHINESE EXCLUSION ACT suspending Chinese immigration from 1882-1943)</p>
                    <p>IMMIGRANTS: difficulty assimilating and had to compriosionise between tradition and Amercian culture leading to ethnic neighborhoods but abanadoned tradion. US v Wong Kim Ark raised questions of citizenship by birth vs parent's nationality, court ruled citzzenship protected by 14th amendment</p>

                    <h2>6.10: Development of the Middle Class</h2>
                    <p>Corporations need for managers and increased education access led to growth of a middle class, consumer culture expanded by leisure time</p>
                    <p>Middle Class (AMERICAN DREAM): income between poor and wealthy, has leisure time and extra money caused by admin/management and education for men & women leading to growth of skilled workfroce, expansion of consumer culture/entertainment, deveolpment of suburbs</p>
                    <p>Leads to more political actisim and social reform (PROGRESSIVE ERA)</p>

                    <h2>6.11: Reform in the Gilded Age</h2>
                    <p>Artists advocated of Social Gospel champinoned diff visions for economy & US socirty, women sought equality</p>
                    <p>PROBLEMS: Corruption, poverty, crime, overdorwinding, poor conditoons, hjunger, disease, pollution and CHURCHES/INDIVUDALS/GOD SEEN RESPONSIBLE</p>

                    <h3>Protestant Churches</h3>
                    <p>Alternative vision solving urban poverty applying Christian values in the SOCIAL GOSPEL to promote better living conditions</p>
                    <p>SOCIAL GOSPEL: merging religion and reform in Gilded and Progressive Era and did not generate national support</p>

                    <h3>Women reformers</h3>
                    <p>Address lack of social services, overdrownedd immigfrant neighborhoods, and inequalityt w men</p>
                    <p>Solve through settlement houses and organize for reform/suffrage like NAWSA</p>
                    <p>Future social workers and women reformers prominent in future reform movements</p>

                    <h3>City Beuatiful Movement</h3>
                    <p>Address overcrowidng and chatoic layout solved through urban planning, parks/green spaces, suburbs</p>
                    <p>Failed bc good physical design by itself cant solve social problems</p>

                    <h2>6.12: Controversies of Role of Government in the Gilded Age</h2>
                    <p>Debates over whether laissez-faire policies/competition promoted economic growth or gov intervention would be needed, foreign policy looked outside US border to gain foreign influence and control over makrets/reesources in Asia/Latam/PacificRim</p>
                    <p>Less regulation: laissez faire supported by Social Darwinism, Gospel of Wealth validated extreme wealth and writings like "wealth of nations" by Adam Smith says supply/demand drives economy not gov invovlement</p>
                    <p>Expanding global markets: diplomacy gateway to overseas business, global influnece expanding through Open Door Note, annexation of Hawaii, Alfred T Mahan</p>
                    <p>Gov in economy: historical developments illustrating gov role in economy starting w American System in 1824, transportatin infrastrcutre in 1820s/30s, free soil parrty in 1848, federal railroad land grant in 1850, 1854 matthew perry to japan, then gilded age</p>
                    <p>Gov interested in economic expansion andf growth but not regulation of businesses</p>

                    <h2>6.13: Politics in the Gilded Age</h2>
                    <p>Economic instablity inspired agrarian activists to create People's/Populist Party calling for stronger gov role in regulation, parties debate over tariffs/currency issues, reformers believed gov corruption, political machines thrived by providing immigrants/poor w social services</p>
                    <p>REPUBLICANS: Anglo-Saxon Protestnat, rural support, AAs, probusiness, gov regulation of social issues, high tariff, gold standard</p>
                    <p>DEMOCRATS: catholics/jews/lutherans, immigrants, industrial/urban locations, probusiness, states rights, low tariff, silver standard</p>
                    <p>Reublicans and Democrats mostly differed only in compision, only to some extent in policies, lack of leadership and laisdsexz faire caused limited legislavtive agenda</p>
                    <p>PATRONAGE: loyal party members gifted w jobs and favors</p>
                    <p>Political Machines: active in local urban areas, provided service in exchange for votes, ex: Tammany Hall Democrats in NYC</p>
                    <p><strong>POPULIST PARTY</p>: reformers/advocacy, emerged critical of laissez-faire, adovcated for gov ownership of railroads, tleegraph, telephone, wnated 8hr workday for facotry workers, supported free coinage of silver</p>
                    <p>1896 Presidential Election - win for urbans w/ McKinley, end for Populist Party but it would inspire Progressive era later</p>
                    `
            },
            "Unit 7: 1890-1945": {
                tags: ["imperialism", "reform", "mass migration", "WW1", "Progressive Era", "Roaring 20s", "Great Depression", "WW2"],
                content: `
                    <h2>7.1: Contextualizing Period 7</h2>
                    <p>Growth expanded oppurtunity, reformed US society and economy bc of instability, commincation/tech innovations leading to internal/international migration pattern changes, global conflicts in US and world</p>
                    <p>PROGRESSIVE ERA 9reform from late 1890s to 1920), Spanish American war conflict in late 1890s-early 1900s, 1920 censures followed by Roaring 1920s then Great Depression from 1930-1940</p>
                    <p>WW1 from 1910-1918, WW2 from 1939-1945</p>
                    <p>Reformers demand federal gov should address problems and economic instability and trasnform into limited welfare state</p>
                
                    <h2>7.2: Imperialism - Debates</h2>
                    <p>Imperilists - said Americans destined to expand culture/institutions (spread democracy) globally citing economic oppornutity, competiton w Europe, closed western froniter, and racial theories, social darwinisim, new markets, compete w europe, new ouppourtuntiies</p>
                    <p>Anti-imperialsits - cited principles of selfdetermination, invoked both racial theories nad isolationsist foreign policy to argue against expanding overseas territoy, respect other country's soveriengty, don't engage in aggresion to gain access to global trade, honor isolationsim, shared some racial ideology</p>
                    <p>MONROE DOCTRINE 1823 - sent message to Eruppe to not involve in western himeisphere</p>
                    <p>Context: US wnated to compete w European colonization, inuddstrialization created need for raw materials and new global markets</p>
                
                    <h2>7.3: Spanish-American War</h2>
                    <p>US victory in Spanish-Amerian War led to US acquisition of islands in Caribbean and Pacific, inolvement in Asia, suppression of Phillipines nationalist mvoement</p>
                    <p>CAUSES: Cuban Revolution against Spain which US felt akin to which disrupted US trade, role of yellow press/media creatred exaggerated news, death of 260 americans on battleship maine which was eaccident but exagrerwted to be spain</p>
                    <p>Effects: inspired enthusiasm for expanding navy, efforts to acquire hawaii and phillipines, establish predominance in carribean leading to nationalist movement, led to patriotism, intesified imperialism debate, better access to trade w asia, groundwork for panama canal</p>

                    <h2>7.4: The Progressives</h2>
                    <p>Progressive Era jounrliasts attacked corruption, injustice and instsability and reformers including women worked to effect social changes, they were divided over issues like segrepeation and gov participation, and disagreed about immigration resistrict, sought federsal legislation to regulate economy, reoffrm and expand democracy</P.
                    <p>Dealt w issues like prohibition and womens suffrafge, establisjing national parks and advocating diff gov responses to overuse of natural resources</p>
                    <p>Result of industrialized/immigration/corruption of Reconsutruction/Gilded Age</p>
                    <p>Progressives were urban middle class including women w time/resources, muckrakers/investigative journalists trying to inform public, and federal/state/local politicians</p>
                    <p>GOALS: stop political corruption/disenfranchisement (initiative, sufgfrrage for women, secreet ballot, 19th amendment), sponsor urban social change (safer tenemenets/wokring conditoons), address injustice/moral reform (civil rights, tmeperance), promote ecoomic equality (trust busting, banking reform), preserve/conserve environemnt (national pakrs, conserve resources) achieved through legislation/action from gov and support</p>
                    <p>Happened bc of growing middle class and ingterested jounralists, conflict between labor and management, strong political leadership, and economic growth w/o considering impact</p>
                    <p>19th amendment - women suffrage, Clayton/Sherman Antitrust Act prohibiting anticompetitve practice to restrict monopolies, Federal Reserve central  bank of US, National Parks, 18th amendment establishing prohibition</p>
                    <p>Not as much progress in civil rights as hoped</p>

                    <h2>7.5: WW1 - Military and Diplomacy</h2>
                    <p>After neutrality in WW1, US entered conflict ending isolagtionist/noninvolvement in response to Woodrow Wilson's call for defense of humanitarian and democratic principles</p>
                    <p>CAUSES:German unrestricted submarine warfare, Zimmerman Telgram sent from Germany to Mexico to try to go against US, US declares war on Germany in 1917 w 14 Point Speech by Wilson, WW1 ends in 1918 and 2nd failure to ratify Treaty of Versailles in peace negotaiates followed by more isolationism after war</p>
                    <p>WILSON & 14 Points: defined war effort in terms of creating global environemtn for democracy, 14points included freedom of the seas, selfrule to European colonies, League of Nations, wanted to spready democracy</p>
                    
                    <h3>War & Post War</h3>
                    <p>US played relatively limited role in combat but overall helped Allies through supplies/loans and recover french terriotiry</p>
                    <p>US Senate refused to ratify Treaty of Versailles or join League of Nations despite Wilson's involvement in postwar peace negoatitiaions</p>
                    <p>Wilson's ideas of global peace not shared by France, Britain, or Italy. Russia/Germany not invited to Treaty. Peace terms included disarming Germany, forcing war repearation, selfdetemrnation to some nations, League opf Nations</p>
                    <p>Wilson wanted to establish US membership in League of Nations, Irreconcilables wouldn't accept any portion of Trwaty, Reservationists led by Republican Senator said would ageree if it could be amended</p>
                    
                    <h2>7.6: WW1 - The Home Front</h2>
                    <p>Restricted freedom of speech, increased anxiety about radicalism leading to Red Scare, attacks on labor activism and immigrant culture, immigration from europe reached peak, nativist campaigns, immigration quotas</p>
                    <p>New immigrants arriving from BGermany, Italy, Russia, East Europe, Austria-Hungary thropuughout end of 19th centruy (glded age)</p>
                    <p>Fear of immigrants from Triple Alliance countries, communism (Russian Reovlution of 1917) and antiwar american resulting in public opinion,nativist actions,</p>
                    <p>Committee on Public Information (CPI) led by Goerge Creel which was wartime propaganda, Red Scare tension between labor unrest and communism</p>
                    <p>Espionage Act (1917) imprisoned those insitgating rebellion/disprupting war, Sedition Act (1918) progibited disloyal srtatements about US. Both took away civil liberties (ex: Court cases US v. The Spirit of 76 and Scheneck v US)</p>
                    <p>Immigration Resitrictions: Immigration Act of 1917 using ltierascy tests to limit immigration esp from Middle East/Southeeast asia, Acts of 1920s giving quotas based on prior population percentages</p>

                    <h3>Great Migration</h3>
                    <p>General migration pattern to urban centers for economic oppourntity and demand for war production sand labor</p>
                    <p>AAs escpaing segregation/violence/limited opportunit in S moved North and West for new oppounrtities/jobs including women but still encountered discrimination</p>
                    <p>AAs shift from rural to urban causing tension racially in North (Race Riots in 1919, Harlem Renaissance & culture)</p>
                    <p>Political instability in Mexico prompts migration of Mexzicans to US</p>

                    <h3>Urban Changes</h3>
                    <p>Total War: increased gov control of manufacturing/economy</p>
                    <p>Diff responses to wartime ecomomy & conditons by different labor unions (1919 labor strikes against, American Federation of Labor pro-war)</p>

                    <h2>7.7: 1920s - Innovations in Communication & Technology</h2>
                    <p>New technology/manufacturing leading to consumer goods & mass media</p>
                    <p>New technology, electrificzation of household products, scientifific management, cars, radio, and advertisining had effects like increased living standard&consumer culture, car-centered economy and life, easier life at home for women leading to more equal gender roles, development of national culture w regional difrerences</p>
                    <p>Impact of automobiles/Ford: Economic changes and connection to cars/gas, parallel to railroads of Industrial Revolution, societal changes and freedom/affordibility for low incom, youth, adn women, geographic changes like suburbs, hgihways, billboard advertising</p>
                    <p>Radio contirbuted to naitonal culture but had reigonal/poltiical differences, parallel to telegraph in 1st industrial revolution and television in 1950s</p>

                    <h2>7.8: 1920s - Cultural and Political Controversies</h2>
                    <p>Urban centered population giving oppurtnities to migrants and women, nativists and immigreantion quotes restricted immigration after WW1</p>
                    <p>URBANIZATION: attracted by economic and social oppiruntities</p>
                    <p>overall MIGRATION: moving of ppl between places whether internal like Great Migration from rural to urban, or international like east/southern euorpeans, Latams, or Canadians w groups like asians barred/limited</p>
                    <p>Nativism - revived, protect native interests esp during first Red Scare and its aftermath, placed quotes based on nationality of new immigrants like the Emergenyc Quota Act of 1921 limiting immigration to 3% based on 1910 census or National Origins Act of 1924 limiting immigration to 2% based on 1890 census. Some ppl unskilled considered undeseriable</p>
                    
                    <h3>Harlem Renaissance</h3>
                    <p>Migration gave rise to new forms of art/literature expressing ethnic and regional identities, cultural/political controversies emerged as Americans debated gender roles, modernism, science/relgion/race, etc</p>
                    <p>Rebirth of AA culture in cities, arts/music/literature, like Jazz Age and Blues, Louis Armstrong, etc</p>

                    <h3>Cultural Controversies</h3>
                    <p>Gender roles and debates over role of women: new women symbolized by flappers and automboile during jazz age, repreducive rights and divrose laws were controversie, 19th amendmenet women's sufferage, equality?, National Woman's party (ERA)</p>
                    <p>Disullusionment, conformity, and consumerist after WW1. Highly critical writers included Sinclair Lewis, Scott Fitzgerald, and Ernest Hemingway</p>
                    <p>Prohibition: 18th Amendment vs bootleggers and speakesies, organized crime and gangsterism</p>
                    <p>Urbam vs rural divide (more fundamentalist), over sicnece and religion like the Scopes Monkey Trial vs Charles' Darwin evolution taught in schools, and race and immigration like KKK and Nativists</p>
                    
                    <h2>7.9: Great Depresion</h2>
                    <p>US transition from rural to urbaan led by large companies, episodes of credit/market instability like Great Depression led to calls for stronger financial regfulatory system</p>
                    <p>Urbanization.industrializatoion of agriculture, Depression caused by stock market crash of 1929 where selling frenzy after extended period of prosperrity w increasing prices and speculation (buying on margin), easy credit can lead to eocnomic instability. disparity in wealht affected good demand, under-consumption, and purhcasing power. Debt increased bc of consumer culture, layaway plans, and credit</p>
                    <p>CAUSES: stock market crash, overproduction of agricultural products/manfuactured goods leading to surpluses and low prices esp affecting farmers, gov noninterneventon w little regulation and high tariffs, dust bowl nature contirbute, serious collapse of world trade/worldwide depression, migrations/movement like Okies fsarm workers west looking for work, changfes in federal gov w more direct action and public relief, regulation of ifnacial system</p>
                    <p>Modern American Liberalism / Limited Welfare State: shd gov regulate businesses to prevent eocnimic instabuility? shd it provide a safety net for americans? what about rugged indifvudualism?</p>
                    <p>Farmers/poplustis need public relief/assistance, labor unions protect industrial workers, reformers/politicans focus on 3Rs: relief, recovery, reform</p>
                    <p>EFFECTS: mass unemployment, around 25% and even higher for minorities/women, bank closures and business failures as ppl underconusmed, psanicked and rushed to banks, povertty/homelessness/social upeheaval led to foreclosures and evictions. Hoovervilles housed unemployed/homeless</p>

                    <h3>Policy Changes</h3>
                    <p>Policymakers responded to mass unemployment and social uphealvals by transofrming US into limted welfare state, redefining goals and ideas of modern american liberalism</p>
                    
                    <h2>7.10: New Deal</h2>
                    <p>Relief to poor/unemployed, stimulate recovery and help businesses, reform economy and prevent future situaitons</p>
                    <p>Alphabet Soup RELIEF: agencies created like FERA giving grants to local govts for soup kitchens/etc, AAA giving subsisidiees for farmers, CCC employing young men adn paying their families, FHA insuring bank loans for homeowners/comapniedss</p>
                    <p>Alphabet Soup RECOVERY: NRA setting codes for industries, PWA providing jobs/infrastructure, Bank Holdiays closing banks to resotre conficdence, Emergnecy Banking Relief Act exmainie and rpeoen only sound banks</p>
                    <p>Alphabet Soup REFORM: FDIC guarnteeing deposits still today, SEC regulating stock market protecting investors, TVA devleop poor areas through jobs/electricity</p>
                    <p>Some agencies later found to be uncosnittitutoonal like NRA and AAA</p>

                    <h3>2nd New Deal</h3>
                    <p>Focused on relief and reform w/ WPA relief providing jobs/infrastructre, NLRA(Wagner) reform giving right to unionize/coolective bargaining, Fair Labor Standards Act resitrciting child labor, wages and hrs, and Social Security Act still aorund today tjrough insurance program</p>

                    <h3>Political Parties</h3>
                    <p>Roosevelt pushed by radicals, unions, and populists, while conservatists wantred to limit New Deal. New Deal didn't end Depression but left reforms/agencies fostering long term political relaingment where many ehtnic groups idenittified Democrat and migrate cities</p>
                    <div>
                        <div>
                            <p><strong>Criticisms from the Left (Liberals)</strong></p>
                            <p>Wanred more extrensive chanfes to economy since New Deal helped businessses more than people. INcluded radicals, working class, unions, and populist movements (ex: Townsend)</p>
                            <p>Poltiical realignmenets as result of benefiting from New Deal, AAs, wokring class, ehtnic groups, immigrants, Cahtolkics and Jews</p>    
                        </div>
                        <div>
                            <p><strong>Criticisms from the Right (Conservatives)</strong></p>
                            <p>Wanted to limit New Deal bc gave gov too much power (socialsim/commnuism), Ameircan Liberty League was problematic for FDR, Congress thought it was socialism (WPA and Wagner Act - Revolution), Supreme Court invalaidated NRA and AAA esp after FDR's court packing scheme controversy leading to less success for him</p>
                        </div>
                    </div>
                    <p>Migration pushed by economic diffcioutlty pulled by war production/labor during WW2, mobilization and industrial jobs in defense industries leading to movement and migration (ex: Great Migration to Midwestern cities like Chicago, West cities like LA, and Northern ones like NY)</p>
                   
                   <h2>7.11: Interwar Foreign Policy</h2>
                   <p>After WW1 US foreign policy maintained isolationism but promoted internaitonal order through investments, treatieas, and select military interventionsim</p>
                   <p>Unilateral foreign policy: US isolationsim and avoided conflict, League of Nations & collective security mediating international disputed. International investment agreements to maitain international connections/world order, fix German repeations and WW1 debts by Allies in Dawes Plan, and influence other nations</p>
                   <p>Conferences and treaties to maintian peace and disarm nations to minimzie war</p>
                   <p>US military intervnetions in Latin America like DR 1916-1924, Haitin 1914-1934, Nicaragua 1926-1933, and Good Neighbor Policy in 1930s used by FDR's adminsitration</p>

                   <h3>Transitioning to more involvement</p>
                   <p>From Neutraility in 1935 (NEUTRALITY ACTS): prevented economic/miiltiary engagement w countries at war, banned loans or sale of arms or sailing on ships of those countries</p>
                   <p>Cash and Carry (1939) - could pruchase what was needed if paid for items and carried them in their own ships</p>
                   <p>Bases for Destoryers (1940) - British air and naval bases in the hemisphere</p>
                   <p>Lend-Lease Act (1941) - provide material aid/supplies to Allies whose defense was vital to Americna ineterests (arsenal of democracy)</p>
                    <p>Fasicsm: aurthroirtiairn and nationlaistic like Mussolini in Italy</p>
                    <p>Totalitarianism: centraliszed dictator system where nation>individual</p>
                    <p>Nazi Gemrnay: far right ideology, Hitler comes to power, taking Rhineland, Sudetenland, invading Poland through blitzkrieg</p>
                    <p>America First Comittee - org suppiritng isolationsist unleass US directly hit, rperesenting public opinoon</p>
                    <p>Asia/Japanese invasion of China, imperalists/militarists under leadership of Hideki Tojo</p>
                    <p>America's Stimson Doctrine (1932) - US wouldnt recognize territotial psosessions achieved by force</p>
                    <p>Pearl Harbor: suprise Japensesse attack on Ameircan military base in Hawaii Dec 7 1941</p>

                    <h2>7.12: WW2 - Mobilization</h2>
                    <p>Mass mobilization of society ending Depression, strong industrail base helping win war, provided oprirutnities for women.minorities and debates of segreagation, challenfes to civil liberties like internment of Japanese Americans</p>
                    <p>Migration to US from Meixco and other places despite gov politices against Mexican immirgration</p>
                    <p>Mobilizing for war - employed americans getting out of depression, industrial/defense spending helped boost economy, equipped/provisioned allies w help of production of weapons, draft through Selective Service Act before even acrtualling entering war, rationing basic goods through War Production Board to avoid overconusmption of meat,rubber,gas,etc</p>
                    <p>Social changes: opporutnitty for women/minorities, improved socioeconimics, Rosie the Riveter symbolized women obtaining oppiruntities,patritotism and war effort. Segregation continued through Tuskegee Airmen even inmilitary, Double V Campaign resulting in debates and lsaying foundation for civil rights movement. A Philip Rando;ph and proofposed march on Washington, Native American Navajo Code Talkers</p>
                    <p>Internment of 100k+ japaense americans perceived as threat to national security/sabotge, consittitutiaonl according to Korematsu v US (Executvie Order #9066)</p>
                    <p>Bracero program: Mexican immigrants to fill increased labor demand, esp farm workers temporarily in US, massive deportations in 1930s</p>
                    <p>Zoot Suit Riots: accused of being unpatriotic, conflicts w sailors for a week</p>

                    <h2>7.13: WW2- MIlitary</h2>
                    <p>US viewed war as fight for surviva of freedom/democracy agfainst fasicst/militarist ideas, later reinforced by reveleations abt Japanese wartime atroicities, Nazi concenrtration camps, and Holocusust</p>
                    <p>Military service gave opporitnttiesi to women/miniroities to improve socioeconomic positions for duration of war, leading to debates over segrwgation</p>
                    <p>Military victorty achieved through Allied cooperation, technological and scientific advances, contirbutions of servicemen and women, campaigns like Pacific island hopping and D-Day invasion, atomic bombs at end of war & debates over morality</p>
                    <p>FDR's Four Freedoms Speech: freedom of speech,worship,from want,from fear. Fight for surivval of democracy against fasicsm. FDR wantred to sway public opinon to aid Allies.</p>
                    <p>Reinforced by Japanese wartime atroticities like Rape of Nanking in China, Nazi concerntaration camps and Holocausts attacking groups including Jews as part of final solution</p>
                    <p>Double V Campaign; victory overseas, victory against segrgation at home</p>
                    <p>Victorty as a result of military cooperation through Atlantic Charter, conerences, D-Day, radar and bombs tehcnology, contirbutions of soldiers</p>
                    <p>European Theater - D-Day invasion. Pacific island hopping. Atomic bombs to expedite end of war, save US lives to force Japan to surrender, send signals and prevent involvement/expansion to USSR</p>
              
                    <h2>7.14: Postwar Diplomacy</h2>
                    <p>War-ravaged conditon of Asia and Europe and dominsant US role in victory through arsenal of democracy and atomic weapons allowed US to become dominant world pwoewr</p>
                    <p>Postwar peace settlements like UN and US plays more role in international affairs</p>
                    <p>Marshall Plan - provided econimic aid to rebuilt Asia and Europe, provide food</p>
                    <p>China: US wanted to limit role played by USSR political influence and supported nationlaists even if cxommunists took over</p>
                    <p>USSR former ally turned nemesis in Cold War</p>
                    <p>Foreign polciy: global capitalist economy based on frtee enterprise to stablizie internaitonally, opposed communism, had commmercial interwests</p>

                    <h2>7.15: Comparison in Period 7</h2>
                    <p>American Identity - developed among diverse and changing popjultion</p>

                    `
            },
            "Unit 8: 1945-1980": {
                tags: ["containment", "proxy wars", "conservatism", "cold war"],
                content: `
                    <h2>8.1: Contextualizing Period 8</h2>
                    <p>US responded to uncertainty by assuming global leaderhip, new omvements for civil rights & postwar eocnomic/demographic changes</p>
                    <p>Containment during 2nd Red Scare</p>

                    <h2>8.2: The Cold War from 1945-1980</h2>
                    <p>Cold War w Soviet Union to limit growth of communist military powerr/ideology, create freemarket global eocnomy, build international security system, develop foreign polcy based on securirty, aid, and eocnomic insituttions</p>
                    <p>Cold War: power struggle between USA (democracy, cpaitalism) vs USSR (authoritarian, communism)</p>
                    <p>Communism - system where propertty publicly owned, strong eocnomic contorls</p>
                    <p>Collective secuirty - UN already in existence allowing for collective action, Iron Curtain, NATO for US and Britain, Warsaw Pact for Soviet-aligned nations</p>
                    <p>Marshall Plan (1948) - provide financial support to democratic nations</p>
                    <p>Truman Doctrine (1947) - prevent commuism by providing military/economic assisntance ($400 mil) to Turkey and Greece, oriigns of containment policy</p>
                    <p>Ecomomic Institutions ike Bretton Woods Conference of 1944 to create new monetary system including World Bank to promite eocnomic growth and International Monetary Fund to regulate currency/trade</p>
                    <p>Domestic implicaitons: military interstate highway for national security, NASA, space race, nuclear arms race, GI Bill for educaitonal/economicoppurtintities, second Red Scare/McCarthyism and Civil RIghts movements</p>
                    <p>IMprotant events: Berlin Blockade/Airlift, Suez Canal, Sputnik & Space Race, Nuclear Artms Race, U2 Spy Plane Icident, Cuban Revolution, Bay of Pigs, Cuban Missile Crissis</p>
                    <p>ended with DETENTE (mutual coeexistance and easing of tenisions) - President Richarcd Nixon achieved diplomacy by visitng China opening it for trade/leverage against Socviets in 1972, and USSR epxanding trtade/economic oppounritiy in 1972. LATAM countries CIA operations like Guatema, Cuba, Chile to topple communist regimes. Ronal Reagan renewed Cold War but concluded by end of decade</p>
                    <p>SALTI (1972) - Stratregic Arms Limitations Talks - dealt w long ragre missiles containing nuclear war heads, heading in right direction</p>
                    
                    <h3>Containment</h3>
                    <p>Foreign policy of US w Soviet during Cold War to prevent spread of communism around world, depathre from WW1, supported by Truman Donctrine to give support to Greece/Turkey to prevent commnuist threats, Marshall Plan helps west europe restores economies and prevent communism</p>
                    <p>George Kennan (1947) - against expansion of Soviet influence around wordl</p>
                    <p>Fall of Chinsa (1949) - communist revolution led by Mao Zedong</p>
                    <p>NSC-68 (1950) - nat security council paper (dept of state & defense)</p>
                    <p>US Troops - around world for international security (ex: Japan & Germany occuppied after WW2, ongoing through entire Cold War)</p>
                    <p>Eisenhower Doctrine (1957)- expansion to Middle East (oil) and streategic locations</p>
                    
                    <h3>Proxy Wars</h3>
                    <p>Wars over communism fought in other countries as proxies</p>
                    <p>Korean War/The Forgotten War - proxy war against North Korea influneced by USSR, not as opposed as Vietnam, podsibiliy of China entering conflict and escalation. Polciy objectibve NSC-68 to protect word from communism, couldn't lose like w China so worked w UN</p>
                
                    <h3>US Presidents (1945-1980)</h3>
                    <p>Truman: Truman Doctrine, Korean War</p>
                    <p>Eisenhower: Eisenhower Doctrine, massive retailiation and brinkmanship, U-2 spy plane, "New Look" military, "military industrial complex", NASA</p>
                    <p>JFK & LBJ: "flexible response", issues w Cuba, Space Race, Vietnam War</p>
                    <p>Nixon: Nixon Doctrine, Detente, Vietnamization, SALT I</p>
                    <p>Carter: SALT II, Soviet invassion of Adfghanistan</p>

                    <h2>8.3: The Red Scare</h2>
                    <p>Policies designed to expose suspected commmunists and contain communism</p>
                    <p>SECOND RED SCARE: identify communists in US society, resukting in a witch hunt bc of Cold War anxiety, growing foreing influence at US</p>
                    <p>HUAC (House Un-American Activities Committee) - 1938, Nixon in 1947, monitooneer suspiocicous behavior and expose indifiduals/employees/citizens/communist ties</p>
                    <p>McCarran Act (195) - targeted communist organization risking internal security, declared unconstititutonal later</p>
                    <p>Rosenburgs - alleged Russia spies who provided atomic secrets to USSR, executed bc of charges of espionage</p>
                    <p>Joseph McCarthy - senator who wanted to expose alleged communists, esp in federsl gov, made accusations and allegation leading to investigation based on suspicions. Targetted US Hoollywood stard. US army, and stzate department. Decline due to political resistance and censured by state/unsubstantiated accusations</p>
                    <p>GI Bill (educaiton/economic opporuntitiy): conformity meant loyalty</p>
                    <p>Public schools went behyond curriculm, added under God to Pledge of Allegiance, other steps to address fears like duck and cover, bomb shelters, NASA, Interstate High national security</p>

                    <h2>8.4: Economy after 1945</h2>
                    <p>Booming private sector (service jobs benefited women, growth of corporations, managers, consumer products, shopping centers) & federal spendning spurred economic growth, growth in GNP (gross national product) indicated prosperity, growing middle class in American and boombing housing led to baby boom</p>
                    <p>Federal Spemnding/Investments: GI Bill creating economic opporunrtity/education like hoemwoenersship, small business creation, college educzagtion through loans. INterstagte Highway System providing national diffense and military-indisutrial complexc, aid education/science</p>
                    <p>Inexpensive access to energy like oil/gas/coal</p>
                    <p>Baby Boom - returning servicemen wanteed to have their own families, GI Bill made college/home-buying affordable increasing demand for housing leading to cookie-cutter housing in subrubs as middle calss families left cities</p>
                    <p>Technological developments like space race, nuclear arms race, agribusiness, TV, computers, credit cards</p>

                    <h3>Migration</h3>
                    <p>Middle class went to suburbs, Americans went South/West to Sun Belt region</p>
                    <p>SUBURBIA: result of social mobility, supported by American ideal and conformity, opposed by rebellipus youth and criticsa of homogenous mass culture (counterculture), discirmination against AA and minoprities like in the GI Bill</p>
                    <p>SUNBELT: region from Virginia to Caifornia, population/political power grew, creation of jobs like military, more schoos/houses/cionsumers, known for entertainment and nicer climate</p>

                    <h2>8.5: Culture After 1945</h2>
                    <p>Clture became homogenous inspiring counterculture challenging conformity by aritsits, youth, intellecutal</p>
                    <p>Traditional gender roles w men as breadiwnners/providers andmen made womes (lack individuality)</p>
                    <p>Religion: Christinaityt and Judeo-Chrisitian traditions even in Pledge of ALlegeiance</p>
                    <p>Mass culture/conformity in Sports/entertainm,ent (Little Leagure, baselbsall/football/basketball, Boy/GirlS couts, drive in movies and car, Disneyland, rocknrooll, rhyhem/blues like Bealtes, food like mcdownlads and tv dinners. TV/media spread American culture/values</p>
                    <p>CONSUMERISM: shopping centers, credit cards, advertising, tupperware parties</p>
                    <p>POLIITCS: foreign policiy focused on contianment, domestic disgarements over racism, poverty, and government</p>
                    <p>Challenged by artists, intellectuals talking abt conforiity, consumer culture, ciriticizeing lack of social spenidng, rebellious youth lead to Beatniks and fise of counter-culture and Hippies valuing spontaneity</p>
                    <p>Civil rights activists notr included in this version of Americna Dream</p>

                    <h2>8.6: Early Steps in the Civil Rights MOvement (1940s and 1950s)</h2>
                    <p>Some success in edning segregation but slow as result of civil rights activists seeking to fulfill Reconsutruction Era promises, branches of federasl gov degegrefgates armed servives and Brown v Board of Ed to promote greater racisal ewuality</p>
                    <p>Desegregation in military including Philip Randolph's proposed march to attempt to end disocimination in defense industries (Executive Order 8802 as a result seggregastiginzing millitary)</p>
                    <p>Double V Campaign in WW2 fought Nazi while fighting Jim Crow at home</p>
                    <p>Executive Order 9982 desegregated armed forced so milktary is red white and blue</p>
                    <p>Reconstruction wass last time Congress protected AAs by w help of activists like NAACP, Marsdhall, Rosa Parks, MLK, SCLC, Black Pnathers, Black Power Movement, etc Legislative Branch erstiablished Cviil Rights Comission and granted powers protecting gvoting rights</p>

                    <h3>Brown v Board of Education (1954)</h3>
                    <p>Context: plessy v ferguson (1896) established seperaste but ewqual legalizing segregsation, but this was challenged nby activists like Thurgood Marshall and NAACP</p>
                    <p>Overturned PLessy, declared racially segwergated schools unewual, school segregsation not onoly in South, enforcement took 20+ yrs</p>
                    <p>Little Rock Nine (1957) - southern oppositipon conitnued and National Guard used by Arkansas governer to prevent 9 AA students from entering school, Eisenhower upheld federal authroity by protecting w federal troops</p>

                    <h3>Montgometry Bus Boycott (1955-1956)</h3>
                    <p>Public transport required blacks to give up seats to whites, but activist Rosa Parms stood up for herselves/others by remaining seats but got arrested, MLK led the way w protest/boycott/nonviolent movement/media to make change</p>

                    <h2>8.7: America as a World Power</h2>
                    <p>Cold EWar extended to Latin America, US debated nuclear/military-industyrtial complex, post war deoclonization and African/Middle East nationlist movements</p>

                    <h3>Latin America</h3>
                    <p>Non communist gov w US invovlvement bc fear of Soviet infleucnce</p>
                    <p>Guatemala w CIA sponsored coup and United Fruit Compnay in 1954. Cuba w Castro taking over, Bay of Pigs, Missile Crisis. Chile w Salvador Allende killed in CIA backed coup in 1973</p>
                    <p>Peace Corps - volunteer org created by US to help nation building and improve reputation</p>
                    <p>Alliance for Progreess (1961) provide eocnomic aid to region like Latin Americsan Marshall plan w idea that poverty breeds communism (schoo/hospital infradsturcre, fighting disesase, assisitng duting natural disaster)></p>

                    <h3>Decolonization & Nationalist Movements in Africa and Middle East</h3>
                    <p>Decolonization & National movements in Africa/Middle East w Peace Corps fighting for allies, MLK believe ppl more important than things, Europe had tp rebuild ecoomies, self determination but pssibility of commuist expansion leading to US sending aid packafes, tehcnical assistance, andmiilotary interevenetion</p>
                    <p>Egypt independent in 1952, leader Gamal Abdul Nasser nationalist professing socialist ideas known as Arab socialism, Suez Crisis 1956 w Eisenhower Doctrine in 1957, OPEC in 1960 and embargo in 1973, Middle Easy 1973 Yom Kippur War led to assaassintation of Egyptian President, Iran revolution in 1979 and hostage criss</p>

                    <h2>8.8: Vietname War</h2>
                    <p>President Truman (French War w Vietnmam, Truman Doctrine), President Eisenhower (Dien Bien Phu, Geneva Accords, SEATO), President Kennedy (Diem Out in South Vietnam, Advisors sent to South Vietnam), President Lyndon Johnson (Gulf on Tonkin INcident, Operation Rolling Thunder, Tet Offensive), President NIxon (Bomb Ho Chi Minh Trail, Paris Peace Accords)</p>
                    <p>US supported US, South Vietnam, and SEATO while Soviet supported Soviet Union and North Vietnam</p>
                    <p>Separation of powers/checks and balances</p>
                    <h3>Gulf of Tonkin Incident</h3>
                    <p>Incident in August 2, 1964. USS Maddox. Prompted request by LBJ for additional war power.</p>
                    <p>Gulf of Tonkin Reoslution shifted all power to President not Congress</p>
                    <p>War Powers Resoltuion attempts to balance power agsain between Congress and President</p>

                    <h2>8.9: Great Socioety</h2>
                    <p>WATTS RIOTS: 1965 riots 6 days 34 dead 1032 injured. DETROIT RTIOTS (1967) w 5 days 43 dead stores burned and looted. Similar riots in many urban areas</p>
                    <p>Kerner Commission invesitgsates notes from president johnson, national advisory commission on civil disorders</p>

                    <h2>8.10: African American Civil Rights Movement (1960s)</h2>
                    <p>Groups repsonded to calls for expansion of civil rights, like activists/leaders inclduing MLK jr combating racial disicmirnation through stratrgies like nonviolence and legsl challenges</p>
                    <p>Legal Cjallenges lioke NAACP, CORE, SCLC, SNCC, and Blank panther partyy all civil rights orgnaizaitons</p>
                    <p>Greensboro Sit-in: Feb 1960 w 4 A&T students from NC at segregatyed lunch counter, Student Non-Violent Coordinating Committee formed APirl 1960<, Atlanta Student Movement throug marches and sitins/p>

                    <h2>8.11: Civil Rights MOvement Expands</h2>
                    <p>Struggle for equality for AAs, LGBTQ, women, Asian and Lation americans, american indians</p>
                    <p>LGBTQ: gay and lesbian rights like Stonewall Inn where gay bar raiders, Harvey Milk gay officilal elected but assisnated</p>
                    <p>NATIVES: Americasn Indian Movement (AIM) protesting racism, poverty, andf treaties (Wounded Knee - 71 day occuptation). Indians Of All Tribes - occuptaiton of LAcatraz claimed island based on Treaty of Ft Laramie</p>
                    <p>WOMEN: Equal Rights Amendment (ERA) w/ Alice Pols, ratification failed by 3 states</p>

                    <h2>8.12: Youth Culture of 1960s</h2>
                    <p>COUNTER CULTURE: antiwar protests, music/media/arts, apposing viewpoints in student movements (Young Americans for Freedom more conservative supporting US )victory in vitnam and limited gov, vs Students for a Democratic Society more liberal and anti-war w eocnomic reconstructin adn support civil rights movement</p>

                    <h2>8.13: Environment and Natural Resources</h2>
                    <p>Hydrogen bomb testing, oil spills, insecticide pollution, fires, endangered species, nuclear accident</p>
                    <p>Increased regulation/awareness like in Earth Day, Envirpnmetntal Protection Agency, Clean Air Act, CLean Warter Act, Endanfgered Species Act</p>

                    <h2>8.14: Society in Transition</h2>
                    <p>WATERGATE SCANDAL - scandal involving 1972 breakin at watergate complex followed by Richard Nixon coverup, uncovring dirty tricks and illegsal surviveleance used against political opponents</p>
                    <p>Energy Crisis - OPEC oil embargo in 1973, shortafges and high prices continuing throughotu decades</p>
                    <p>EConomic Stagflation causied by rising unemployment and inflstion and lower GFDP/eocnomic growth</p>

                    <h2>8.15: Conitnuity and Chanfge in Period 8</h2>
                    `
            },
            "Unit 9: 1980-present":{
                tags: ["Reagan", "War on Terror", "Innovation"],
                content:    `
                    <h2>9.1: Contextualizing Period 9</h2>
                    <p>1980-present: end of Cold War, tehcnology asdvsancmenets, conservagtive movement, 9/11 and War on Terroism</p>
                    <p>Cold War, political changes, liberal legislative approach, rise of conservatives, etc</p>

                    <h2>9.2: Reagan and Conservatism</h2>
                    <p>Reagan's victory in presidential election of 1980 represented important milestone, allowing conservatives to enact significant tax cuts, and cotniue deregulation of many industries. Conservatives argued libelera p-rograms counterproductive in fihting poverty/stimulating economy leading to effforts to reduce gov and maintain conservatiove rtraditoinal social values</p>    
                    <p>REAGAN COALITION: free market eocomies, new conservatism, relgious conservations/moral maojirty, disafected democratds, military strength to oppose communism</p>
                    <p>ELECTION OF 1980: Conterxt wass stagflation, iran and energy crisis during Carter Presidency and 2 new cnaididatres was Jimmy Carter democratic incumbent vs Ronald Reagan rpeublican nominee (Rewafgon won)</p>

                    <h2>9.3: The End of Cold War</h2>
                    <p>Gorbachev Soviet Reforms - new general secretary and nuclear arms reductions discussion w Reagan/Bush/US. Collapse of Soviet bc of Poland Solidarity movmenet, Gorbachev allowing national soverignty of Warsaw Pact nations, fall of Berlin Wall, end of Soviet-Afrghan War as Taliban came to powrr, and forming of the Comonwealth of Independent States</p>
             
                    <h2>9.4: A Changing Economy</h2>
                    <p>balahabahala leq practice</p>
                    
                    <h2>9.5: Migration & Immigration in 1990s and 2000s</h2>
                    <p>Rise of Sunbelt after WW2 in search of jobs, lower taxes, and better climate w electronics in Califronia, military in Texas, and aerospace in Flordia and TRexas</p>
                    <p>Political power shifting to fsast growing regions</p>
                    <p>Less expensive to do work in Sunbelt, ppl moving away from Rustbelt which were once industrailized but went into decline after deinudustrialization</p>
                    <p>BILL CLINTON: Baby Boomer president & New Democrat forming Dmeocratic Leadership Council to steer away from tradiitopnal anti-business policiesa and instead towards pro-growth, strong defense and anti-crime, focused on economy and majority in both houses of CXongress</p>
                    <p>MIGRATION/IMMIGRATION: wider background, 1965 Immigration Reform Act eliminating national orginings as admission criteria, Laitons/Asians largest groups but also from Africa/Middle East/Russia/East Europe (ex: refugees from Vietnam War)</p>
                    <p>Globalization: facilitated imigration and flow of ppl, capital, and goods, as well as multinational corporations, World Trade Orgnaization, internet, tehcnology advancements, Obama dream act to undocmumented youth but felll to republicams bc of anxirtyies against undocumented</p>

                    <h2>9.6: Chsallenges of 21st Centruy</h2>
                    <p>Attzacks on World Trade Center, Pnegtagon leadeing to military efforts agsainst twerroism and conflict in Arghanistan/Iraq which imporved secuirtt in US but raised quesitons abt human rights</p>
                    <p>200 Presidential Eelection - Bush vs Al Gore, Bush called himself a uniter not a divider, most contested election</p>
                    <p>BUSH: Tax cuts through Ecomnomic Growth and Tax Relief Act of 2001, Bush said little abt forieng policy</p>
                    <p>Al Qaeda terrotirests hijack jets flying them into World RTrade Center, Pentagon, and lasdt one fialed but aimed at White House/US Capitol</p>
                    <p>War on Tewrror proclaimed by Bush and vowed to casrry battle to Al Qaeda, invaded Afghanistan and Taliban regime, invaded Ireaq through USA Patritot Act giving permission to monitor citizens</p>
                    <p>BUSH DOCTIRNE - US rgiht to asct in self defense, singling out iran, North Koprea, and Iraq as axis of evil, wanted to spread democratizing across Middle East. UN invaded Iraq and compell compliance through Force w/ Saddam Hussein going into hiding. Eventally US ceder power to interim Iraqi gov but tensions buetween Sunni Muslims and majority Shia gov</p>
                    <p>Bush releacted for another term, suspected immigrants held w/o habeouas corpus</p>
                    <p>Bush ciritizced as FEMA inept in dealing w Hurricane Katrina, electing Obama</p>
                    <p>OBAMA - ambitious econiomic stimuulus package to help economy, draw down war in Iraq, refocus American military efforts in Afghanistan,reform insulandce, regulate Wall Streety, passed recovery and reinvestment act, obamacare, largely successful despite republican oppisitioon</p>
                    <p>TEA PARTY: republicans/ppl who refused to consiuder any doemcratic legislature, executive autority like envionmental protection agency and clean power plan combatting greenhouse gases</p>

                    <h2>9.7: Causation in Period 9</h2>
                    <p>Stalmate and not able to control Middle East despite Obama's preisdency</p>
                    <p>Great Recession</p>
             
                    `
            }
        }
    },
    "AP Psychology": {
        units: {
            "Unit 1: How do we explain and measure behavior?": {
                tags: ["psychoanalysis", "behaviorism", "Sigmund Freud", "Biological", "Modern Perspectives", "Biopsychosocial", "Cognitive", "Humanism"],
                content: `
                    <h2>1.1: Intro & History</h2>
                    <h3>The Modern Perspectives (ordered from nature to nurture, numbered in order from past/present)</h3>
                    <div>
                        <div>
                            <p><strong>Nature</strong></p>
                            <p>Psychology affected by nature/genetics</p>
                        </div>
                        <div>
                            <p><strong>Nurture</strong></p>
                            <p>Psychology affected by environment/society/experiences</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><strong>Evolutionary</strong></p>
                            <p>How natural selection of traits promoted gene survival, humans desire social interaction b/c of need for survival</p>
                        </div>
                        <div>
                            <p><strong>Biological (5)</strong></p>
                            <p>Brain, body chemistry, genetics</p>
                        </div>
                        <div>
                            <p><strong>Psychodynamic/Psychoanalysis (1)</strong></p>
                            <p>Sigmund Freud</p>
                            <p>Unconscious conflicts, early childhood experiences (nurture), innate sex&aggression (nature)</p>
                        </div>
                        <div>
                            <p><strong>Cognitive (4)</strong></p>
                            <p>Thinking and decision making</p>
                        </div>
                        <div>
                            <p><strong>Biopsychosocial (6/modern-day)</strong></p>
                            <p>Biology, Psychology, Society</p>
                            <p>Equally nature vs nurture</p>
                            <p>Affected by biological predispositions/mutations, psychological influences from emotions/fears/etc, society's social-cultural influences from people's expectations</p>
                        </div>
                        <div>
                            <p><strong>Humanism (3)</strong></p>
                            <p>Maslow & Rogers</p>
                            <p>You are inherently good, you have free will, you should close the gap between your real/ideal self through <strong>self-actualization</strong>, you deserve unconditional positive regard</p>
                        </div>
                        <div>
                            <p><strong>Behaviorism (2)</strong></p>
                            <p>Watson&Skinner</p>
                            <p>Observable actions/behavior, learning, environment, rewards/punishment</p>
                        </div>
                        <div>
                            <p><strong>Social-Cultural</strong></p>
                            <p>How behavior/thinking vary across situations/cultures</p>
                        </div>
                    </div>

                    <ul>
                        <li><strong>Industrial/organization field of psychology</strong> - analyze efficiency of businesses in hiring, training, and management</li>
                        <li><strong>Introspection</strong> - observing conscious experiences</li>
                        <li><strong>WEIRD</strong>: western, educated, industrialized, rich, democratic countries which is what psychology is based on (only 12% of people)</li>
                    </ul>

                    <h2>1.2: Research Methods</h2>
                    <h3>Scientific Method / Vocab</h3>
                    <ul>
                        <li><strong>Hypothesis</strong>- testable prediction often implied by a theory</li>
                        <li><strong>Operational Definition</strong>- carefully worded definition of procedures used and how its defined</li>
                        <li><strong>Replication</strong>- Repeating idea of research study w diff participants in diff situations to see how reproducible findings are</li>
                        <li><strong>Self-Report Bias</strong>- bias when people report their behavior inaccurately</li>
                        <li><strong>Population</strong>: all those in group being studied, smaller samples drawn from the population (not the country's population)</li>
                        <li><strong>Random Sample</strong>: sample fairly representing population bc each member has equal chance of inclusion</li>
                    </ul>

                    <h3>Correlation (NOT CAUSATION)</h3>
                    <ul>
                        <li>Measure of extent to which 2 factors vary together and how well they predict each other</li>
                        <li><strong>Correlation Coefficient:</strong> statistical index of relationship between 2 things from -1.00 to +1.00 with 0 meaning no relationshop</li>
                        <li>Scatterplot cluster of dots, w slope of points suggesting direction and amt of scatter suggests correlation/no correlation</li>
                        <li>Illusory correlation - perceiving relationship when there's none (or thinking relationship is stronger than it is)</li>
                        <li>Problems: directionality (difficulty determining what variable causes other in correlational study), third variable problem (influences both variables making them seem directly related)</li>
                    </ul>

                    <h3>Types of Studies</h3>
                    <div>
                        <div>
                            <p><strong>Case Study</strong></p>
                            <p>Non-experimental technique where a individual/group is studied in depth to reveal universal principles</p>
                        </div>
                        <div>
                            <p><strong>Survey</strong></p>
                            <p>Non-experimental technique to obtain attribute/behaviors of a group by questioning representative random sample</p>
                        </div>
                        <div>
                            <p><strong>Naturalistic Observation</strong></p>
                            <p>Non-experimental technique observing/recording behavior in naturally occuring situation w/o trying to manipulate or control situation</p>
                        </div>
                        <div>  
                            <p><strong>Cross-Sectional Study</strong></p>
                            <p>Research comparing people of different ages at the same point in time</p>
                        </div>
                        <div>
                            <p><strong>Longitudinal Study</strong></p>
                            <p>Research following and retesting the same people over time</p>
                        </div>
                        <div>
                            <p><strong>Meta-Analysis</strong></p>
                            <p>Statistical procedure analyzing results of multiple studies for overall conclusion</p>
                        </div>
                    </div>

                    <h3>Experiment</h3>
                    <div>
                        <p>Ideal way since demonstrates causation</p>
                        <p>Random selection (sample selected randomly from population) and then random assignment (sample sorted into control/treatment groups randomly)</p>
                        <p>Research where 1 or more factors/independent variables are manipulated to observe effect on dependent variable through random assignment of participants and controlling of other factors</p>
                        <p>Single-blind procedure: research participants are blind about whehter they are in treatment or placebo group</p>
                        <p>Double-blind procedure: research participants and staff are both blind about whether groups are treatment or placebo used commonly in drug-evaluation studies to avoid EXPERIMENTER BIAS confirming own beliefs</p>
                        <p>Placebo Effect - experimental results caused only by expectations that an agent is active even if its not</p>
                        <p><strong>PARTS OF EXPERIMENT</strong></p>
                        <ul>
                            <li>Participants go through random assignment to Experimental group (group exposed to treatment/independent variable) vs Control Group (group not exposed to treatment as comparison for evaluating treatment group)</li>
                            <li>Convenience sampling - non-random sampling where participants selected based on access/availability</li>
                        </ul>
                    </div>

                    <h3>Ethics</h3>
                    <p><strong>Debriefing</strong>: post experimental explanation of study, purpose, and deceptions</p>
                    <p><strong>Informed consent or assent</strong>: consent giving participatns enough info to let them choose to particpate, assent if minor/someone not legally allowed to give consent is given approparite info but parent/guardian also approves</p>
                    <p><strong>Peer/Institutional Review</strong>: Peer review of theory and study content itself by scientific experts, institutional review by committee to ensure ethicality</p>
                    <p><strong>Confederate</strong>- someone pretending to be a participant even tho really influencing participants as part of the experiment</p>
                    <p><strong>HUMAN RESEARCH:</strong> Institutioanl Research Board (IRB) needed for ethics do no harm to experiment subjects but pain is allowed, confidentiality, right to withdraw whcih shd also be informed</p>
                    <p><strong>ANIMAL RESEARCH:</strong> IRB also, acquired legally, clear scientific purpose, humane treatment w food, shelter, least suffeing feasible but u can even kill them under certain circumstances</p>


                    <h3>Statistics</h3>
                    <ul>
                        <li><strong>Skew</strong>: positive if most scores are low w a few high outliers so tail is streched to right w mean>median, negative if most scores are high w few low outliers so tail streched to left w mean<median</li>
                        <li>Regression towards mean - extreme/unusual scores fall back and regress towards average</li>
                        <li>Bimodal distribution - freq distirbution w 2 distincit peaks so 2 populagtions/underlying processes in data</li>
                        <li>Quantitative is numerical data, Qualitative is in-depth narrative data</li>
                        <li><strong>Effect Sizes</strong>: strength of relationship between 2 variables, w larger effect size meaning stronger relationship</li>
                        <li><strong>Standard Deviation</strong>: how much scores vary around mean score</li>
                        <li>Statistical significance is how likely result occured by chance</li>
                        <li>Generalizability is extent results can be applied to other people</li>
                        <li><strong>Normal Distribution</strong> 68% within 1std of mean, 95% within 2std</li>
                    </ul>

                    <h3>Biases</h3>
                    <div>
                        <div>
                            <p><strong>Hindsight Bias</strong></p>
                            <p>Tendency to believe after learning outcome that you would have foreseen it</p>
                            <p>I-knew-it-all-along phenomenon</p>
                        </div>
                        <div>
                            <p><strong>Overconfidence</strong></p>
                            <p>Tendency to be more confident than correct and overestimate accuracy of our beliefs/judgements</p>
                        </div>
                        <div>
                            <p><strong>False Consensus Effect</strong></p>
                            <p>You overestimate and think everyone thinks the same way you do and youe opinions are normal/common</p>
                        </div>
                        <div>
                            <p><strong>Confirmation Bias</strong></p>
                            <p>Search for info that supports your beliefs</p>
                        </div>
                        <div>
                            <p><strong>Self-Serving Bias</strong></p>
                            <p>Take credit for success but not failures</p>
                        </div>
                        <div>
                            <p><strong>Ingroup Bias</strong></p>
                            <p>Tendency to favor your own group and say the group you belong to is good</p>
                            <p>Ingroup (group you belong to) vs outgroup (group you don't belong to)</p>
                        </div>
                        <div>
                            <p><strong>Social Desirability Bias</strong></p>
                            <p>Publicly change answer/opinion to fix it based on that way they think researcher expects/wishes</p>
                        </div>
                    </div>

                    <h3>Development</h3>
                    <p><strong>Attachment</strong>: emotional tie w others shown in young children who seek closeness to caregivers and distress when separated</p>
                    <p><strong>Harry Harlow</strong>: psychologist known for research on attachment w monkeys demonstrating comfort and physical contact besaides only food is important in animal bonds. Experimented on origins of attachment/love/emotional closeness and bonding through 2 monkey moms, one giving food and 1 giving contact comfort and the bond was shown to be about contact comfort not food, important at WW2 time since people didn't care enough for kids. However, study was unethical since isolation damaged them mentally and phtsically.</p>
                `
            },
            "Unit 2: Why do I act the way I do?": {
                tags: ["identity", "psychoanalysis", "id", "Freud"],
                content: `
                    <h2>2.1: Identity</h2>
                    <p><strong>Personality</strong>: an individual's pattern of thinking, feeling, and acting</p>

                    <h3>Psychoanalytic Perspective (Freud)</h3>
                    <p>Focuses on unconsciouns mind and childhood experiences and sex and aggression</p>
                    <p><strong>Free association</strong>: method of exploring unconscious where person relaxes and says whatever comes to mind</p>
                    <p><strong>Unconscious</strong>: unconscious unacceptable thoughts, feelings, and memories that we are unaware of</p>
                    <div>
                        <div>
                            <p><strong>Id</strong></p>
                            <p>Unconscious psychic energy satisfying sex & aggression and immediate please</p>
                        </div>
                        <div>
                            <p><strong>Superego</strong></p>
                            <p>Partly conscious mind representing internal ideals and judgement/conscience for future</p>
                        </div>
                        <div>
                            <p><strong>Ego</strong></p>
                            <p>Partly conscious executive personality balancing id, superego, and reality satisying id's desire in a reasonable way.</p>
                        </div>
                    </div>

                    <p><strong>Freudian Defense Mechanisms</strong></p>
                    <p>Ego's protective methods of reducing anxiety by unconsciously distorting reality</p>
                    <div>
                        <div>
                            <p><strong>Repression</strong></p>
                            <p>Ignore negative thoughts/feelings/memories from consciousness</p>
                        </div>
                        <div>
                            <p><strong>Regression</strong></p>
                            <p>Revert to earlier stage of development (like childhood) when faced w stress/anxiety</p>
                        </div>
                        <div>
                            <p><strong>Reaction Foramtion</strong></p>
                            <p>Behaving in a way opposite to true feelings/impulses to hide them</p>
                        </div>
                        <div>
                            <p><strong>Projection</strong></p>
                            <p>Attributing unwanted thoughts/feelings/motives to someone else</p>
                        </div>
                        <div>
                            <p><strong>Rationalization</strong></p>
                            <p>Creating logical explanation to justify guilty or shameful thoughts/feelings</p>
                        </div>
                        <div>
                            <p><strong>Displacement</strong></p>
                            <p>Redirecting emotions from real source to safer/less threatening target</p>
                        </div>
                        <div>
                            <p><strong>Denial</strong></p>
                            <p>Refusing to accept reality/facts bc too uncomfortable or distressing to face</p>
                        </div>
                        <div>
                            <p><strong>Sublimation</strong></p>
                            <p>Channeling unacceptable impulses/feelings into socially acceptable ones</p>
                        </div>
                    </div>

                    <p><strong>Psychoanalytic Personality Tests (Projective Tests)</strong></p>
                    <div>
                        <div>
                            <p><strong>Projective Test</strong></p>
                            <p>Provide ambiguous images to trigger projecting inner thoguhts and explore unconscious mind</p>
                        </div>
                        <div>
                            <p><strong>Thematic Apperception Test (TAT)</strong></p>
                            <p>Projective test where ppl express inner feelings/interests through stories they make up about ambiguous scenes</p>
                        </div>
                        <div>
                            <p><strong>Rorschach Inkblot Test</strong></p>
                            <p>Projective test seeking to identify people's inner feelings by analyzing how they interpret inkblots</p>
                        </div>
                    </div>

                    <h3>Humanistic Perspective (Maslow and Rogers)</h3>
                    <p><strong>Self-Actualization:</strong> closing gap between real and ideal self</p>
                    <p><strong>Maslow's Hierarchy of Needs</strong>: physiological needs like food/water, then safety needs like nurture/money, then belonginess/love needs like acceptance/affection, then esteem needs like respect, then self-actualization</p>
                    <p><strong>Unconditional positive regard:</strong> caring non-judgemental attitude helping develope selfawareness and selfacceptance</p>
                    
                    <h3>Trait Perspective</h3>
                    <p><strong>Trait:</strong> characteristic behavior pattern or disposition to feel/act certain ways according to self and peer reports inventories</p>
                    <p><strong>Inventories/Tests</strong></p>
                    <div>
                        <div>
                            <p><strong>Factor Analysis</strong></p>
                            <p>Identifying clusters of related items/facters to identify dimensions of performance underlying total score</p>
                        </div>
                        <div>
                            <p><strong>Personality Inventory</strong></p>
                            <p>Questionnaire w/ true/false or agree/disagree items where people respond to assess selected personality traits and guage wide range of feelings/behaviors</p>
                        </div>
                        <div>
                            <p><strong>Id</strong></p>
                            <p>Unconscious psychic energy satisfying sex & aggression and immediate please</p>
                        </div>
                        <div>
                            <p><strong>Minnesota Multiphasic Personality Inventory (MMPI)</strong></p>
                            <p>Most widely used personality test used to identify emotional disorders and other purposes</p>
                        </div>
                        <div>
                            <p><strong>Big Five Personality Factors / Five Factor Model</strong></p>
                            <p>OCEAN: openness (curiosity/imagination/openness to experience over routine), conscientousness (selfdiscipline/organization/achievement), extraversion (socialness), agreeableness (cooperation/compassion), neuroticism (emotional stability/anxiety) describing personality</p>
                        </div>
                    </div>

                    <h3>Social-Cognitive Perspective (Bandura)</h3>
                    <p>View of Behavior as influenced by interaction between traits, thinking, and social context</p>
                    <p><strong>Reciprocal determinism:</strong> interacting influences of behavior, internal cognition, and environment all connected</p>
                    <div>
                        <div>
                            <p><strong>External Locus of Control</strong></p>
                            <p>Perception that outside forces beyond personal control determine our fate</p>
                            <p>Learned Helplessness - hopelessness/pressure & feeling unable to avoid repeated aversive events</p>
                        </div>
                        <div>
                            <p><strong>Internal Locus of Control</strong></p>
                            <p>Perception that we control our own fate</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><strong>High Self-Efficacy</strong></p>
                            <p>Person's strong belief in their ability to succeed at a specific test/situation</p>
                        </div>
                        <div>
                            <p><strong>Low Self-Efficacy</strong></p>
                            <p>Person's belief they are not capable at succeeding at a specific task or situation</p>
                        </div>
                    </div>

                    <h3>Social-Emotional Development</h3>
                    <p><strong>Adverse Childhood Experiences (ACEs)</strong>: potentially traumatic/stressful event occuring before 18 like abuse/neglect harming development and increasing psychological risk later in life</p>
                    <p><strong>Ecological Systems Theory</strong>: how environment influences development</p>
                    <div>
                        <div>
                            <p><strong>Microsystem</strong></p>
                            <p>Your daily world & immediate environment (ex: family, school, close friends)</p>
                        </div>
                        <div>
                            <p><strong>Mesosystem</strong></p>
                            <p>Connections between worlds and between different microsystems (ex: relationship between home/school, family&friend's families, community events)</p>
                        </div>
                        <div>
                            <p><strong>Exosystem</strong></p>
                            <p>Bigger community and external environment indirectly influencing development (ex: neighborhood, parent's workplace, extended family, gov policies)</p>
                        </div>
                        <div>
                            <p><strong>Macrosystem</strong></p>
                            <p>Wider world and broader sociocultural influences shaping individual experiences and influences children's behavior and parent styles (ex: economic conditions, culture/traditions, media, current events, social norms)</p>
                        </div>
                        <div>
                            <p><strong>Chronosystem</strong></p>
                            <p>Changes over time reflecting changes/traditions in life (ex: moving, divorce, family changes, historical events, societal changes)</p>
                        </div>
                    </div>
                    <p><strong>Identity Statuses Theory (James Marcia)</strong>: identity development based on exploration and commital</p>
                    <div>
                        <div>
                            <p><strong>Achievement</strong></p>
                            <p>High exploration, high commitment</p>
                            <p>Most stable identity</p>
                        </div>
                        <div>
                            <p><strong>Diffusion</strong></p>
                            <p>No/low exploration, no/low commitment</p>
                            <p>Least stable identity</p>
                        </div>
                        <div>
                            <p><strong>Foreclosure</strong></p>
                            <p>No/low exploration, high committment</p>
                            <p>Usually adopting other's experiences without forming/exploring their own</p>
                        </div>
                        <div>
                            <p><strong>Moratorium</strong></p>
                            <p>High exploration, no commitment</p>
                            <p>Exploring themselves but unsure/uncommitted</p>
                        </div>
                    </div>
                    <p><strong>Vygotsky's Zone of Proximal Development</strong>: range of tasks kid can't do alone but can do w help from a more skilled person (gap between what they can do and what they can achieve w guidance)</p>
                    <p><strong>Parenting Styles</strong></p>
                    <div>
                        <div>
                            <p><strong>Authoritarian</strong></p>
                            <p>High control low support</p>
                            <p>Strict controlling parents expecting obedience and setting many rules w little warmth to child's needs, lots of punishment</p>
                        </div>
                        <div>
                            <p><strong>Permissive/Indulgent</strong></p>
                            <p>Low control high support</p>
                            <p>Warm/loving parents w few rules/limits allowing lots of freedom w little discipline</p>
                        </div>
                        <div>
                            <p><strong>Authoritative</strong></p>
                            <p>High control high support</p>
                            <p>Warm/supportive yet firm w clear rules/expectiations but still supportive and encouraging independcen</p>
                        </div>
                        <div>
                            <p><strong>Uninvolved/Neglectful</strong></p>
                            <p>Low support low control</p>
                            <p>Too busy to come up with rules or give love</p>
                        </div>
                    </div>

                    <h3>Erickson's Stages of Social Development</h3>
                    <p>He was a psychodynamic psychologist</p>
                    <p>Explains how social/emotional development occurs across life stages w/ conflicts</p>
                    <div>
                        <div>
                            <p><strong>Trust vs Mistrust (0-1)</strong></p>
                            <p>Is the world predictable and supportive?</p>
                        </div>
                        <div>
                            <p><strong>Autonomy vs Shame/Doubt (2-3)</strong></p>
                            <p>Am I self-sufficient or must I rely on others?</p>
                        </div>
                        <div>
                            <p><strong>Initiative vs Guilt (3-6)</strong></p>
                            <p>Am I good or bad? Will I feel guilty for trying new things?</p>
                        </div>
                        <div>
                            <p><strong>Industry vs Inferiority (7-12)</strong></p>
                            <p>Am I successful or am I worthless? How can I function in comparison to others?</p>
                        </div>
                        <div>
                            <p><strong>Identity vs Public Confession/Role Confusion (12-18)</strong></p>
                            <p>Who am I? What is my place in society?</p>
                        </div>
                        <div>
                            <p><strong>Intimacy vs Isolation (20-30)</strong></p>
                            <p>Am I able to become close with others, but still maintain my sense of self?</p>
                        </div>
                        <div>
                            <p><strong>Generativity vs Stagnation (30-50)</strong></p>
                            <p>Am I able to give love and attention beyond myself? Have I nurtured the next generation?</p>
                        </div>
                        <div>
                            <p><strong>Integrity vs Despair (50+)</strong></p>
                            <p>How do I deal with the end of my career? Am I still useful? How do I cope with loss?</p>
                        </div>
                    </div>

                    <h3>Sex, Gender, Sexuality</h3>
                    <ul>
                        <li>Sex is defined by biology, gender is defined by one's experience, sexuality is based on attraction</li>
                        <li>Gender identity is subjective sense of gender</li>
                        <li>Gender expression is how gender is displayed</li>
                        <li>Cisgender is when biology & psychology is male or female</li>
                        <li>Dysphoria is discomfort between biology/psychology</li>
                        <li>Gender nonconforming - behavior not fitting your gender</li>
                        <li>Androgynous - gender neutral</li>
                        <li>Pansexual - attraction to all sexes</li>
                    </ul>

                    <h2>2.2: Social Psych</h2>
                    <p>Scientific study of how we think about, influence, and relate to each other</p>
                    <h3>Experiments</h3>
                    <p><strong>Zimbardo's Prison Experiment</strong>: unethical study where students acts as guards in a fake prison showing how powerful structural roles shapes behavior</p>
                    <p><strong>Asch's Conformity Experiment</strong>: particpants judged length of lines in a group and actors gave wrong answer which participants conformed (adjusted behavior to group, more conformity if larger group size, more unanimity, cultural nroms/insecruity/status also affects conformity) to bc of social pressure to fit in</p>
                    <p><strong>Milgram's Obedience Experiement</strong>: study where particiapnts instructed to give electrical shocks, and even when seemed dangerous people continured bc obedeient/complaint to authority past own judgement. Obedience increased by autority legitimacy/phyiscal closeness of authroity vs victims, role models for defiance</p>

                    <h3>Social Influence</h3>
                    <div>
                        <div>
                            <p><strong>Normative Social Influence</strong></p>
                            <p>influence bc of person's desire to gain approva or avoid disapproval</p>
                        </div>
                        <div>
                            <p><strong>Informational Social Influence</strong></p>
                            <p>influence bc of person's willingness to accept others' opinions about reality</p>
                        </div>
                    </div>

                    <h3>Group Influence</h3>
                    <div>
                        <div>
                            <p><strong>Social Facilitation</strong></p>
                            <p>Presence of other improves performance on things we're good at but worsens performance on things we're bad at</p>
                        </div>
                        <div>
                            <p><strong>Social Loafing</strong></p>
                            <p>People in group exert less effort towards goal than versus if they were by themselves</p>
                        </div>
                        <div>
                            <p><strong>Deindividuation</strong></p>
                            <p>Loss of self-awareness in groups bc of arousal/anoymity </p>
                        </div>
                        <div>
                            <p><strong>Group Polarization</strong></p>
                            <p>Enhancement of group's opinions bc of discussion</p>
                        </div>
                        <div>
                            <p><strong>Groupthink</strong></p>
                            <p>Thinkining/opinions based on desire for harmony in decision making in a group</p>
                        </div>
                    </div>

                    <h3>Biases</h3>
                    <ul>
                        <li><strong>Self-Serving Bias</strong>: Readiness to perceive ourselves favorably</li>
                        <li><strong>Actor/observer Bias</strong>: ppl in a situation blame behavior on external reasons, but outside ppl blame behavior to internal causes contirbuting to the fundamental attirbution error (our explanations for other ppls behaviro)</li>
                        <li><strong>Ingroup Bias</strong>: favor own group</li>
                        <li><strong>Outgroup Bias</strong>: view other groups as similiatr to each other and less favorable than ur own</li>
                    </ul>
                    
                    <h3>Effects/THeories </h3>
                    <p><strong>Mere Exposure Effect</strong>: tendency for repeated exposure to novel stimuli increasing our liking of them</p>
                    <p><strong>Bystander Effect</strong>: tendency for any given bystander to be less likely to give aid if other bystandfers r there</p>
                    <p><strong>Social Exchange Theory</strong>: theory our social behavior is an exchange process where we want to maximuize benefits and minimize costs</p>
                    <p><strong>Just-world Phenomenon</strong>: believing the worldf is just and ppl get what they deserve / deserve what they get</p>
                    <p><strong>Attribution Theory</strong>: theory we explain behavior by crediting either the situation (situational attribution) or the person's stable enduring traits (dispositional attribution)</p>
                    <p><strong>Fundamental Attribution Error</strong>: tendency for observors to underestimate impact of situation and overestimate personal dispotion when analyzing other people's behavior</p>
                    <p><strong>Foot-in-the-door Phenomenon</strong>: people who first agreed w smaller request later comply w larger request</p>
                    <p><strong>Door-in-the-face</strong>: Large request first which is expecrted to be refused, followed by smaller more reasonable request more likely to be approved</p>
                    <p><strong>Cognitive Dissonance Theory</strong>: we act to reduce dissonance/discomfort we feel when our cognitive/thoughts are inconsistent, so we change our attitude when our actions go against them </p>
                    <p><strong>Halo Effect</strong>: cofnititve bias where overal positive impression of person influences how wel feel abt their traits (someone is smart or kind just bc their atttactive)</p>
                    <p><strong>Social Reciprocity Norm</strong>: social norm when ppl feel obligated to return favor / pressure to do the same</p>
                    <p><strong>Social Responsibility Norm</strong>: social norm/expectation that ppl shd help others who need help even if no personal gain bc its the right thing to do</p>


                    <h3>Persuasion</h3>
                    <p><strong>Elaboration Likelihood Model</strong>: People can be persuaded through central vs peripheral route and the route used depends on motivatew/ability to process info</p>
                    <div>
                        <div>
                            <p><strong>Central Route to Persuasion</strong></p>
                            <p>INfluencing ppl's thinking through evidence and arguemtns</p>
                        </div>
                        <div>
                            <p><strong>Peripheral Route to Persuasion</strong></p>
                            <p>Influencing ppl based on incidental cues like attractiveness of spewaker</p>
                        </div>
                    </div>
            
                    <h3>Attachment (Ainsworth)</h3>
                    <div>
                        <div>
                            <p><strong>Secure Attachment</strong></p>
                            <p>Infants who comfortable explore when caregiver present, only temp distress when caregiver leaves, comfrted by caregiver return</p>
                        </div>
                        <div>
                            <p><strong>Insecure-Avoidant Attachment</strong></p>
                            <p>Infants avoidant/resists closeness and emotionaly distant w/o distress when caregiver leavess</p>
                        </div>
                        <div>
                            <p><strong>Insecure-Anxious/Ambivalent Attachment</strong></p>
                            <p>Infants clingy/anxious to caregiver, very distressed when caregiver leaves, untrusting/not easily comforted by return, mixed signals of seeking/ressitng comfort</p>
                        </div>
                        <div>
                            <p><strong>Insecure-Disorganized Attachment</strong></p>
                            <p>Infants confused/contradictory behavior, approacing but also avoidnign caregiver, seeming dazed or fearful, often linked to trauma</p>
                        </div>
                    </div>

                    <h3>Etc</h3>
                    <p><strong>Social Trap</strong>: 2 parties pursue self interest instead of group caught in mutually descrutrive behavior</p>
                    <p><strong>Self-fulfilling Prophecy</strong>: belief that leads to its own fulfillment</p>
                    <p><strong>Altruism:</strong> unselfish regard for welfare of others</p>
                    <p><strong>Superodrinate goals</strong>: shared goals overriding differences among ppl and requiring cooprration</p>
                    <p><strong>Prosocial behavior</strong>: positive constructive helpful behavior (opposite of antiscoialk)</p>
                    <p><strong>Prejudice</strong>: unjust5ifiable negative attitude towards a group invovling sterotypes/generalizations and negative emotions and discriminiation. Stems frrom social inequality and biases</p>
                    <p><strong>Relative Deprivation</strong>: perception that we r worse off relative to those w when we compare outrselves</p>
                    <p><strong>Optimistic Explanatory Style vs Pessimistic Explanatory Style</strong> optimists describe positive things based on permamnenty, negative things temporary. pessimisits say psotive things r tmepeorary/luck and negative things r permsnnent</p>
                    <p><strong>Upward vs Downward Social Comparsion</strong> upward is comparing urself to somoene better to motivate improvement/inspiration, downward is comparing to someone worse to make u feel better</p>
                    <p><strong>Social Debt</strong>: feeling of obligation to return a favor when someone did smth for u influencing complaince/behaviopr</p>
                    `
            }
        }
    },
    "AP Computer Science A": {
        units: {
            "Unit 1: Using Objects and Methods": {
                tags: ["objects", "variables", "data types", "methods", "classes", "strings"],
                content: `
                    <h3>1.1: Introduction to Algorithems, Porgramming, and Compilers</h3>
                    <p>Computer Science - how computers work and how to use it to solve problems (ex: programming instructng compouter, data science analyzing data, cybersecurity protecting securie networks)</p>
                    <p>Algorithems - define ste4p by step processes to follow when completing a task or solving a problem, central to CS, diff algorithms can accomplish same task</p>
                    <p>Sequencing - defines order for when steps in an algorithem are completed</p>
                    <p>JAVA - popular programming languages, android apps, large/reliable software systems</p>
                    <p>CLASSES - collections of classes make up java programs, container for code w a purpose, groups together related data (attributes) and actions (methods)</p>

                    <p><strong>MAIN CLASS</strong></p>
                    <p>Class names should be descriptive and use CamelCase, should matdch the name of the file</p>
                    <p>public class HelloWorld{}</p>
                    <p>public static void main(String[] args) {} inside the class, needed for Java program to run</p>
                    <p>Each line of code is a statement / single command for the computer to follow</p>
                    <p>Print statemet: System.out.println("Quote"); if on its own line and new line created after, System.out.print("Quote"); if on its own line but new line not created</p>
                    <p>IDE (integrated development environments) - editor which includes file tree with .java files which match class names, editor, and output starting w main method</p>
                    <p>Typically any classes/methods are indented if nested in each ohter</p>

                    <p>First write code anywhere (even text editor works, but typically IDE used!), then compile code (compiler translates Java code into format computer can understand), then run code following program's instructions</p>
                    <p>IDE (integrated development environemtn) - has tools like compiles to help run, like syntax highlighting to find errors (syntax is correct way to write a program)</p>
                    <p>Debugging - finding an fixing bugs/error</p>
                    <p>SYNTAX ERROR: making mistake in program where programming language rules not followed, like missing braces or semicolons leading to an error, happens when compiling code</p>
                    <p>LOGIC ERROR: happens when program is being run, mistake in program leading to incorrect/unexpected behavior, test and see if expected output = actual output</p>
                    <p>RUNTIME ERROR: mistake in program occuring during execution of a program, during runtime causing abnormal stop (ex: receives number instead of letter). Exceptions are types of run-time error caused by issue not caught by compiler like index out of bounds or incorrect type</p>
                
                    <h3>1.2: Variables & Data Types</h3>
                    <p>VARIABLE - storage location that holds a value and has a unique name/label and data type</p>
                    <ul>
                        <li>Declaring: type name; (ex: int numCats)</li>
                        <li>When naming, start w a letter, $, or _ and describe value it stores, write in lowerCamelCase</li>
                        <li>Initializing: assigning variable a value, must be initialized before used and value assigned must match datatype otherwise syntax error (ex: numCats = 5;)</li>
                        <li>Can declare & initialize both in one line too (ex: int numCats = 5;)</li>
                        <li>Variables can be updated, don't include datatype when updating/assinging new value</p>
                    </ul>
                    <p>DATA TYPE - specifies type of info variable can store, and what you can do w the info (primitive vs ref types)</p>
                    <ul>
                        <li>PRIMITIVE: basic-est data type representing simplest data building blocks, (ex: int double boolean char - single quote letter/num/symbols)</li>
                    </ul>
                    <p>FINAL - declaring a variable final prevents it from being altered (ex: final int numCats=5;)</p>

                    <h3>1.3: Expressions & Output</h3>
                    <p>LITERAL - fixed value you write directly in code that stays constant throughout program and used exactly as is (means exactly what it says, for ex string literal is seq of characterrs in quotes)</p>
                    <p>PRINTING: use System.out.println() which moves cursor to new line after printing or System.out.print() which stays on same line after printing</p>
                    <p>ESCAPE SEQUENCES: include special characters and actions in String literals, like \\\" alows quotes, \\n creates line break in String, \\t inserts a tab space, \\\\ includes backslash</p>
                    <p>ARITHMETIC EXPRESSION: combo of numbers, variables, and operators telling computer to perform a math calculation, arithmetic operator is symbol representing an operation, +-*/% (% is remainder). Compound expressions do parantheses, then multiplication/divsion/modulo, then addition/subtraction</p>

                    <p><strong>Int vs Double</strong></p>
                    <ul>
                        <li>When integer assigned to variable w double data type, integer is automatically converted to decimal value (double num = 5; -> double num = 5.0;)</li>
                        <li>Arithmetic operation that use 2 ints will evaluate to an int (even if division so 10/3 will give 3 since it'll truncate 3.33)</li>
                        <li>Arithmetic operation w at least one double value will evaluate to a double value (so if one num is double when dividing, result is quotient)</li>
                        <li>Dividing int by zero causes ArithmeticException (runtime error), dividing double by zero causes Infinity</li>
                    </ul>

                    <h3>1.4: Assignment Statements and Input</h3>
                    <p>Assignment statement - assigning variable a value using assignment operator = which allows program to intiialize/change variables, right side evaluated first and assigned to left side variable (ex: int x = 5 + 3; assigns 8 to x), value on right is stored/assigned to the variable on the left, not rlly equals</p>
                    <p>Initializing variables w an expression, the expression is evaluated to one value/solved before being assigned to the variable</p>
                    <p>Null - special literal value indicating reference not associated w any object</p>
                    <p>REFERENCE VARIABLES: null and strings are reference vars</p>

                    <p><strong>User Input</strong></p>
                    <p>Enables engaging/interactive programs</p>
                    <p>SCANNER CLASS - read user input into programs, get String, double, int, or boolean input if u create a Scanner object</p>
                    <ol>
                        <li>Import Scanner class (import java.util.Scanner;)</li>
                        <li>Add main class and method</li>
                        <li>Create Scanner object variable (Scanner input = new Scanner(System.in);)</li>
                        <li>Use print statement to prompt the user</li>
                        <li>Use Scanner method to get input using methods like .nextLine() for string input, .nextInt() for int input, .nextDouble() for double input, .nextBoolean() for boolean input and store this in a variable!!!</li>
                        <li>Make sure method type matches variable type, and use input.method or wtv u named the object</li>
                    </ol>
                    <p>BUFFER: sometimes nextInt() or nextDouble() leave behind a \\n character so if you try to use nextLine() right after, it reads the leftover newline instead of new input, so use input.nextLine() twice</p>

                    <h3>1.5: Casting & Range of Variables</h3>
                    <ul>
                        <p>When integer value is assigned to a double, the integer automatically converted to double</p>
                        <p>CASTING - converting one data type into another data type</p>
                        <p>Automatic Widening - int values automatically cast/widened to double values (int x=10; double y=x;), Java automatically converts int to double when int assigned to double var</p>
                        <p>When dividing, if its two ints answer will be truncated to an int, but if at least one double will give u double quotient</p>
                        <p>Cast an int to a double using casting operator (double) right in front value u want to convert, or cast double to an int using casting operator (int) which truncates</p>
                        <p>Rounding with casting - use (int) (x+0.5) to round double values to closest integer, or use (int)(x-0.5) to round double negative values to closest integert</p>
                    </ul>
                    <p>RANGE OF VARIABLES: -2147483648 (Integer.MIN_VALUE) and 2147483647 (Integer.MAX_VALUE)</p>
                    <p>Integer overflow circles back to min if u try to go above max value, integer underflow does opposite if u try to go below min</p>
                    <p>Round-off error: sometimes rounded to nearest value that fits within available bits since bits are limited, so consider using ints to avoid rounding error when possoible (or BigDecimal class)</p>

                    <h3>1.6: Compound Assignment Operators</h3>
                    <p>Update variable using its own current value</p>
                    <p>Increment/decrement using name=name+1; name=name-1; or use compound assignment operators like name+=1; name-=1; or even name++; or name--; which combines arithmetic operator w assignment operator</p>

                    <h3>1.7: Application Program Interface (API) and Libraries</h3>
                    <p>Classes have methods (inlcuding main method) and attributes</p>
                    <p>Libraries (collections of prewritten code) and packages (collections of related classes) - premade pieces of code to simplify/shorten code and time</p>
                    <p>Standard is java.lang which includes String, Math, Runtime, System</p>
                    <p>java.util - Scanner, Random, ArrayList, HashMap</p>
                    <p>String class has attributes (characters) and methods (contains() and equals() and replace())</p>

                    <p><strong>Application Programming Interface (API)</strong></p>
                    <p>API is set of tools, classes, and methods that library makes available for you to use, read API documentation to learn how to use these tools which explains what each method does and how to use it effectively</p>
                    <p>Java APIs like Oracle show how to use core Java libraries</p>

                    <h3>1.8: Documentation with Comments</h3>
                    <p>Comments document and explain how code works by clairifiying and managing/document/track/disable funcigton/development through explanatory notes, ignored by compiler and not executed</p>
                    <p>Written by OG programmer and other programmers, concise, relevant/helpful, provide insight into why</p>
                    <p> //Single Line comment or /*Single Line Comment*/ which can be before or next to code</p>
                    <p>//Multi       /*</p>
                    <p>//Line        * Multi-line comments which can comment out code in debugging</p>
                    <p>//Comment     */</p>
                    <p>>Javadoc comments - /** */ multiline comment used to generate API documentation, starts w one sentence description of methods function, then preconditions, then post conditions, then empty line, then last line is block tags</p>
                    <p>Block tags - follow format @tag like @param and @return indicating methods parameters and return values</p>

                    <h3>1.9: Method Signatures</h3>
                    <p>Methods - named blocks of code that run when called, allowing u to organize and break down code (java doc comment, then public type name(type param){ codeeblock}</p>
                    <p>Method Signature - name(int param, type param)</p>
                    <p>Parameters - variable declared in signature that can be used in method body</p>
                    <p>Return type - data type of value method returns, void if it doesn't return anything, error if return type doesn't match</p>
                    <p>Public / private is visibilityy and whehter it can be used by other classes/methods/files</p>
                    <p>Adding static keyword makes it a class method which belongs to class itself instead of any specific instnace/object</p>
                    <p>Method won't execute until called, which is done using the method signature</p>
                    <p>Argument  - value passed into method parameter when method called</p>
                    <p>When method is called, the call line is run, then method is run, then goes back to call line</p>
                    <p>Overloaded methods - method w same name and diff parameters or diff parametrer types for mutliple ways to be called / simpler program</p>

                    <h3>1.10: Calling Class Methods</h3>
                    <p>Class Methods - methods that belong to class itself and can be called w/o creating instance object of the class, have static keyword, make code organized while reducing redundancy/errors so can be used w/o creating objects in multiple files</p>
                    <p>Instance Methods - defined in class but only called by objects created from the class</p>

                    <h3>1.11: Math Class</h3>
                    <p>Math class contains builtin methods for math functions like finding max values, square roots, powers, w/o needing to write code yourself, default so doesn't need to be imported</p>
                    <ul>
                        <li>Math.abs(x) returns absolute value of x, overloaded to accept/return int or double</li>
                        <li>Math.pow(base, exponent) returns value of base raised to power of exponent</li>
                        <li>Math.sqrt(x) returns positive square root of x</li>
                        <li>Math.random() returns double between 0.0 (inclusive) and 1.0 (exclusive), can manipulate to do (int)(Math.random()*(numValues))+offset where numValues is end-start+1 and offset is starting number</li>
                    </ul>

                    <h3>1.12: Objects: Instances of Classes</h3>
                    <p>Encapsulation - bundling related info together to organize programs and manage access/reusailty</p>
                    <p>Abstraction - hide complex internal processes and focus on higher level logic</p>
                    <p>Objects - instances of the classs where class is a template for onbject attributes/methods, stored at a memory address as a reference type so accessing var accessses address whcih points to type (reassinging it still keeps the object in memory but updates pointer, duplicating class makes new address that points at same object)</p>
                
                    <h3>1.13: Object Creation & Storage (Instantiation)</h3>
                    <p>Creating object is Datatype name = new Datatype(args) where Datatype is name of the class and it calls the class's constrructor</p>
                    <p>New operator creartes spot in memory</p>
                    <p>Constructor - special element in class intiializeing object when called and assigns initial values to attriobnutes, doesnt have a return type, signature is public Classname(param){} and it sets instance varfiables, can be overloadwed</p>
                    <p>When creating a object, call by value intiializes parameters w copies of the arguments, if not assigned value yet object is null</p>
                    <p>INSANCE variables/methods are diff for each instance/object of a class</p>
                    <p>Printing object will print automatic toString() ethod which is inherited and it prints memory address, but u can method override by creating classspecific toString() method to return custom thing</p>
                    
                    <h3>1.14: Calling Instance Methods</h3>
                    <p>Instance methods only called from objects you create from the class</p>

                    <h3>1.15: String Manipulation</h3>
                    <p>String - ordered charater sequence object part of java.lang default package, stores memory address which refers to spot in memory where string is stored</p>
                    <p>String concatenation - combined using +, u can concatenate primitve w a string and java automaticalyl does implicit conversion, or if object is concatenated, its toString method is called</p>
                    <p>Strings are immutable - cant change once created, you can reassign new value but original one still exists unchanged in memory</p>
                    <p>String pool - memory place storing strings, tries to reuse strings to save memory if psossioble unless new keyword used</p>
                    <p>String methods - instance methods that need a string object to be used</p>
                    <ul>
                        <li>int length() retyutrns num charascters in a string</li>
                        <li>String substring(int from, int to) returns substring starting at index from, ending at index to-1</li>
                        <li>String substring(int from) retunrs substirng starting at index from through end of string</li>
                        <li>String indexOf(String str) returns index of first occurrence of str in string or -1 if not found</li>
                        <li>boolean equals(String ohter) returns true if string has same characters in same order as other string, false otherwise to compare actual strings instead of memory addresses (CASE SENSITIVE)</li>
                        <li>int compareTo(String other) compares string character by character based on alphabet order, returns negative if string less thsan other, 0 if ewqual, or psoitive if string greater thasn other</li>
                    </ul>
                    <li>String final index value = index-1</li>
                    <li>Accessing string index out of range causes excpetion/runtime error</li>
                    <li>Access a single letter using substring(index, index+1) which returns String (not char!!!)</li>
                    <li>Insert string into another using substring</li>
                    `
            },
            "Unit 2: Selection & Iteration": {
                tags: ["Booleans", "If Statements", "Loops"],
                content: `
                    <h2>2.2: Boolean Expressions</h2>
                    <p>TRUE or FALSE statement usually through rational operator comparing two values (ints/doubles) (<>=!) forming boolean expressions</p>
                    <p>= and == have diff functions (assingment vs equality)</p>
                    <p>Relational operators == and != compare reference types memory address but not properties themselves so use .equals() for strings and objkects</p>

                    <h2>2.3: If Statements</h2>
                    <p>Selection statement - execute diff code based on boolean expression value, allows for customization and changing sequential execution of statements</p>
                    <p>If statmeent - one way selection, execute code if boolean true if(boolean){truecode}</p>
                    <p>If-else statement - two way selection, execute code if boolean true or false if(boolean){truecode}else{falsecode}</p>

                    <h2>2.4: Nested If Statements</h2>
                    <p>If-else-if stagtement - multiway selection for multiple segments of code, if(boolean1){truecode}else if(boolean2){truecode} else{false code}</p>
                    <p>Nested if statements- multiple codependent conditions leading to if statements inside each other</p>

                    <h2>2.5: Compound Boolean Expression</h2>
                    <p>Logical operators - combine conditions into single Boolean statements (not !, and &&, or ||)</p>
                    <p>NOT ! - evaluates condition to opposite boolean value</p>
                    <p>AND && - evaluates true if all conditions are true, false otherwise</p>
                    <p>OR || - evaluates true if at least one condition is true</p>
                    <p>Short circuit evaluation - if any boolean is false for AND operator, entire expression is false. if any is true for OR operator, entire expression is true.</p>
                    <p>Order of Precedence - NOT then AND then OR </p>

                    <h2>2.6: Comparing Boolean Expressions</h2>
                    <p>DeMorgan's Rule = !NOT can be distributed by turning values into opposite so !(a&&b) = !a || !b since we turned a and b into their opposites and changed && to ||. Creates equivalent expressions by negatives ands and ors (proved using truth tables)</p>
                    <p>.equals() compare actual objects instead of their memory address references. Usually classes have custom .equals() method, like String has one already whioch checks if attributes are eaquivalent</p>
                    <p>Compare object reference w null using != and == if you want</p>

                    <h2>2.7: While Loops</h2>
                    <p>WHILE LOOP - keeps looping/repeating block of code until a condition is met/boolean=false</p>
                    <p>int x=0; while(x<10) {block.....x++;} keeps running and incrememnting x until boolean faalse. Does not get to code after loop until finished looping</p>
                    <p>Off By One Error - loop iterates one too few or one too many times. (ex: if var starts at 0 and while(var<num) itll loop num+1 times</p>
                    <p>Infinite Loop - if Boolean is always true.</p>
                    <p>Break statement - break out of while loop and continue program execution. Doesn't run code after it in the loop </p>
                    <p>Return statement - pass value out of method sometimes, or just exit loop and method when executed, so following code in the loop or method is not run</p>

                    <h2>2.8: For Loops</h2>
                    <p>FOR LOOPS - repeats instructions and loops a fixed number of times</p>
                    <p>for(initialization of loop var (only happens once); boolean expression; update/increment){ codeblock}</p>
                    <p>if for(int i=a; i<b; i++) code runs b-a times. If for(int i=a; i<=b; i++) code runs b-a+1 times</p>
                    <p>For loops can be written as while loops and vice versa</p>
                    <p>While loops typically better for undetermined amt of iterations, for loops for predetermiend num</p>

                    <h2>2.9: Implementing Selection & Iteration Algorithms</h2>
                    <p>Use if/else and loops to solve problems w/ code making algorithms like running average, max/min</p>

                    <h2>2.10: Implementing String Algorithms</h2>
                    <p>String - ordered seq of characters in double quotes, each character has a specifici index starting at 0 ending at length-1</p>
                    <p>.substring(a,b) returns substring starting at a ending at b (inclusive of a but exlcusive of b), useful in traversals, stores string value</p>
                    <p>Ex of traversal: for(int i=0; i<string.length(); i++){string.substring(i+i+1)} goes character at a time, make sure use < not <= to avoid out of bounds error</p>
                    <p>OR .charAt(index) accesses individual characters in a string, storing a char value</p>
                    <p>Algorithms - counts substrings that meet criteria, finds a properties like replacing all vowels, reversing stirngs often using empty string to store revrsed stirng and going backwards by starting at string.length()-1 and decreasing</p>

                    <h2>2.11: Nested Iteration</h2>
                    <p>For loops or while loops inside each other to create rows/columns (multiply outerloop * innerloop rpeeititons for total # of repeititons). Use different inner/outer loop control vsariables, outer loop var can be accessed from inside but not vice versa. Inner loop must compete all iterations before outer loop continues</p>

                    <h2>2.12: Informal Run-Time Analysis</h2>
                    <p>Algorithm - step by step process solving a problem, efficient (lower CPU processing time), underastnabdle, working</p>
                    <p>CPU / Central Processing Unit - electornic circuitry in computet that carries out instructions, processing time is time spent reading instructions, efficient programs are shorter/less steps/less processing time</p>
                    <p>Estimate CPU Processing Time using STATEMENT EXECUTION COUNT and CODE TRACING/TRACE TABLES (minimize execution count)</p>
                `
            },
        }
    }
};

// functionality for switching between units &stuff
let currentClass = null;
let currentUnit = null;

function init() {
  const classList = document.getElementById('classList');
  Object.keys(NOTES).forEach(cls => {
    const btn = document.createElement('button');
    btn.className = 'class-btn';
    btn.innerHTML = `<span class="class-dot"></span>${cls}`;
    btn.onclick = () => selectClass(cls);
    classList.appendChild(btn);
  });
}

function selectClass(cls) {
  currentClass = cls;
  document.querySelectorAll('.class-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.trim() === cls);
  });
  document.getElementById('bc-class').textContent = cls;

  const unitList = document.getElementById('unitList');
  unitList.innerHTML = '';
  const units = Object.keys(NOTES[cls].units);
  units.forEach(unit => {
    const btn = document.createElement('button');
    btn.className = 'unit-btn';
    btn.textContent = unit;
    btn.onclick = () => selectUnit(cls, unit);
    unitList.appendChild(btn);
  });

  if (units.length > 0) selectUnit(cls, units[0]);
}

function selectUnit(cls, unit) {
  currentUnit = unit;
  document.querySelectorAll('.unit-btn').forEach(b => {
    b.classList.toggle('active', b.textContent === unit);
  });

  document.getElementById('bc-class').textContent = cls;

  renderNotes(cls, unit);
}

function renderNotes(cls, unit) {
  const data = NOTES[cls].units[unit];
  const body = document.getElementById('notesBody');

  const tagsHtml = (data.tags || []).map(t => `<span class="tag">${t}</span>`).join('');

  const psychCurriculumNote =
    cls === 'AP Psychology'
      ? `<div class="psych-curriculum-note" role="note"><strong>Note:</strong> Chapters and sections below are not necessarily in official AP Psychology curriculum order.</div>`
      : '';

  body.innerHTML = `
    <div class="note-header">
      <h1>${unit}</h1>
      <div class="note-meta">
        <span>${cls}</span>
        <span class="note-meta-sep">|</span>
        <span>study notes</span>
      </div>
      <div class="tags-row">${tagsHtml}</div>
      <div class="divider"></div>
    </div>
    <div class="note-content">${psychCurriculumNote}${data.content}</div>
  `;

  normalizeNoteMarkup();
  applyAutoStylingTags();
  buildOutline();
  body.scrollTop = 0;
}

function normalizeNoteMarkup() {
  const content = document.querySelector('.note-content');
  if (!content) return;

  const containers = [content, ...content.querySelectorAll('div, section, article')];

  containers.forEach(container => {
    const children = Array.from(container.children);
    let i = 0;

    while (i < children.length) {
      const node = children[i];
      if (node.tagName !== 'P' || !isListLikeParagraph(node)) {
        i += 1;
        continue;
      }

      const run = [];
      let j = i;

      while (
        j < children.length &&
        children[j].tagName === 'P' &&
        !children[j].classList.contains('note-card-title') &&
        isListLikeParagraph(children[j])
      ) {
        run.push(children[j]);
        j += 1;
      }

      if (run.length >= 2) {
        const list = document.createElement('ul');
        const anchor = run[0];
        container.insertBefore(list, anchor);
        run.forEach(p => {
          const li = document.createElement('li');
          li.innerHTML = p.innerHTML;
          list.appendChild(li);
          p.remove();
        });
      }

      i = j;
    }
  });
}

function isListLikeParagraph(p) {
  if (p.classList.contains('note-card-title')) return false;
  if (p.closest('.callout')) return false;

  const text = p.textContent.trim();
  if (!text) return false;

  const startsWithBullet = /^[\-*•]\s+/.test(text);
  const startsWithNumber = /^\d+[\).:-]\s+/.test(text);
  const hasShortLeadWithColon =
    text.includes(':') &&
    text.indexOf(':') > 0 &&
    text.indexOf(':') <= 45;
  const startsWithStrong = p.firstElementChild?.tagName === 'STRONG';

  return startsWithBullet || startsWithNumber || startsWithStrong || hasShortLeadWithColon;
}

function applyAutoStylingTags() {
  const content = document.querySelector('.note-content');
  if (!content) return;

  const divs = Array.from(content.querySelectorAll('div')).filter(
    d => !d.classList.contains('psych-curriculum-note')
  );

  divs.forEach(div => div.classList.add('note-auto-box'));

  divs.forEach(div => {
    const directChildren = Array.from(div.children);
    const childDivs = directChildren.filter(child => child.tagName === 'DIV');
    const nonDivChildren = directChildren.filter(child => child.tagName !== 'DIV');

    const hasOnlyDivChildren = childDivs.length > 0 && nonDivChildren.length === 0;
    const hasMixedChildren = childDivs.length > 0 && nonDivChildren.length > 0;
    const hasNoDivChildren = childDivs.length === 0;

    if (hasOnlyDivChildren && childDivs.length >= 2) {
      div.classList.add('note-auto-grid');
      childDivs.forEach(child => child.classList.add('note-auto-card'));
      return;
    }

    if (hasMixedChildren) {
      div.classList.add('note-auto-panel');
      childDivs.forEach(child => child.classList.add('note-auto-card'));
      return;
    }

    if (hasNoDivChildren) {
      div.classList.add('note-auto-card');
    }
  });
}

function buildOutline() {
  const body = document.getElementById('notesBody');
  const outlineList = document.getElementById('outlineList');
  outlineList.innerHTML = '';

  const headings = body.querySelectorAll('.note-content h2, .note-content h3, .note-content h4');

  if (headings.length === 0) {
    outlineList.innerHTML = '<div style="padding:0 16px;font-size:11px;color:var(--ink3);font-family:var(--mono)">no headings found</div>';
    return;
  }

  headings.forEach((el, i) => {
    if (!el.id) el.id = 'heading-' + i;

    const btn = document.createElement('button');
    if (el.tagName === 'H2') btn.className = 'ol-h2';
    else if (el.tagName === 'H3') btn.className = 'ol-h3';
    else btn.className = 'ol-h4';

    btn.textContent = el.textContent;
    btn.onclick = () => {
      const nb = document.getElementById('notesBody');
      const elTop = el.getBoundingClientRect().top;
      const nbTop = nb.getBoundingClientRect().top;
      nb.scrollBy({ top: elTop - nbTop - 16, behavior: 'smooth' });
    };
    btn.setAttribute('data-id', el.id);
    outlineList.appendChild(btn);
  });
}

function updateScrollSpy() {
  const body = document.getElementById('notesBody');
  const headings = body.querySelectorAll('.note-content h2, .note-content h3, .note-content h4');
  let current = null;

  headings.forEach(h => {
    if (h.getBoundingClientRect().top < 160) current = h.id;
  });

  document.querySelectorAll('.ol-h2, .ol-h3, .ol-h4').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-id') === current);
  });
}

function handleSearch() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!q) return;

  const results = [];
  Object.entries(NOTES).forEach(([cls, clsData]) => {
    Object.entries(clsData.units).forEach(([unit, unitData]) => {
      const combined = (unit + ' ' + unitData.content).toLowerCase();
      if (combined.includes(q)) {
        results.push({ cls, unit });
      }
    });
  });

  if (results.length > 0) {
    selectClass(results[0].cls);
    selectUnit(results[0].cls, results[0].unit);
  }
}

document.getElementById('searchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleSearch();
});

document.getElementById('notesBody').addEventListener('scroll', updateScrollSpy);

init();